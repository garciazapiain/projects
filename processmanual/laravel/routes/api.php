<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Manuals
Route::get('/manuals', 'Api\ManualsController@show');
Route::post('/manual/new', 'Api\ManualsController@store');

//Processes

Route::get('/processes', 'Api\ProcessesController@show');
Route::post('/processes/new', 'Api\ProcessesController@store');