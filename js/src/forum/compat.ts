import compat from '../common/compat';

import EndWidgetSection from './components/EndWidgetSection';
import StartTopWidgetSection from './components/StartTopWidgetSection';
import StartBottomWidgetSection from './components/StartBottomWidgetSection';
import TopWidgetSection from './components/TopWidgetSection';
import BottomWidgetSection from './components/BottomWidgetSection';

export default Object.assign(compat, {
  'extensions/afrux-forum-widgets-core/forum/components/EndWidgetSection': EndWidgetSection,
  'extensions/afrux-forum-widgets-core/forum/components/StartTopWidgetSection': StartTopWidgetSection,
  'extensions/afrux-forum-widgets-core/forum/components/StartBottomWidgetSection': StartBottomWidgetSection,
  'extensions/afrux-forum-widgets-core/forum/components/TopWidgetSection': TopWidgetSection,
  'extensions/afrux-forum-widgets-core/forum/components/BottomWidgetSection': BottomWidgetSection,
});
