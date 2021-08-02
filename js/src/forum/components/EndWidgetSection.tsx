import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';

import sortWidgets from '../../common/utils/sortWidgets';

export default class EndWidgetSection extends Component {
  view(): Mithril.Children {
    return (
      <div className="AfruxWidgets-sideNavAlt AfruxWidgets-WidgetSection">
        {sortWidgets(app.widgets.get('end')).map((widget) => widget.component.component({ state: widget.state }))}
      </div>
    );
  }
}
