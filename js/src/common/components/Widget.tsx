import * as Mithril from 'mithril';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import classList from 'flarum/common/utils/classList';
import icon from 'flarum/common/helpers/icon';

export interface WidgetAttrs extends ComponentAttrs {
  state: any;
}

export default class Widget<T extends WidgetAttrs> extends Component<T> {
  view(): Mithril.Children {
    return (
      <div className={classList(['AfruxWidgets-Widget', this.className()])}>
        {this.header()}
        <div className="AfruxWidgets-Widget-content">{this.content()}</div>
      </div>
    );
  }

  header(): Mithril.Children {
    const iconName = this.icon();
    const title = this.title();

    return title ? (
      <div className="AfruxWidgets-Widget-title">
        {iconName ? <span className="AfruxWidgets-Widget-title-icon">{icon(iconName)}</span> : null}
        <span className="AfruxWidgets-Widget-title-label">{title}</span>
        <div className="AfruxWidgets-Widget-title-desc">{this.description()}</div>
      </div>
    ) : null;
  }

  className(): string {
    return '';
  }

  title(): string {
    return '';
  }

  description(): string {
    return '';
  }

  icon(): string {
    return '';
  }

  content(): Mithril.Children {
    return '';
  }
}
