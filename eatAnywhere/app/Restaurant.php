<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $fillable = [
        'name', 'address', 'latitude', 'longitude', 'phone', 'website_url'
    ];

    public function image()
    {
        return $this->belongsTo('App\Image');
    }

    public function dishes()
    {
        return $this->hasMany('App\Dish');
    }

}
