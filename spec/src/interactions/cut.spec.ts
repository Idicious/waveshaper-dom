//import * as $ from 'jquery';
import WS from '../../../src';

describe('Cut tests.', () => {
    it('Triggers process when cut and updates intervals correctly.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'cut' });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');

        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const srcEvent = { target: canvas };
        const cutTime = 12.36;
        const cutX = cutTime * WS.options.samplerate / WS.options.samplesPerPixel

        WS.hammer.emit('tap', {
            srcEvent, 
            center: { x: cutX }
        });

        const track = WS.getTrack('1');
        if(track == null) {
            return fail('Track not created succesfully.');
        }

        expect(track.intervals.length).toBe(2);
        expect(track.intervals[0].end).toBe(cutTime);
        expect(track.intervals[1].offsetStart).toBe(cutTime);
        expect(spy).toHaveBeenCalled();
    });

    it('Exits when not in cut mode.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'drag' });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');

        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const srcEvent = { target: canvas };
        const cutTime = 12.36;
        const cutX = cutTime * WS.options.samplerate / WS.options.samplesPerPixel

        WS.hammer.emit('tap', {
            srcEvent, 
            center: { x: cutX }
        });

        expect(spy).not.toHaveBeenCalled();
    });

    it('Exits when target id not registered.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'cut' });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');

        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        canvas.setAttribute('data-wave-id', '5');
        const srcEvent = { target: canvas };

        WS.hammer.emit('tap', {
            srcEvent, 
            center: { x: 0 }
        });

        expect(spy).not.toHaveBeenCalled();
    });

    it('Exits when no interval is found at cut time.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'cut' });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');

        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const srcEvent = { target: canvas };
        WS.hammer.emit('tap', {
            srcEvent, 
            center: { x: 100000 }
        });

        expect(spy).not.toHaveBeenCalled();
    });

    it('Exits if segment is not found.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'cut' });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');

        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const track = WS.getTrack('1');
        if(track == null) return fail();

        track.intervals = [];

        const srcEvent = { target: canvas };
        WS.hammer.emit('tap', {
            srcEvent, 
            center: { x: 10 }
        });

        expect(spy).not.toHaveBeenCalled();
    });
});