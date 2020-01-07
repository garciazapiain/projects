<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{

    protected $fillable = [
        'restaurant_id','name', 'description'
    ];

    public function diets()
    {
        return $this->belongsToMany('App\Diet');
    }

    public function restaurant()
    {
        return $this->belongsTo('App\Restaurant');
    }

    public function reviews()
    {
        return $this->hasMany('App\Review');
    }
}
