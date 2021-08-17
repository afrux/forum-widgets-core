<?php

/*
 * This file is part of afrux/forum-widgets-core.
 *
 * Copyright (c) 2021 Sami Mazouz.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Afrux\ForumWidgets;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings)
        ->serializeToForum('afrux-forum-widgets-core.config', 'afrux-forum-widgets-core.config', function (?string $value): array {
            return $value ? json_decode($value, true) : [];
        })
        ->serializeToForum('afrux-forum-widgets-core.preferDataWithInitialLoad', 'afrux-forum-widgets-core.prefer_data_with_initial_load', 'boolval'),
];
