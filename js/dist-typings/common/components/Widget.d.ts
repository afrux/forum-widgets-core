import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';
export default class Widget extends Component {
    view(): Mithril.Vnode;
    header(): Mithril.Vnode | null;
    className(): string;
    title(): string | null;
    description(): string;
    icon(): string | null;
    content(): Mithril.Vnode | string;
}
