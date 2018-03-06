//import * as $ from 'jquery';
import WS from '../../../src';

describe('Drag tests.', () => {
    it('Moves intervals between tracks.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'drag' });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvasTrack1 = document.createElement('canvas');
        const canvasTrack2 = document.createElement('canvas');

        WS.registerCanvas('1', canvasTrack1, 'teal');
        WS.registerCanvas('2', canvasTrack2, 'whitesmoke');

        WS.setTracks({ id: '1', intervals: [
            { id: '1', start: 0, end: 20, offsetStart: 0, index: 1, source: '1' }
        ]}, { id: '2', intervals: [
            { id: '2', start: 0, end: 20, offsetStart: 0, index: 1, source: '2' }
        ]});

        const srcEventCanvas1 = { target: canvasTrack1 };

        WS.hammer.emit('panstart', {
            srcEvent: srcEventCanvas1,
            center: { x: 10 }
        });

        WS.hammer.emit('panmove', {
            srcEvent: srcEventCanvas1,
            deltaX: 10
        });

        document.elementFromPoint = () => canvasTrack2;

        const pointerEnter = new CustomEvent('pointermove');
        canvasTrack2.dispatchEvent(pointerEnter);

        WS.hammer.emit('panend', {
            srcEvent: srcEventCanvas1
        });

        const track1 = WS.getTrack('1');
        const track2 = WS.getTrack('2');

        if(track1 == null || track2 == null) return fail();

        expect(track1.intervals.length).toBe(0);
        expect(track2.intervals.length).toBe(2);

        expect(spy).toHaveBeenCalled();
    });

    it('Exits if not in drag mode.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'pan' });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvasTrack2 = document.createElement('canvas');

        WS.registerCanvas('2', canvasTrack2, 'whitesmoke');

        WS.setTracks({ id: '2', intervals: [
            { id: '2', start: 0, end: 20, offsetStart: 0, index: 1, source: '2' }
        ]});

        const pointerEnter = new CustomEvent('pointerenter', { detail: { target: canvasTrack2 } });
        canvasTrack2.dispatchEvent(pointerEnter);

        expect(spy).not.toHaveBeenCalled();
    });

    it('Exits silently when unexpected states happen.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container).setOptions({ mode: 'drag' });

        const spy = spyOn(WS, 'process');

        if(WS.hammer == null) {
            return fail('Hammer instance not created.');
        }

        const canvas = document.createElement('canvas');
        WS.registerCanvas('2', canvas, 'whitesmoke');

        WS.setTracks({ id: '2', intervals: [
            { id: '2', start: 0, end: 20, offsetStart: 0, index: 1, source: '2' }
        ]});

        const srcEvent = { target: canvas }

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10 }
        });

        // Enters itself
        let pointerEnter = new CustomEvent('pointerenter', { detail: { target: canvas } });
        canvas.dispatchEvent(pointerEnter);

        // Has no data-wave-id attribute
        canvas.removeAttribute('data-wave-id');
        pointerEnter = new CustomEvent('pointerenter', { detail: { target: canvas } });
        canvas.dispatchEvent(pointerEnter);

        WS.hammer.emit('panend', { srcEvent });

        // Doesn't have a canvas as target
        const faketarget = document.createElement('div');
        faketarget.setAttribute('data-wave-id', '2');
        WS.setOptions({ getEventTarget: () => faketarget });

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10 }
        });

        canvas.setAttribute('data-wave-id', '2');
        pointerEnter = new CustomEvent('pointerenter');
        canvas.dispatchEvent(pointerEnter);

        WS.hammer.emit('panend', { srcEvent });
        
        WS.setOptions({ getEventTarget: (ev) => <HTMLElement>ev.target });

        WS.hammer.emit('panstart', {
            srcEvent,
            center: { x: 10 }
        });

        // Has a non existant data-wave-id attribute
        canvas.setAttribute('data-wave-id', '5');
        pointerEnter = new CustomEvent('pointerenter');
        canvas.dispatchEvent(pointerEnter);

        expect(spy).not.toHaveBeenCalled();
    });
});