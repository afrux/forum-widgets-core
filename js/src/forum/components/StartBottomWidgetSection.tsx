import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';

import sortWidgets from '../../common/utils/sortWidgets';

export default class StartBottomWidgetSection extends Component {
  view(): Mithril.Children {
    if (app.current.data.routeName !== 'index') {
      return null;
    }

    return (
      <div className="AfruxWidgets-startBottom AfruxWidgets-WidgetSection">
        {sortWidgets(app.widgets.get('start_bottom')).map((widget) => widget.component.component({ state: widget.state }))}
      </div>
    );
  }
}
