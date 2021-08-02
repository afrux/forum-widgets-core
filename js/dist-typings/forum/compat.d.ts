import EndWidgetSection from './components/EndWidgetSection';
import StartTopWidgetSection from './components/StartTopWidgetSection';
import StartBottomWidgetSection from './components/StartBottomWidgetSection';
import TopWidgetSection from './components/TopWidgetSection';
declare const _default: {
    'extensions/afrux-forum-widgets-core/common/extend/Widgets': typeof import("../common/extend/Widgets").default;
    'extensions/afrux-forum-widgets-core/common/components/Widget': typeof import("../common/components/Widget").default;
} & {
    'extensions/afrux-forum-widgets-core/forum/components/EndWidgetSection': typeof EndWidgetSection;
    'extensions/afrux-forum-widgets-core/forum/components/StartTopWidgetSection': typeof StartTopWidgetSection;
    'extensions/afrux-forum-widgets-core/forum/components/StartBottomWidgetSection': typeof StartBottomWidgetSection;
    'extensions/afrux-forum-widgets-core/forum/components/TopWidgetSection': typeof TopWidgetSection;
};
export default _default;
