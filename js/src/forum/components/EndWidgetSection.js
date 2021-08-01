import Component from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';

import sortWidgets from '../../common/utils/sortWidgets';

export default class EndWidgetSection extends Component {
  view() {
    return (
      <div className="AfruxWidgets-sideNavAlt AfruxWidgets-WidgetSection">
        {sortWidgets(app.widgets.get('end'))
          .map((widget) => widget.component.component({ state: widget.state }))}
      </div>
    );
  }
}
