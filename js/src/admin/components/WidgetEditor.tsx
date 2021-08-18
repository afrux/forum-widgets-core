import sortable from 'sortablejs';
import * as Mithril from 'mithril';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import icon from 'flarum/common/helpers/icon';

import sortWidgets from '../../common/utils/sortWidgets';
import type { Widget } from '../../common/extend/Widgets';

export default class WidgetEditor extends ExtensionPage {
  static settingKey = 'afrux-forum-widgets-core.config';

  private config?: any;
  private placeholderCache: any = {};

  oninit(vnode: Mithril.Vnode): void {
    super.oninit(vnode);

    this.config = this.getConfig();
    app.widgets.setConfig(this.config);
  }

  onupdate(vnode): void {
    super.onupdate(vnode);

    this.cleanupLayout();
  }

  content(): Mithril.Children {
    const settings = app.extensionData.getSettings(this.extension.id);

    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          <div className="Form">
            <div className="Form-group">{this.editor()}</div>
            {settings ? settings.map(this.buildSettingComponent.bind(this)) : null}
            <div className="Form-group">{this.submitButton()}</div>
          </div>
        </div>
      </div>
    );
  }

  editor(): Mithril.Children {
    return (
      <div className="Afrux-ForumWidgets-editor" oncreate={this.createEditorSections.bind(this)}>
        <div className="Afrux-ForumWidgets-layout">
          <div className="Afrux-ForumWidgets-layout-header Afrux-ForumWidgets-layout-concrete">
            <div className="Afrux-ForumWidgets-layout-container Afrux-ForumWidgets-layout-headerWrapper">
              <div className="Afrux-ForumWidgets-layout-placeholder Afrux-ForumWidgets-layout-placeholder--header" />
              <div className="Afrux-ForumWidgets-layout-placeholderGroup">
                <div className="Afrux-ForumWidgets-layout-placeholder Afrux-ForumWidgets-layout-placeholder--icon" />
                <div className="Afrux-ForumWidgets-layout-placeholder Afrux-ForumWidgets-layout-placeholder--icon" />
              </div>
            </div>
          </div>
          <div className="Afrux-ForumWidgets-layout-hero Afrux-ForumWidgets-layout-concrete">
            <div className="Afrux-ForumWidgets-layout-placeholder Afrux-ForumWidgets-layout-placeholder--header"/>
            <div className="Afrux-ForumWidgets-layout-placeholder" />
            <div className="Afrux-ForumWidgets-layout-placeholder Afrux-ForumWidgets-layout-placeholder--long" />
          </div>
          <div className="Afrux-ForumWidgets-layout-contentWrapper Afrux-ForumWidgets-layout-container">
            <div className="Afrux-ForumWidgets-layout-topSection Afrux-ForumWidgets-layout-section">
              <ol data-section="top" className="Afrux-ForumWidgets-layout-section-items">
                {sortWidgets(app.widgets.get('top', true)).map((widget: Widget, index: int) => this.layoutWidget(widget, index))}
              </ol>
            </div>
            <div className="Afrux-ForumWidgets-layout-sideNavContainer">
              <div className="Afrux-ForumWidgets-layout-sideNavWrapper">
                <div className="Afrux-ForumWidgets-layout-startTopSection Afrux-ForumWidgets-layout-section">
                  <ol data-section="start_top" className="Afrux-ForumWidgets-layout-section-items">
                    {sortWidgets(app.widgets.get('start_top', true)).map((widget: Widget, index: int) => this.layoutWidget(widget, index))}
                  </ol>
                </div>
                <div className="Afrux-ForumWidgets-layout-sideNav Afrux-ForumWidgets-layout-concrete">
                  <div className="Afrux-ForumWidgets-layout-placeholder Afrux-ForumWidgets-layout-placeholder--button">
                    <div className="Afrux-ForumWidgets-layout-placeholder" />
                  </div>
                  {this.makePlaceholders('sidenav', 8, 20, 80).map((placeholder: Mithril.Children) => (
                    <div className="Afrux-ForumWidgets-layout-placeholderGroup">
                      <div className="Afrux-ForumWidgets-layout-placeholder Afrux-ForumWidgets-layout-placeholder--icon" />
                      {placeholder}
                    </div>
                  ))}
                </div>
                <div className="Afrux-ForumWidgets-layout-startBottomSection Afrux-ForumWidgets-layout-section">
                  <ol data-section="start_bottom" className="Afrux-ForumWidgets-layout-section-items">
                    {sortWidgets(app.widgets.get('start_bottom', true)).map((widget: Widget, index: int) => this.layoutWidget(widget, index))}
                  </ol>
                </div>
              </div>
              <div className="Afrux-ForumWidgets-layout-sideNavOffset Afrux-ForumWidgets-layout-concrete">
                {this.makePlaceholders('sideNavOffset', 6, 20, 80).map((placeholder: Mithril.Children) => (
                  <div className="Afrux-ForumWidgets-layout-placeholderGroup">
                    <div className="Afrux-ForumWidgets-layout-placeholder Afrux-ForumWidgets-layout-placeholder--icon"></div>
                    <div className="Afrux-ForumWidgets-layout-placeholderGroup-content">
                      {placeholder}
                      {this.makePlaceholders('discussion', 1, 20, 50)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="Afrux-ForumWidgets-layout-sideNavAlt Afrux-ForumWidgets-layout-section">
                <ol data-section="end" className="Afrux-ForumWidgets-layout-section-items">
                  {sortWidgets(app.widgets.get('end', true)).map((widget: Widget, index: number) => this.layoutWidget(widget, index))}
                </ol>
              </div>
            </div>
            <div className="Afrux-ForumWidgets-layout-bottomSection Afrux-ForumWidgets-layout-section">
              <ol data-section="bottom" className="Afrux-ForumWidgets-layout-section-items">
                {sortWidgets(app.widgets.get('bottom', true)).map((widget: Widget, index: number) => this.layoutWidget(widget, index))}
              </ol>
            </div>
          </div>
        </div>
        <div className="Afrux-ForumWidgets-widgets">
          <ol data-section="store" className="Afrux-ForumWidgets-widgets-store">
            {app.widgets.widgets
              .filter((widget: Widget) => app.data.extensions[widget.extension])
              .map((widget: Widget, index: number) => {
                const attrs = {};
                const available = this.isWidgetAvailable(widget);

                return (
                  <li data-id={widget.id} data-section="store" disabled={!available} key={index}>
                    {this.widget(widget)}
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    );
  }

  createEditorSections(): void {
    this.cleanupLayout();

    this.$('.Afrux-ForumWidgets-layout-section-items, .Afrux-ForumWidgets-widgets-store')
      .get()
      .map((e) => {
        const section = $(e).data('section');

        sortable.create(e, {
          group: {
            name: section,
            pull: () => {
              return section === 'store' ? 'clone' : true;
            },
            put: true,
          },
          sort: section !== 'store',
          filter: '[disabled]',
          animation: 150,
          // swapThreshold: 0.65,
          dragClass: 'sortable-dragging',
          ghostClass: section !== 'store' ? 'sortable-placeholder' : '',
          onSort: this.onSortUpdate.bind(this),
          onClone: (e) => {
            $(e.clone).attr('disabled', true);
          },
          onAdd: (e) => {
            if (section === 'store') {
              this.setConfig({
                ...this.config,
                disabled: [...(this.config.disabled || []), e.item.dataset.id],
              });

              e.item.parentNode?.removeChild(e.item);
              this.$(`.Afrux-ForumWidgets-widgets-store li[data-id="${e.item.dataset.id}"]`).attr('disabled', false);
            }
          },
          onRemove: (e) => {
            if (section === 'store') {
              this.setConfig({
                ...this.config,
                disabled: (this.config.disabled || []).filter((wid) => wid !== e.item.dataset.id),
              });
            }
          },
        });
      });
  }

  cleanupLayout(): void {
    this.$('.Afrux-ForumWidgets-layout-section-items')
      .get()
      .map((element) => {
        const section = element.dataset.section;

        this.$(`.Afrux-ForumWidgets-layout-section-items[data-section="${section}"] li:not([data-section="${section}"])`).remove();
      });
  }

  widget(widget: Widget, placed: boolean = false): Mithril.Children {
    const extension = app.data.extensions[widget.extension];

    return (
      <div className="Afrux-ForumWidgets-Widget-container">
        <div className="Afrux-ForumWidgets-Widget">
          <span className="Afrux-ForumWidgets-Widget-icon ExtensionIcon" style={extension.icon}>
            {extension.icon ? icon(extension.icon.name) : ''}
          </span>
          <span className="Afrux-ForumWidgets-Widget-title">{extension.extra['flarum-extension'].title}</span>
        </div>
      </div>
    );
  }

  layoutWidget(widget: Widget): Mithril.Children {
    return (
      <li
        className="Afrux-ForumWidgets-layout-widget"
        data-id={widget.id}
        data-section={widget.placement}
        data-key={widget.key}
        data-extension={widget.extension}
        key={Math.floor(Math.random() * 200)}
      >
        {this.widget(widget, true)}
      </li>
    );
  }

  onSortUpdate(): void {
    const instances: any[] = [];

    this.$('.Afrux-ForumWidgets-layout-section-items')
      .get()
      .map((sectionElement) => {
        const section = sectionElement.dataset.section;

        Array.from(sectionElement.children).map((widgetElement, i: int) => {
          instances.push({
            id: widgetElement.dataset.id,
            extension: widgetElement.dataset.extension,
            key: widgetElement.dataset.key,
            placement: sectionElement.dataset.section,
            position: i,
          });
        });
      });

    this.setConfig({
      ...this.config,
      instances,
    });
  }

  isWidgetAvailable(widget: Widget): boolean {
    const disabled = this.config.disabled || [];

    return disabled.includes(widget.id) && widget.isUnique;
  }

  makePlaceholders(key: string, count: number = 1, minWidth?: number, maxWidth?: number): Mithril.Children {
    if (this.placeholderCache[key]) return this.placeholderCache[key];

    return (this.placeholderCache[key] = Array(count)
      .fill(null)
      .map(() => (
        <div
          className="Afrux-ForumWidgets-layout-placeholder"
          style={
            minWidth && maxWidth
              ? {
                  '--width': Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth + '%',
                }
              : {}
          }
        />
      )));
  }

  getConfig(): any {
    return JSON.parse(this.setting(WidgetEditor.settingKey)() || '{}');
  }

  setConfig(config: any): void {
    this.config = config;
    app.widgets.setConfig(config);
    this.setting(WidgetEditor.settingKey)(JSON.stringify(config));
    m.redraw();
  }
}
