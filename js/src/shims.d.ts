import WidgetManager from './common/WidgetManager';

declare module 'flarum/common/Application' {
  export default interface Application {
    widgets: WidgetManager;
  }
}
