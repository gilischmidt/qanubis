<?php

namespace App\Http\Requests\Portal;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
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
        return [
            'name' => 'required|string|max:255',
            'color' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'Name',
            'color' => 'Color',
            'description' => 'description',
        ];
    }

    public function all($keys = null)
    {
        $a = parent::all();

        $a['name'] = $a['name'] ?? __('models/project.defaults.name');
        $a['color'] = $a['color'] ?? __('models/project.defaults.color');

        return $a;
    }
}
