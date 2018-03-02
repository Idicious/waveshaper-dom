import { Interval, Track } from "waveshaper";
import { DomOptions } from "../config/dom-config";

export interface DragState {
    activeSegment: Interval | null;
    activeSegmentStart: number;
    dragWave: Track | null;
    options: DomOptions | null;
    duration: number;
    dragging: boolean;
}

export const dragState: DragState = {
    activeSegment: null,
    activeSegmentStart: 0,
    dragWave: null,
    options: null,
    duration: 0,
    dragging: false
}