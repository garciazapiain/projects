<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Diet extends Model
{
    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    public function dishes()
    {
        return $this->belongsToMany('App\Dish');
    }
}
