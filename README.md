<p align=center><img width=100 src="https://raw.githubusercontent.com/afrux/forum-widgets-core/master/icon.svg" alt="icon"></p>
<h1 align=center>Forum Widgets</h1><p align=center>
<img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"> <a href="https://packagist.org/packages/afrux/forum-widgets-core"><img alt="Latest Stable Version" src="https://img.shields.io/packagist/v/afrux/forum-widgets-core.svg?style=flat-square"></a> <a href="https://packagist.org/packages/afrux/forum-widgets-core"><img alt="Total Downloads" src="https://img.shields.io/packagist/dt/afrux/forum-widgets-core.svg?style=flat-square"></a> <a href="https://www.buymeacoffee.com/sycho"><img alt="donate" src="https://img.shields.io/badge/donate-buy%20me%20a%20coffee-%23ffde39?style=flat-square"></a>
</p><p align=center>
<a href="http://flarum.org">Flarum</a> Core Extension for Managing Forum Widgets.
  <br>
<img src="https://user-images.githubusercontent.com/20267363/127786249-4f17bb07-9dfb-4066-8d91-6c92b61358cd.gif" alt="animated_screenshot">
  <br>
<img width=400 src="https://user-images.githubusercontent.com/20267363/127903214-a96f08ba-1a71-42b0-bc17-5b2c65a68859.png" alt="forum screenshot">
</p>

## Installation

Remember that this is just a forum widgets editor, it doesn't actually come with any widgets.

Install with composer:

```sh
composer require afrux/forum-widgets-core:"*"
```

Here is a list of currently compatible widgets you can install:

* [Online Users](https://github.com/afrux/online-users-widget)
* [Forum Stats](https://github.com/afrux/forum-stats-widget)
* [Top Posters](https://github.com/afrux/top-posters-widget)
* [News Fader](https://github.com/afrux/news-widget)

## Updating

```sh
composer update afrux/forum-widgets-core:"*"
php flarum migrate
php flarum cache:clear
```

## Extend
Extension developers wanting to create widgets with this small framework, the following explains how you can register a new widget, for now you should only register one widget per extension.

1. Require this extension in your extension's `composer.json`:
```json
"require": {
  "flarum/core": "^1.0.0",
  "afrux/forum-widgets-core": "^0.1.0"
},
```

2. Create your widget's component in `common/components` by extending the base `Widget` component provided with this package.
```jsx
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class MyWidget extends Widget {
  className() {
    // Custom class name.
    // You can also use the class "AfruxWidgets-Widget--flat" for a flat widget (not contained in a block).
    // Please avoid strong custom styling so that it looks consistent in other themes.
    return 'MyWidget';
  }

  icon() {
    // Widget icon.
    return 'fas fa-cirlce';
  }

  title() {
    // Widget title.
    // Can return empty for a titleless widget.
    return app.translator.trans('afrux-online-users-widget.forum.widget.title');
  }

  content() {
    return (
      <div className="Afrux-OnlineUsersWidget-users">
        // ...
      </div>
    );
  }
}
```

3. Register your widget in the admin and forum frontends:
* Create a new `registerWidget.js` file in `common`:
```js
import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import MyWidget from './components/MyWidget';

export default function(app) {
  (new Widgets).add({
    key: 'onlineUsers',
    component: MyWidget,
    
    // Can be a callback that returns a boolean value.
    // example: () => app.forum.attribute('myCustomExtension.mySetting')
    isDisabled: false,
    
    // Is this a one time use widget ? leave true if you don't know.
    isUnique: true,
    
    // The following values are default values that can be changed by the admin.
    placement: 'end',
    position: 1,
  }).extend(app, 'my-extension-id');
};
```
* Register the widget in both frontends `admin/index.js` & `forum/index.js`:
```js
import registerWidget from '../common/registerWidget';

app.initializers.add('my-extension-id', () => {
  registerWidget(app);
});
```

4. If you are using typescript, you can add the typings of this package by adding this to the `paths` key in your `tsconfig.json` file:
```json
"flarum/extensions/afrux-forum-widgets-core/*": ["../vendor/afrux/forum-widgets-core/js/dist-typings/*"]
```

You can also checkout other example widgets in the Afrux github org.

## Links

- [Packagist](https://packagist.org/packages/afrux/forum-widgets-core)
- [GitHub](https://github.com/afrux/forum-widgets-core)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
