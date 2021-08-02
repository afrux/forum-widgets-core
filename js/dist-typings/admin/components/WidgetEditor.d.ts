import * as Mithril from 'mithril';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import type { Widget } from '../../common/extend/Widgets';
export default class WidgetEditor extends ExtensionPage {
    static settingKey: string;
    private config?;
    private placeholderCache;
    oninit(vnode: Mithril.Vnode): void;
    onupdate(vnode: any): void;
    content(): Mithril.Children;
    editor(): Mithril.Children;
    createEditorSections(): void;
    cleanupLayout(): void;
    widget(widget: Widget, placed?: boolean): Mithril.Children;
    layoutWidget(widget: Widget): Mithril.Children;
    onSortUpdate(): void;
    isWidgetAvailable(widget: Widget): boolean;
    makePlaceholders(key: string, count?: number, minWidth?: number, maxWidth?: number): Mithril.Children;
    getConfig(): any;
    setConfig(config: any): void;
}
