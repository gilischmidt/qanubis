<?php

namespace App\Http\Requests\Portal;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = auth()->user()->id;

        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,

            'password' => 'sometimes|confirmed|min:6',
            'current_password' => 'required_with:password|min:6',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'Name',
            'email' => 'Email',
            'current_password' => 'Current Password',
            'password' => 'New Password',
        ];
    }

    public function all($keys = null)
    {
        $a = parent::all();

        if (is_null($a['current_password'])) unset($a['current_password']);
        if (is_null($a['password'])) unset($a['password']);
        if (is_null($a['password_confirmation'])) unset($a['password_confirmation']);

        return $a;
    }
}
