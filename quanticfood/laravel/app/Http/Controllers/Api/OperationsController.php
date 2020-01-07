<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Operation;

class OperationsController extends Controller
{
    public function show()
    {
        $operation = Operation::get();

       return $operation;
    }

    public function store(Request $request)
    {
        $newOperation = Operation::create([
            'name' => $request->input('name'),
            'frequency' => $request->input('frequency'),
            'responsible' => $request->input('responsible')
        ]);
        return $newOperation;
    }
}
