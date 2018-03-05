import { Interval } from 'waveshaper';
import DomRenderWaveShaper from '../core/domrender-waveshaper';
import { DomOptions } from '../config/dom-config';

/**
 * Adds drag functionality to waveshaper
 * 
 * @param manager
 * @param hammer
 */
export default (manager: DomRenderWaveShaper, hammer: HammerManager) => {

    const shouldHandle = (target: HTMLElement, options: DomOptions) => options.mode === 'cut' && target.hasAttribute('data-wave-id');

    hammer.on('tap', (ev: HammerInput) => { 
        const options = manager.options;
        const target = manager.options.getEventTarget(ev.srcEvent);
        if(options == null || !shouldHandle(target, options))
            return;

        // Allready checked for null
        const id = <string>target.getAttribute('data-wave-id');

        const wave = manager.getTrack(id);
        if(wave == null) return;

        const bb = target.getBoundingClientRect();
        const time = (options.scrollPosition + (ev.center.x - bb.left)) * (options.samplesPerPixel / options.samplerate);

        const interval = wave.flattened.find(i => i.start + i.offsetStart <= time && i.end >= time);
        if(interval == null) return;

        const segment = wave.intervals.find(s => s.id === interval.id);
        if(segment == null) return;

        const newSegment: Interval = { 
            ...segment, 
            offsetStart: time - segment.start,
            id: options.generateId() 
        };

        segment.end = time;
        wave.intervals.push(newSegment);
        
        manager.flatten(wave.id);
        manager.process(wave.id);
    });
}