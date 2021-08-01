import WidgetManager from '../common/WidgetManager';
import WidgetEditor from './components/WidgetEditor';

app.widgets = new WidgetManager();

app.initializers.add('afrux/forum-widgets-core', () => {
  app.extensionData
    .for('afrux-forum-widgets-core')
    .registerPage(WidgetEditor);
});

// Expose compat API
import customCompat from './compat';
import { compat } from '@flarum/core/admin';

Object.assign(compat, customCompat);
