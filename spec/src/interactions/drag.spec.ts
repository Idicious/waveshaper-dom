//import * as $ from 'jquery';
import WS from '../../../src';

describe('Drag tests.', () => {
    it('Triggers process when dragged.', () => {
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

        const dragTime = 12.36;
        const dragX = dragTime * WS.options.samplerate / WS.options.samplesPerPixel

        const srcEvent = { target: canvas }

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10 }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: dragX
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        const track = WS.getTrack('1');
        if(track == null) return fail();
        
        const interval = track.intervals[0];

        expect(interval.start).toBe(dragTime);
        expect(spy).toHaveBeenCalled();
    });

    it('Exits if track doesn\'t exist.', () => {
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

        canvas.setAttribute('data-wave-id', '5');
        const srcEvent = { target: canvas }

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10 }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: 15
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        expect(spy).not.toHaveBeenCalled();
    });

    it('Exits if there is no flattened interval at time.', () => {
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

        const srcEvent = { target: canvas }

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10000 }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: 15
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        expect(spy).not.toHaveBeenCalled();
    });

    it('Exits if interval is not found.', () => {
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
        const track = WS.getTrack('1');

        if(track == null) return fail();
        track.intervals = [];

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10 }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: 15
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        expect(spy).not.toHaveBeenCalled();
    });
});