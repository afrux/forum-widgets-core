import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';

import sortWidgets from '../../common/utils/sortWidgets';

export default class TopWidgetSection extends Component {
  view(): Mithril.Children {
    return (
      <div className="AfruxWidgets-topWidgetSection AfruxWidgets-WidgetSection">
        {sortWidgets(app.widgets.get('top')).map((widget) => widget.component.component({ state: widget.state }))}
      </div>
    );
  }
}
