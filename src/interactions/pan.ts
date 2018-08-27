import DomRenderWaveShaper from '../core/domrender-waveshaper';
import { DomOptions } from '../config/dom-config';

const endMargin = 500;

interface PanState {
    panStart: number;
    panMax: number;
    options: DomOptions | null;
}

const panState: PanState = {
    panStart: 0,
    panMax: 0,
    options: null
}

/**
 * Adds pan functionality to waveshaper
 * 
 * @param manager
 * @param hammer
 */
export default function(manager: DomRenderWaveShaper, hammer: HammerManager) {

    const shouldHandle = (target: HTMLElement, options: DomOptions) => options.mode === 'pan' && target.hasAttribute('data-wave-id');

    hammer.on('panstart', (ev) => { 
        const options = manager.options;
        const target = manager.options.getEventTarget(ev.srcEvent);
        if(!shouldHandle(target, options))
            return;

        if(ev.srcEvent instanceof PointerEvent) { 
            target.setPointerCapture(ev.srcEvent.pointerId);
        }

        panState.panMax = manager.scrollWidth + endMargin;
        panState.panStart = options.scrollPosition;
    });

    hammer.on('panmove', (ev) =>  {
        panState.options = manager.options;
        const target = manager.options.getEventTarget(ev.srcEvent);

        if(!shouldHandle(target, panState.options))
            return;

        const position = panState.panStart - ev.deltaX;
        const newPosition = Math.floor(position > 0 ? position : 0);
        const change = newPosition - panState.options.scrollPosition;

        // If it was and is still 0 no need to update
        if(newPosition === panState.options.scrollPosition)
            return;

        if(newPosition > panState.panMax - panState.options.width)
            return;
        
        const start = change > 0 ? panState.options.width - change : 0;
        const width = Math.abs(change);
        
        manager.setOptions({ scrollPosition: newPosition }).process(undefined, start, width, change);
    });

    hammer.on('panend', (ev) => {
        const target = manager.options.getEventTarget(ev.srcEvent);
        if(panState.options == null || !shouldHandle(target, panState.options))
            return;

        panState.options = null;
        panState.panStart = 0;
        panState.panMax = 0;
    });
}