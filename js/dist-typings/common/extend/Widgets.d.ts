import { Application } from 'src/shims';
export declare type Placement = 'start_top' | 'start_bottom' | 'end' | 'top' | 'bottom';
export declare type Widget = {
    id?: string;
    key: string;
    component: any;
    placement: Placement;
    isDisabled: boolean | (() => boolean);
    isUnique: boolean;
    position?: number;
    extension?: string;
    state?: any;
};
export default class Widgets {
    private widgets;
    add(widget: Widget): this;
    extend(app: Application, extension: string): void;
}
