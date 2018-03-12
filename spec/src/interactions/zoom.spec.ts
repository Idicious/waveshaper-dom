//import * as $ from 'jquery';
import WS from '../../../src';

describe('Zoom functionality tests.', () => {
    it('Zooms in correctly.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'pan', samplesPerPixel: 1024, scrollPosition: 10 });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const srcEvent = { target: canvas }

        WS.hammer.emit('pinchstart', {
            srcEvent
        });

        WS.hammer.emit('pinchmove', {
            srcEvent,
            scale: 0.5
        });

        WS.hammer.emit('pinchend', {
            srcEvent
        });

        expect(spy).toHaveBeenCalled();
        expect(WS.options.samplesPerPixel).toBe(512);
    });

    it('Exits when mode is not zoom.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'drag', samplesPerPixel: 1024, scrollPosition: 10 });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const srcEvent = { target: canvas }

        WS.hammer.emit('pinchstart', {
            srcEvent
        });

        WS.hammer.emit('pinchmove', {
            srcEvent,
            scale: 0.5
        });

        WS.hammer.emit('pinchend', {
            srcEvent
        });

        expect(spy).not.toHaveBeenCalled();
    });

    it('Respects maximum zoom level.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'pan', samplesPerPixel: 1024, scrollPosition: 10, width: 300 });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        // Determining edgecase
        const maxSamplesInView = (WS.scrollWidth + 500) * WS.options.samplerate;
        const sppEdge = maxSamplesInView / WS.options.width;
        const scaleEdgeCase = sppEdge / WS.options.samplesPerPixel;

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const srcEvent = { target: canvas }

        WS.hammer.emit('pinchstart', {
            srcEvent
        });

        // Should not zoom
        WS.hammer.emit('pinchmove', {
            srcEvent,
            scale: scaleEdgeCase
        });

        // Should zoom
        WS.hammer.emit('pinchmove', {
            srcEvent,
            scale: scaleEdgeCase - 0.0000000001
        });

        WS.hammer.emit('pinchend', {
            srcEvent
        });

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Ignores scaling 0.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'pan', samplesPerPixel: 1024, scrollPosition: 10 });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const srcEvent = { target: canvas }

        WS.hammer.emit('pinchstart', {
            srcEvent
        });

        WS.hammer.emit('pinchmove', {
            srcEvent,
            scale: 0
        });

        WS.hammer.emit('pinchend', {
            srcEvent
        });

        expect(spy).not.toHaveBeenCalled();
        expect(WS.options.samplesPerPixel).toBe(1024);
    });
});