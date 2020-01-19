<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manual extends Model
{
    //
    //
    protected $fillable = [
        'name'
    ];

    public function processes()
    {
        return $this->hasMany('App\Process');
    }

}
