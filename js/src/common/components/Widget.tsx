import Component from 'flarum/common/Component';
import classList from 'flarum/common/utils/classList';
import icon from 'flarum/common/helpers/icon';

export default class Widget extends Component {
  view() {
    return (
      <div className={classList(['AfruxWidgets-Widget', this.className()])}>
        {this.header()}
        <div className="AfruxWidgets-Widget-content">{this.content()}</div>
      </div>
    );
  }

  header() {
    const iconName = this.icon();
    const title = this.title();

    return title ? (
      <div className="AfruxWidgets-Widget-title">
        {iconName ? (
          <span className="AfruxWidgets-Widget-title-icon">{icon(iconName)}</span>
        ) : null}
        <span className="AfruxWidgets-Widget-title-label">{title}</span>
        <div className="AfruxWidgets-Widget-title-desc">{this.description()}</div>
      </div>
    ) : null;
  }

  className() {
    return '';
  }

  title() {
    return '';
  }

  description() {
    return '';
  }

  icon() {
    return '';
  }

  content() {
    return '';
  }
}
