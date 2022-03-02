<?php

namespace App\Http\Controllers\Portal;

use App\Http\Requests\Portal\ProfileRequest;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    public function index()
    {
        $user = $this->user();
        return view('app.portal.profile.index', compact('user'));
    }

    public function update(ProfileRequest $request)
    {
        $input = $request->all();
        $user = $this->user();

        try {
            if (isset($input['password'])) {
                if (!Hash::check($input['current_password'], $user->password)) {
                    return back()->withErrors(['current_password' => __('errors.profile.password_mismatch')]);
                }
            }

            $res = $this->user()->update($input);
            $this->user()->setRememberToken(Str::random(5));
            event(new PasswordReset($user));

            if ($res)
                return back()->with('success', __('app_responses.defaults.update'));
            else
                return back()->with('error', __('app_responses.defaults.update'));
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return back()->with('error', __('app_responses.defaults.error.default'));
        }
    }
}
