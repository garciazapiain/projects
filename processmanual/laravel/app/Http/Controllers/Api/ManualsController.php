<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Manual;

class ManualsController extends Controller
{
    public function show()
    {
        $manual = Manual::get();

       return $manual;
    }

    public function store(Request $request)
    {
        $newManual = Manual::create([
            'name' => $request->input('name'),

        ]);
        return $newManual;
    }
}
