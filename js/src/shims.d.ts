import App from 'flarum/common/Application';
import WidgetManager from './common/WidgetManager';

declare class Application extends App {
  widgets: WidgetManager;
}
