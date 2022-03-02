<?php

namespace App\Http\Controllers\Portal;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $owner_key;

    protected function user()
    {
        return auth()->user();
    }

    protected function ensureIsOwnObject($model, $attr = null)
    {
        $attr = $attr ?? $this->owner_key;

        if ($model->{$attr} != $this->user()->id) {
            abort(403);
        }
    }
}
