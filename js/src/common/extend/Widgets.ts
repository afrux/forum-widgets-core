import Application from 'flarum/common/Application';

export type Widget = {
  id?: string;
  key: string;
  component: any;
  placement: 'start'|'end'|'top'|'bottom';
  isDisabled: boolean|(() => boolean);
  isUnique: boolean;
  position?: int;
  extension?: string;
};

export default class Widgets {
  private widgets: Widget[] = [];

  add(widget: Widget) {
    this.widgets.push(widget);

    return this;
  }

  extend(app: Application, extension: string) {
    this.widgets.map((widget: Widget) => {
      app.widgets.add(widget, extension);
    });
  }
}
