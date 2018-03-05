import WS from '../../../src'
import { DomRenderWaveShaper } from '../../../src';

describe('DomRenderWaveShaper test.', () => {
    it('Creates default instance.', () => {
        expect(WS).not.toBeNull();
    });

    it('Throws when setInteraction is called with null.', () => {
        expect(() => WS.setInteraction(null as any)).toThrow();
    });

    it('Can be constructed with partial options.', () => {
        const waveshaper = new DomRenderWaveShaper({ samplesPerPixel: 1024 });
        expect(waveshaper.options.mode).toBe('pan');
    });

    it('Throws when registering invalid canvas.', () => {
        const invalidRegisterElement = document.createElement('div') as any;
        invalidRegisterElement.getContext = () => null;
        expect(() => WS.registerCanvas('1', invalidRegisterElement as any, 'green')).toThrow();
    });

    it('Works correctly without devicePixelRatio.', () => {
        (devicePixelRatio as any) = null;

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'green');

        expect(canvas.width).toBe(WS.options.width);
    });

    it('Uses device pixel ratio 1 if smaller than 1.', () => {
        devicePixelRatio = 0.5;

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'green');

        expect(canvas.width).toBe(WS.options.width);
    });

    it('Correctly sets canvas with with devicePixelRatio greater than 1.', () => {
        devicePixelRatio = 1.5;

        const canvas = document.createElement('canvas');
        WS.registerCanvas('1', canvas, 'green');

        expect(canvas.width).toBe(WS.options.width * 1.5);
    });

    it('Does not set canvas active when the registerSetsActive option is false.', () => {
        const waveshaper = new DomRenderWaveShaper();
        waveshaper.setOptions({ registerSetsActive: false });

        const canvas = document.createElement('canvas');
        waveshaper.registerCanvas('1', canvas, 'green');

        expect(waveshaper.activeWaveShapers.length).toBe(0);
    });

    it('Gives back correct scrollWidth', () => {
        WS.setOptions({
            samplerate: 44100,
            samplesPerPixel: 1024
        });

        WS.setTracks({
            id: '1', intervals: [
                { id: '1', start: 0, end: 10, offsetStart: 0, index: 0, source: '1' }
            ]
        })

        expect(WS.scrollWidth).toBeCloseTo(430.664);
    });

    it('Registers a canvas.', () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if(ctx == null) {
            return fail('Could not create canvas context.')
        }

        const spy = jasmine.createSpy('lineTo', ctx.lineTo);
        ctx.lineTo = spy;

        WS.setTracks({
            id: '1', intervals: [
                { id: '1', start: 0, end: 10, offsetStart: 0, index: 0, source: '1' }
            ]
        })

        WS.registerCanvas('1', canvas, 'teal');
        WS.process();

        expect(spy.calls.count()).toBeGreaterThan(0);
    });

    it('Unregisters a canvas.', () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if(ctx == null) {
            return fail('Could not create canvas context.')
        }

        const spy = jasmine.createSpy('lineTo', ctx.lineTo);
        ctx.lineTo = spy;

        WS.setTracks({
            id: '1', intervals: [
                { id: '1', start: 0, end: 10, offsetStart: 0, index: 0, source: '1' }
            ]
        })

        WS.registerCanvas('1', canvas, 'teal');
        WS.unregisterCanvas('1');

        WS.process();

        expect(spy.calls.count()).toBe(0);
    });

    it('Registers interaction.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container);

        const touchActionAttribute = container.getAttribute('touch-action');
        expect(touchActionAttribute).toBe('none');
    });

    it('Unregisters interaction.', () => {
        const container = document.createElement('div');
        WS.setInteraction(container);

        WS.clearInteraction();
        WS.clearInteraction();
    });

    it('Loads data.', (done) => {
        const ctx = new AudioContext();
        WS.loadData(ctx, {
            id: '1', url: 'assets/audio/test.wav'
        });

        const spy = spyOn(WS, 'process');
        setTimeout(() => {
            expect(spy).toHaveBeenCalled();
            done();
        }, 2000);
    });

    it('Catches invalid load requests.', () => {
        const ctx = new AudioContext();
        expect(() => WS.loadData(ctx, {
            id: '1', url: 'assets/audio/nonexistantfile.wav'
        })).not.toThrow();
    });
});