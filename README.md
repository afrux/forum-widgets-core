# Forum Widgets

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/afrux/forum-widgets-core.svg)](https://packagist.org/packages/afrux/forum-widgets-core) [![Total Downloads](https://img.shields.io/packagist/dt/afrux/forum-widgets-core.svg)](https://packagist.org/packages/afrux/forum-widgets-core)

A [Flarum](http://flarum.org) extension. Core Extension for Managing Forum Widgets.

![animated_screenshot](https://user-images.githubusercontent.com/20267363/127786249-4f17bb07-9dfb-4066-8d91-6c92b61358cd.gif)

### Installation

Install with composer:

```sh
composer require afrux/forum-widgets-core:"*"
```

### Updating

```sh
composer update afrux/forum-widgets-core:"*"
php flarum migrate
php flarum cache:clear
```

### Extend
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
    // Please avoid applying custom styles so that it works fine with other flarum themes.
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

You can also checkout other example widgets in the Afrux github org.

### Links

- [Packagist](https://packagist.org/packages/afrux/forum-widgets-core)
- [GitHub](https://github.com/afrux/forum-widgets-core)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
