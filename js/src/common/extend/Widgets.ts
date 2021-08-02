import { Application } from 'src/shims';

export type Placement = 'start_top' | 'start_bottom' | 'end' | 'top' | 'bottom';

export type Widget = {
  id?: string;
  key: string;
  component: any;
  placement: Placement;
  isDisabled: boolean | (() => boolean);
  isUnique: boolean;
  position?: number;
  extension?: string;
  state?: any;
};

export default class Widgets {
  private widgets: Widget[] = [];

  add(widget: Widget): this {
    this.widgets.push(widget);

    return this;
  }

  extend(app: Application, extension: string): void {
    this.widgets.map((widget: Widget) => {
      app.widgets.add(widget, extension);
    });
  }
}
