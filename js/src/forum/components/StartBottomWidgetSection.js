import Component from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';

import sortWidgets from '../../common/utils/sortWidgets';

export default class StartBottomWidgetSection extends Component {
  view() {
    if (app.current.data.routeName !== 'index') {
      return null;
    }

    return (
      <div className="AfruxWidgets-startBottom AfruxWidgets-WidgetSection">
        {sortWidgets(app.widgets.get('start_bottom'))
          .map((widget) => widget.component.component({ state: widget.state }))}
      </div>
    );
  }
}
