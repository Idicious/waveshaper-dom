import { defaultConfig, ManagerOptions, ManagerInput } from "waveshaper";

export type InteractionMode = 'pan' | 'drag' | 'cut' | 'resize';
export type GenerateId = () => string;
export type GetTarget = (ev: Event) => HTMLElement;


export interface DomOptions extends ManagerOptions {
    getEventTarget: GetTarget;
    registerSetsActive: boolean;
    height: number;
    generateId: GenerateId;
    mode: InteractionMode;
    clampFn: (n: number) => number;
}

export interface DomInput extends ManagerInput {
    getEventTarget?: GetTarget;
    registerSetsActive?: boolean;
    height?: number;
    generateId?: GenerateId;
    mode?: InteractionMode;
    clampFn?: (n: number) => number;
}

const defaultDomOptions: DomOptions = {
    ...defaultConfig,
    mode: 'pan',
    height: 150,
    getEventTarget: (ev) => <HTMLElement>ev.target,
    generateId: () => Math.random().toString(),
    registerSetsActive: true,
    clampFn: n => n
}

export default defaultDomOptions;