import WidgetManager from '../common/WidgetManager';
import WidgetEditor from './components/WidgetEditor';

app.widgets = new WidgetManager();

app.initializers.add('afrux/forum-widgets-core', () => {
  app.extensionData
    .for('afrux-forum-widgets-core')
    .registerSetting({
      setting: 'afrux-forum-widgets-core.prefer_data_with_initial_load',
      label: app.translator.trans('afrux-forum-widgets-core.admin.settings.prefer_data_with_initial_load'),
      help: app.translator.trans('afrux-forum-widgets-core.admin.settings.prefer_data_with_initial_load_help'),
      type: 'boolean',
    })
    .registerPage(WidgetEditor);
});

// Expose compat API
import customCompat from './compat';
// @ts-ignore
import { compat } from '@flarum/core/admin';

Object.assign(compat, customCompat);
