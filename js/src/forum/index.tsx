import * as Mithril from 'mithril';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import type ItemList from 'flarum/common/utils/ItemList';

import WidgetManager from '../common/WidgetManager';
import EndWidgetSection from './components/EndWidgetSection';
import StartTopWidgetSection from './components/StartTopWidgetSection';
import StartBottomWidgetSection from './components/StartBottomWidgetSection';
import TopWidgetSection from './components/TopWidgetSection';
import BottomWidgetSection from './components/BottomWidgetSection';

app.widgets = new WidgetManager();

app.initializers.add('afrux/forum-widgets-core', () => {
  app.widgets.setConfig(app.data.resources[0].attributes['afrux-forum-widgets-core.config']);

  extend(IndexPage.prototype, 'view', function (vnode: Mithril.Vnode) {
    vnode.children[1].children[0].children.push(<EndWidgetSection />);
    vnode.children[1].children = [<TopWidgetSection />, ...vnode.children[1].children, <BottomWidgetSection />];
  });

  extend(IndexPage.prototype, 'sidebarItems', (items: ItemList) => {
    items.add('startTopWidgetSection', <StartTopWidgetSection />, 100);
    items.add('startBottomWidgetSection', <StartBottomWidgetSection />, -100);
  });
});

// Expose compat API
import customCompat from './compat';
// @ts-ignore
import { compat } from '@flarum/core/forum';

Object.assign(compat, customCompat);
