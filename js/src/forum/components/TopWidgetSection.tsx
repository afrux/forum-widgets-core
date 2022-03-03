import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';
import Stream from 'flarum/common/utils/Stream';
import classList from 'flarum/common/utils/classList';

import sortWidgets from '../../common/utils/sortWidgets';

export default class TopWidgetSection extends Component {
  scrollEnd: Stream;

  oninit(vnode): void {
    super.oninit(vnode);

    this.scrollEnd = Stream(false);
  }

  view(): Mithril.Children {
    const isSmallScreen = ['phone', 'tablet'].includes(app.screen());

    return (
      <div
        className={classList({
          'AfruxWidgets-topWidgetSection AfruxWidgets-WidgetSection': true,
          'AfruxWidgets-WidgetSection--endScroll': isSmallScreen && this.scrollEnd(),
        })}
        onscroll={(e) => {
          if (isSmallScreen) {
            this.scrollEnd(false);

            if (e.target.offsetWidth + e.target.scrollLeft >= e.target.scrollWidth) {
              this.scrollEnd(true);
            }
          }
        }}
      >
        {sortWidgets(app.widgets.get('top')).map((widget) => widget.component.component({ state: widget.state }))}
      </div>
    );
  }
}
