import { WaveShaper } from "waveshaper";
import * as Hammer from "hammerjs";

import hammerConfig from '../config/hammerconfig';
import cut from '../interactions/cut';
import drag from '../interactions/drag';
import pan from '../interactions/pan';
import zoom from '../interactions/zoom';
import resize from '../interactions/resize';
import line from '../render/line';
import enter from '../interactions/enter';
import defaultDomOptions, { DomInput, DomOptions } from "../config/dom-config";
import { dragState } from "../models/dragstate";

/**
 * Extends WaveShapeManager to allow for easy canvas rendering registration.
 * 
 * @inheritDoc
 */
export default class DomRenderWaveShaper extends WaveShaper {
    private unregister = () => {};

    private unregisterMap = new Map<string, () => void>();
    private canvasMap = new Map<string, () => void>();

    public get scrollWidth(): number { return (this._duration * this._options.samplerate) / this._options.samplesPerPixel }

    public get options(): DomOptions { return { ...this._options }; }
    protected _options: DomOptions;

    public get hammer(): HammerManager | null { return this._hammer; }
    protected _hammer: HammerManager | null;

    constructor(options: DomInput = defaultDomOptions) {
        super(options);

        this._options = { ...defaultDomOptions, ...this._options };
    }

    setOptions(input: DomInput) {
        this._options = { ...this._options, ...input };
        this.invokeOptionsCallbacks(this.options);

        return this;
    }

    /**
     * @description When a canvas is registered through this method each time the 
     * waveform is updated the canvas will be rerendered.
     * 
     * It returns an unregister method, call to stop receiving callbacks.
     * 
     * @param id WaveShaper id to register to.
     * @param canvas Canvas to render to
     * @param color Background color of segments
     */
    registerCanvas(id: string, canvas: HTMLCanvasElement, color: string): DomRenderWaveShaper {
        const ctx = canvas.getContext('2d');
        if(ctx == null) throw Error('Cannot get context from canvas.');

        // Add classes and data attributes
        canvas.classList.add('waveshaper');
        canvas.setAttribute('data-wave-id', id);

        canvas.style.width = this.options.width + 'px';
        canvas.style.height = this.options.height + 'px';

        const scale = (devicePixelRatio || 1) < 1 ? 1 : (devicePixelRatio || 1);

        canvas.width = this.options.width * scale;
        canvas.height = this.options.height;
        
        ctx.scale(scale, 1)

        const callBack = (options: DomOptions, data: Float32Array) => line(data, options, ctx, color)
        this.on(id, callBack);

        this.unregisterCanvas(id);

        
        this.canvasMap.set(id, () => this.off(id, callBack));

        const unregister = enter(this, canvas, dragState);
        this.unregisterMap.set(id, unregister);

        // If registerSetsActive is true 
        if(this._options.registerSetsActive) {
            this.setActive(...this.activeWaveShapers.concat(id));
        }

        return this;
    }

    /**
     * Clears the callbacks associated with this canvas
     * 
     * @param id 
     * @returns Instance of WaveShaper
     */
    unregisterCanvas(id: string): DomRenderWaveShaper {
        const unregister = this.canvasMap.get(id);
        if(unregister != null) {
            unregister();
            this.canvasMap.delete(id);
        }

        const unregisterEvents = this.unregisterMap.get(id);
        if(unregisterEvents != null) {
            unregisterEvents();
            this.unregisterMap.delete(id);
        }

        if(this._options.registerSetsActive) {
            const index = this.activeWaveShapers.indexOf(id);
            if(index != -1) this.setActive(...this.activeWaveShapers.splice(index, 1));
        }

        return this;
    }

    /**
     * Loads and saves a set of url's to audio files.
     * 
     * @param ctx 
     * @param data 
     */
    loadData(ctx: AudioContext, ...data: { id: string, url: string }[]): DomRenderWaveShaper {
        data.forEach(dat => {
            fetch(dat.url)
            .then(res => res.arrayBuffer())
            .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                this.setData({ id: dat.id, data: audioBuffer.getChannelData(0) }).process();
            })
            .catch(e => console.log(e));
        });
        
        return this;
    }

    setInteraction(element: HTMLElement) {
        if(element == null) throw Error('Interaction container element could not be found.');
        this.unregister();

        element.setAttribute('touch-action', 'none');
        
        const hammer = new Hammer(element, hammerConfig);
        this._hammer = hammer;
    
        drag(this, hammer, dragState);
        cut(this, hammer);
        pan(this, hammer);
        zoom(this, hammer);
        resize(this, hammer);
    
        this.unregister = () => {
            hammer.destroy();
        };

        return this;
    }

    clearInteraction() {
        this.unregister();
        this.unregister = () => { };

        this._hammer = null;
    }
}