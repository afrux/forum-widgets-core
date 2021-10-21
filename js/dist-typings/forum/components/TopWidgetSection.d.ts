import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';
import Stream from 'flarum/common/utils/Stream';
export default class TopWidgetSection extends Component {
    scrollEnd: Stream;
    oninit(vnode: any): void;
    view(): Mithril.Children;
}
