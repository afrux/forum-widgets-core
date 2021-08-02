import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';
export default class Widget extends Component {
    view(): Mithril.Children;
    header(): Mithril.Children;
    className(): string;
    title(): string;
    description(): string;
    icon(): string;
    content(): Mithril.Children;
}
