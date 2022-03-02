<?php

namespace App\Helpers;


class FilterHelper
{
    public static function filter($key)
    {
        return request()->get('filter', [])[$key] ?? '';
    }
}


