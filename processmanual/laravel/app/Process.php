<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Process extends Model
{
    //
    protected $fillable = [
        'name', 'frequency', 'manual_id'
    ];

    public function manual()
    {
        return $this->belongsTo('App\Manual');
    }

}
