import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';

import sortWidgets from '../../common/utils/sortWidgets';

export default class BottomWidgetSection extends Component {
  view(): Mithril.Children {
    return (
      <div className="AfruxWidgets-bottomWidgetSection AfruxWidgets-WidgetSection">
        {sortWidgets(app.widgets.get('bottom')).map((widget) => widget.component.component({ state: widget.state }))}
      </div>
    );
  }
}
