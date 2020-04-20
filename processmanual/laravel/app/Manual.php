<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manual extends Model
{
    //
    //
    protected $fillable = [
        'name', 'user_id'
    ];

    public function processes()
    {
        return $this->hasMany('App\Process');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
