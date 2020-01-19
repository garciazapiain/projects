<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Process;

class ProcessesController extends Controller
{
    public function show()
    {
        $process = Process::get();

       return $process;
    }

    public function store(Request $request)
    {
        $newProcess = Process::create([
            'name' => $request->input('name'),
            'frequency' => $request->input('frequency'),
            'manual_id' => $request->input('manual_id')

        ]);
        return $newProcess;
    }
}
