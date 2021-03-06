<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Manual;
use App\User;

class ManualsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $userId = AuthController::user()->id;
        // $data['data'] = DB::table('manuals')->where('user_id', $userId)->get();
        // return $data;
        // $manual = Manual::get()->where->('user_id'==$userId);
        // $user = DB::table('manuals')->where('user_id', $userId)->first();
        // $manual = \DB::table('manuals')->where('user_id', auth()->user()->id);
        $manual = \DB::table('manuals')->where('user_id', auth()->user()->id)->get();
        return response()->json($manual);
        // return $manual;
        // return Manual::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this -> validate($request, [
            'name' => 'required',
        ]);
            $manual = new Manual;
            $manual->name = $request->input('name');
            $manual->user_id = auth()->user()->id;
            $manual->save();
            
            // return redirect('/manual/mymanuals')->with('success', 'Post Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $manual = Manual::find($id);
        return $manual;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $manual = Manual::find($id);
        return $manual;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $manual = Manual::find($id);
        $this -> validate($request, [
                'name' => 'required',
            ]);
        $manual->name = $request->input('name');
        $manual->save();
    }
    // $this -> validate($request, [
    //     'name' => 'required',
    // ]);
    //     $manual = new Manual;
    //     $manual->name = $request->input('name');
    //     $manual->user_id = auth()->user()->id;
    //     $manual->save();
    // $shark = shark::find($id);
    //         $shark->name       = Input::get('name');

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $manual = Manual::find($id);
        $manual->delete();
    }
}



// <?php

// namespace App\Http\Controllers\Api;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
// use App\Manual;

// class ManualsController extends Controller
// {
//     public function index()
//     {
//         $manual = Manual::get();

//         return $manual;
//     }

//     public function show($id)
//     {
//        return Manual::find($id);
//     }

//     public function store(Request $request)
//     {
//         $newManual = Manual::create([
//             'name' => $request->input('name'),
//         ]);
//         return $newManual;
//     }
//     public function edit(Request $request)
//     {
//         $manual = Manual::get($id);
//         return $manual;
//     }
// }
