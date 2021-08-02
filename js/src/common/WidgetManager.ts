import { Widget } from '../common/extend/Widgets';

export default class WidgetManager {
  public widgets: Widget[] = [];

  /**
   * We only have this because the way we're injecting the widget sections
   * ends up with the widgets rerendering on navigation.
   */
  public states: any = {};

  private config: any = {};

  add(widget: Widget, extension: any): void {
    widget.extension = extension;
    widget.id = `${extension}:${widget.key}`;
    this.widgets.push(widget);
    this.states[widget.id] = {};
  }

  getbyId(id: string): Widget | null {
    return this.getWidgetInstances().find((w: Widget) => w.id === id) || null;
  }

  getWidgetInstances(): Widget[] {
    const disabled = this.config.disabled || [];
    const widgets = (this.config.instances || []).map(
      (widget: any): Widget => ({
        ...(this.widgets.find((w: Widget) => w.id === widget.id) || {}),
        ...widget,
      })
    );

    this.widgets.forEach((widget: Widget) => {
      const lookupWidget = widgets.find((w: any) => w.id === widget.id);

      if (!lookupWidget) {
        widgets.push(widget);
      }
    });

    return widgets.filter((widget: Widget) => !disabled.includes(widget.id));
  }

  get(placement: string): Widget[] {
    const widgets: Widget[] = this.getWidgetInstances()
      .filter((widget: Widget) => widget.placement === placement)
      .filter((widget: Widget) => (typeof widget.isDisabled === 'function' ? !widget.isDisabled() : !widget.isDisabled))
      .map((widget: Widget) => ({ ...widget, state: this.states[widget.id!] }));

    return widgets;
  }

  setConfig(config: any): void {
    this.config = config;
  }
}
