import Component from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';

import sortWidgets from '../../common/utils/sortWidgets';

export default class TopWidgetSection extends Component {
  view() {
    return (
      <div className="AfruxWidgets-topWidgetSection AfruxWidgets-WidgetSection">
        {sortWidgets(app.widgets.get('top'))
          .map((widget) => widget.component.component({ state: widget.state }))}
      </div>
    );
  }
}
