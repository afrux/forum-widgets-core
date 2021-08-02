import { Widget } from '../common/extend/Widgets';
export default class WidgetManager {
    widgets: Widget[];
    /**
     * We only have this because the way we're injecting the widget sections
     * ends up with the widgets rerendering on navigation.
     */
    states: any;
    private config;
    add(widget: Widget, extension: any): void;
    getbyId(id: string): Widget | null;
    getWidgetInstances(): Widget[];
    get(placement: string, withHidden?: boolean): Widget[];
    setConfig(config: any): void;
}
