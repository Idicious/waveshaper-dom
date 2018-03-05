import WS from '../../../src';

describe('Render tests', () => {
    it('Can render interval border lines.', () => {
        WS.setTracks({
            id: '1', intervals: [
                { id: '1', start: 0, offsetStart: 0, end: 30, index: 1, source: '1' },
                { id: '2', start: 10, offsetStart: 0, end: 20, index: 2, source: '1' }
            ]
        });
        WS.registerCanvas('1', document.createElement('canvas'), 'teal');
        WS.process();
    });

    it('Doesn\'t crash when there are no intervals in a track.', () => {
        WS.setTracks({
            id: '1', intervals: []
        });
        WS.registerCanvas('1', document.createElement('canvas'), 'teal');
        
        
        expect(() => WS.process()).not.toThrow();
    });

    it('Doesn\'t crash when intervals are null in a track.', () => {
        WS.setTracks({
            id: '1', intervals: (null as any)
        });
        WS.registerCanvas('1', document.createElement('canvas'), 'teal');
        
        
        expect(() => WS.process()).not.toThrow();
    });
});