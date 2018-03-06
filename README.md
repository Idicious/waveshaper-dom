[![Build Status](https://travis-ci.org/Idicious/waveshaper-dom.svg?branch=master)](https://travis-ci.org/Idicious/waveshaper-dom)
[![Coverage Status](https://coveralls.io/repos/github/Idicious/waveshaper-dom/badge.svg)](https://coveralls.io/github/Idicious/waveshaper-dom)
[![npm version](https://badge.fury.io/js/waveshaper-dom.svg)](https://badge.fury.io/js/waveshaper-dom)

# waveshaper-dom
This library offers high performance real-time drawing + interaction of audio waveforms. All functionality has touch support, the supported functionality is:

- pan
- (pinch) zoom
- drag
- resize
- cut

## Installation
``` 
npm install waveshaper-dom
```

## Demo's
- [Basic multi-track](https://idicious.github.io/waveshaper-demo/)
- More coming soon!

When including the script as a tag in the page you must include the hammerjs script before it.
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.js"></script>
```

All pages using this library should include the following script tag before any others for maximum cross browser compatibility:
```
<script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
``` 

Besides touch/mouse interaction the values can be changed programmatically via the setOptions method.

### Options
| Parameter | Type | Description |
| ------- | ------ | -------- |
| scrollPosition | number | Changing this value pans/scrolls the waveform. |
| samplesPerPixel | number | Zoom level, lower to zoom in, higher to zoom out.
| resolution | number | Quality, higher for more detail, lower for faster rendering. |
| mode | 'pan', 'drag', 'resize', 'cut' | Active interaction form, pan includes pinch zoom on touch devices. |

## Example
```
const container = document.getElementById('container');
const audioContext = new AudioContext();

const options = {
    samplesPerPixel: 1024,
    resolution: 64,
    width: container.clientWidth,
    height: 300,
    scrollPosition: 0,
    meterType: 'rms',
    samplerate: audioContext.sampleRate,
    mode: 'pan'
};

WS.setOptions(options);

const data = [
    { id: '1', url: 'path/to/audio.wav' },
    { id: '2', url: 'path/to/audio.wav' },
];

const tracks = [
    {
        id: '1', color: 'lightblue', intervals: [
            { id: '1', start: 10, end: 30, offsetStart: 5, index: 1, source: '1' },
            { id: '2', start: 15, end: 20, offsetStart: 2, index: 2, source: '2' },
        ]
    },
     {
        id: '2', color: 'teal', intervals: [
            { id: '3', start: 10, end: 30, offsetStart: 5, index: 1, source: '1' },
            { id: '4', start: 15, end: 20, offsetStart: 2, index: 2, source: '2' },
        ]
    },
];

tracks.forEach(track => {
    const canvas = document.createElement('canvas');
    WS.registerCanvas(track.id, canvas, track.color);

    constainer.appendChild(canvas);
});

WS.setInteraction(container)
    .setTracks(...tracks)
    .loadData(...data)
    .process();

// Updating scrollposition will pan the waveform
// Updating samples per pixel will change the zoom level
// Updating resolution will change the detail level
// Updating the mode will change which interaction is active
WS.setOptions({
    scrollPosition: 100,
    samplesPerPixel: 512,
    resolution: 32,
    mode: 'drag'
}).process();
```
