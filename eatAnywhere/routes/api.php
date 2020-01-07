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

Route::group(['middleware' => ['json.response']], function () {

    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });

    // public routes
    Route::post('/login', 'Api\AuthController@login')->name('login.api');
    Route::post('/register', 'Api\AuthController@register')->name('register.api');

    // private routes
    Route::middleware('auth:api')->group(function () {
        
        //LogoutApi:
        Route::get('/logout', 'Api\AuthController@logout')->name('logout');

        //PrimaryApi:
        Route::post('/restaurants', 'Api\PrimaryController@index');
        Route::post('/search', 'Api\PrimaryController@search');

        //RestaurantApis:
        Route::get('/restaurant/{id}', 'Api\RestaurantsController@show');
        Route::post('/restaurant/new', 'Api\RestaurantsController@store');

        //DishApis:
        Route::get('/dish/{id}', 'Api\DishesController@show');
        Route::post('/dish/new', 'Api\DishesController@store');

        //ReviewApis:
        Route::get('/review/{id}', 'Api\ReviewsController@show');
        Route::post('/review/new', 'Api\ReviewsController@store');

    });

});
        
