import { DragState } from "../models/dragstate";
import DomRenderWaveShaper from '../core/domrender-waveshaper';

export default (manager: DomRenderWaveShaper, canvas: HTMLCanvasElement, dragState: DragState): () => void => {

    const enterlistener = (ev: PointerEvent) => pointerEnter(ev);


    /**
     * Fires when the mouse moves over the container,
     * If a segment is being dragged and the pointer moves
     * into another canvas the segment is tranfered to the 
     * new canvas.
     */
    canvas.addEventListener('pointermove', enterlistener);

    const destroy = () => {
        canvas.removeEventListener('pointermove', enterlistener);
    }

    const pointerEnter = (ev: PointerEvent) => {
        if (dragState.options == null || dragState.options.mode !== 'drag')
            return;

        if(dragState.activeSegment == null || dragState.dragWave == null)
            return;

        const canvas = document.elementFromPoint(ev.clientX, ev.clientY);
        if (canvas == null || !(canvas instanceof HTMLCanvasElement))
            return;

        const id = canvas.getAttribute('data-wave-id');
        if (id == null) return;

        const wave = manager.getTrack(id);
        if (wave == null) return;

        if (dragState.dragWave.id !== id) {
            const index = dragState.dragWave.intervals.indexOf(dragState.activeSegment);
            dragState.dragWave.intervals.splice(index, 1);

            wave.intervals.push(dragState.activeSegment);
            dragState.activeSegment.index = 1000;

            const currentId = dragState.dragWave.id;
            dragState.dragWave = wave;

            manager.flatten(wave.id, currentId);
            manager.process(wave.id, currentId);
        }
    }

    return destroy;
}