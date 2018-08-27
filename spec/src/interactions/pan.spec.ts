//import * as $ from 'jquery';
import WS from "../../../src";

describe("Pan tests.", () => {
  it("Triggers process when panned.", () => {
    const container = document.createElement("div");
    WS.setInteraction(container).setOptions({ mode: "pan" });

    const spy = spyOn(WS, "process");

    if (WS.hammer == null) {
      return fail("Hammer instance not created.");
    }

    const canvas = document.createElement("canvas");
    WS.registerCanvas("1", canvas, "teal");
    WS.setTracks({
      id: "1",
      intervals: [
        { id: "1", start: 10, end: 20, offsetStart: 0, index: 1, source: "1" }
      ]
    });

    const srcEvent = { target: canvas };

    WS.hammer.emit("panstart", {
      srcEvent
    });

    WS.hammer.emit("panmove", {
      srcEvent,
      deltaX: -15
    });

    WS.hammer.emit("panend", {
      srcEvent
    });

    expect(WS.options.scrollPosition).toBe(15);
    expect(spy).toHaveBeenCalled();
  });

  it("Exits if the position hasn't updated", () => {
    const container = document.createElement("div");
    WS.setInteraction(container).setOptions({ mode: "pan", scrollPosition: 0 });

    const spy = spyOn(WS, "process");

    if (WS.hammer == null) {
      return fail("Hammer instance not created.");
    }

    const canvas = document.createElement("canvas");
    WS.registerCanvas("1", canvas, "teal");
    WS.setTracks({
      id: "1",
      intervals: [
        { id: "1", start: 0, end: 20, offsetStart: 0, index: 1, source: "1" }
      ]
    });

    const srcEvent = { target: canvas };

    WS.hammer.emit("panstart", {
      srcEvent
    });

    WS.hammer.emit("panmove", {
      srcEvent,
      deltaX: 15
    });

    WS.hammer.emit("panend", {
      srcEvent
    });

    expect(spy).not.toHaveBeenCalled();
  });

  // it('Respects max pan.', () => {
  //     const container = document.createElement('div');
  //     WS.setInteraction(container).setOptions({ mode: 'pan', scrollPosition: 0 });

  //     const spy = spyOn(WS, 'process');

  //     if(WS.hammer == null) {
  //         return fail('Hammer instance not created.');
  //     }

  //     const canvas = document.createElement('canvas');
  //     WS.registerCanvas('1', canvas, 'teal');
  //     WS.setTracks({ id: '1', intervals: [
  //         { id: '1', start: 10, end: 20, offsetStart: 0, index: 1, source: '1' }
  //     ]});

  //     // edgecase
  //     const maxPan = (WS.scrollWidth + 500) - WS.options.width;
  //     const srcEvent = { target: canvas }

  //     WS.hammer.emit('panstart', {
  //         srcEvent
  //     });

  //     // Should not pan
  //     WS.hammer.emit('panmove', {
  //         srcEvent,
  //         deltaX: -maxPan - 0.0000001
  //     });

  //     WS.hammer.emit('panend', {
  //         srcEvent
  //     });

  //     expect(spy).not.toHaveBeenCalled();
  //     WS.setOptions({ scrollPosition: 0 });

  //     WS.hammer.emit('panstart', {
  //         srcEvent
  //     });

  //     // Should pan
  //     WS.hammer.emit('panmove', {
  //         srcEvent,
  //         deltaX: -maxPan
  //     });

  //     WS.hammer.emit('panend', {
  //         srcEvent
  //     });

  //     expect(spy).toHaveBeenCalled();
  // });
});
