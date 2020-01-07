<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\DishRequest;
use App\Dish;

class DishesController extends Controller
{
    public function show($id)
    {
        $dish = Dish::where('id', $id)
            ->limit(10)
            ->with('reviews')
            ->with('reviews.image')
            ->get();

       return $dish;
    }

    public function store(DishRequest $request)
    {
        $newDish = Dish::create([
            'restaurant_id' => $request->input('restaurant_id'),
            'name' => $request->input('name'),
            'description' => $request->input('description')
        ]);
        $newDish -> diets()->attach($request['diets']);
        return $newDish;
    }
}
