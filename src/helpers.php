<?php

namespace Afrux\ForumWidgets\Helper;

/**
 * @link https://stackoverflow.com/questions/4371059/shorten-long-numbers-to-k-m-b
 */
function pretty_number_format(int $number, int $precision = 2): string
{
    if ($number < 1000) {
        $format = number_format($number);
    } elseif ($number < 1000000) {
        $format = number_format($number / 1000, $precision) . 'K';
    } elseif ($number < 1000000000) {
        $format = number_format($number / 1000000, $precision) . 'M';
    } else {
        $format = number_format($number / 1000000000, $precision) . 'B';
    }

    return $format;
}
