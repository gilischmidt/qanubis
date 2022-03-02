<?php

namespace App\Helpers;


class AppResponseHelper
{
    public static function throwAjaxError($message, $status = 200)
    {
        return response()->json(['status' => false, 'message' => $message], $status);
    }
}


