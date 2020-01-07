<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RestaurantRequest extends FormRequest
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
            'name' => 'required|regex:/^[\w\/\.\s]+$/imsu|max:100',
            'address' => 'required|regex:/^[\w\/\.\s]+$/imsu|min:5|max:250',
            'phone' => 'regex:/^\+*[\d\s]+$/|max:12',
            'website_url' => 'url|max:250'
        ];
    }
}
