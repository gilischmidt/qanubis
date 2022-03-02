<?php

namespace App\Helpers;


class FeatureFlag
{
    public static function socialAuth()
    {
        return false;
    }

    public static function accountVerification()
    {
        return false;
    }

    public static function sendEmail()
    {
        return false;
    }

    public static function translations()
    {
        return false;
    }
}


