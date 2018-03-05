//import * as $ from 'jquery';
import WS from '../../../src';

describe('Drag tests.', () => {

    it('Resizes left correctly.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'resize', scrollPosition: 0 });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const resizeLeftTime = 12.36;
        const resizeLeftX = resizeLeftTime * WS.options.samplerate / WS.options.samplesPerPixel;

        const touchEventTime = 5;
        const touchEventX = touchEventTime * WS.options.samplerate / WS.options.samplesPerPixel;

        const srcEvent = { target: canvas };

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: touchEventX }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: resizeLeftX
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        const track = WS.getTrack('1');
        if(track == null) return fail();
        
        expect(track.intervals.length).toBe(1);
        const interval = track.intervals[0];

        expect(interval.offsetStart).toBe(resizeLeftTime);
        expect(spy).toHaveBeenCalled();
    });

    it('Resizes right correctly.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'resize', scrollPosition: 0 });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const resizeRightTime = 12.36;
        const resizeRightX = resizeRightTime * WS.options.samplerate / WS.options.samplesPerPixel;

        const touchEventTime = 15;
        const touchEventX = touchEventTime * WS.options.samplerate / WS.options.samplesPerPixel;

        const srcEvent = { target: canvas };

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: touchEventX }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: -resizeRightX
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        const track = WS.getTrack('1');
        if(track == null) return fail();
        
        expect(track.intervals.length).toBe(1);
        const interval = track.intervals[0];

        expect(interval.end).toBe(20 - resizeRightTime);
        expect(spy).toHaveBeenCalled();
    });

    it('Exits when track cannot be found.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'resize', scrollPosition: 0 });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'teal');
        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]});

        const resizeLeftTime = 12.36;
        const resizeLeftX = resizeLeftTime * WS.options.samplerate / WS.options.samplesPerPixel;

        const touchEventTime = 5;
        const touchEventX = touchEventTime * WS.options.samplerate / WS.options.samplesPerPixel;

        canvas.setAttribute('data-wave-id', '5');
        const srcEvent = { target: canvas };

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: touchEventX }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: resizeLeftX
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        expect(spy).not.toHaveBeenCalled();
    });

    it('Exits when no flattened interval is found at time.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'resize', scrollPosition: 0 });

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

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10000 }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: 500
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        expect(spy).not.toHaveBeenCalled();
    });

    it('Exits if no interval can be found.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'resize', scrollPosition: 0 });

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

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10 }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: -15
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        expect(spy).not.toHaveBeenCalled();
    });

    it('Prevents offsetStart from being less than 0.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'resize', scrollPosition: 0 });

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

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10 }
        });

        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: -15
        });

        WS.hammer.emit('panend', {
            srcEvent
        });

        const track = WS.getTrack('1');
        if(track == null) return fail();

        const interval = track.intervals[0];
        expect(spy).toHaveBeenCalled();

        expect(interval.start).toBe(0);
        expect(interval.offsetStart).toBe(0);
        expect(interval.end).toBe(20);
    });

    it('It prevents setting duration less than minimum.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'resize', scrollPosition: 0 });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'teal');

        const interval = { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' };
        WS.setTracks({ id: '1', intervals: [
            interval
        ]});

        const minimumDuration = 2;
        const secondsPerPixel = WS.options.samplesPerPixel / WS.options.samplerate;
        const edgeCase = (interval.end - interval.start - minimumDuration)  / secondsPerPixel;

        const srcEvent = { target: canvas };

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10 }
        });

        // Should not pan
        WS.hammer.emit('panmove', {
            srcEvent,
            deltaX: edgeCase
        });

        WS.hammer.emit('panend', {
            srcEvent
        });
;
        expect(spy).not.toHaveBeenCalled();
    });
});