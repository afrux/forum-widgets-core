import type Mithril from 'mithril';
import ExtensionPage, { ExtensionPageAttrs } from 'flarum/admin/components/ExtensionPage';
import type { Widget } from '../../common/extend/Widgets';
interface WidgetEditorAttrs extends ExtensionPageAttrs {
}
export default class WidgetEditor extends ExtensionPage<WidgetEditorAttrs> {
    static settingKey: string;
    private config?;
    private placeholderCache;
    oninit(vnode: Mithril.Vnode<WidgetEditorAttrs, this>): void;
    onupdate(vnode: Mithril.Vnode<WidgetEditorAttrs, this>): void;
    content(vnode: Mithril.Vnode<WidgetEditorAttrs, this>): JSX.Element;
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
export {};
