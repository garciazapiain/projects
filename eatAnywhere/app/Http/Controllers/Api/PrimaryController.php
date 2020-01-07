<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Restaurant;
use App\Dish;

use Illuminate\Database\Eloquent\Builder;


class PrimaryController extends Controller
{
    public function index(Request $request)
    {
        $diets = $request->diets;

        $restaurants = Restaurant::whereHas('dishes', function (Builder $dishQuery) use ($diets) {
            $dishQuery->whereHas('diets', function (Builder $dietQuery) use ($diets) {
                $dietQuery->whereIn('diets.id', $diets);
            });
        })->with(['dishes' => function ($dishQ) use ($diets) {
            $dishQ->whereHas('diets', function (Builder $dietQuery) use ($diets) {
                $dietQuery->whereIn('diets.id', $diets);
            })->with('reviews.image');
        }])->limit(30)->get();
    

        return $restaurants;
    }

    public function search(Request $request)
    {
        $name = $request->name;

        $restaurants = Restaurant::where('name', 'like', '%'.$name.'%')
            ->with('dishes.reviews.image')
            ->limit(20)
            ->get();
    
        return $restaurants;
    }
}
