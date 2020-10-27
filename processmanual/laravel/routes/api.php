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

  // public routes
  Route::post('login', 'Api\AuthController@login')->name('login.api');
  Route::post('register', 'Api\AuthController@register')->name('register.api');

  // private routes
  Route::middleware('auth:api')->group(function () {

//Manuals
// Route::get('/manuals', 'Api\ManualsController@index');
// Route::get('/manuals/{$id}', 'Api\ManualsController@show');
// Route::post('/manual/new', 'Api\ManualsController@store');
// Route::get('/manual/edit/{$id}', 'Api\ManualsController@edit');
Route::resource('manual', 'Api\ManualsController');
Route::resource('process', 'Api\ProcessesController');
  });
//Processes

// Route::get('/processes', 'Api\ProcessesController@show');
// Route::post('/processes/new', 'Api\ProcessesController@store');

