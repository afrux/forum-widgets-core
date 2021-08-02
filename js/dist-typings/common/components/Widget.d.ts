import * as Mithril from 'mithril';
import Component, { ComponentAttrs } from 'flarum/common/Component';
export interface WidgetAttrs extends ComponentAttrs {
    state: any;
}
export default class Widget<T extends WidgetAttrs> extends Component<T> {
    view(): Mithril.Children;
    header(): Mithril.Children;
    className(): string;
    title(): string;
    description(): string;
    icon(): string;
    content(): Mithril.Children;
}
