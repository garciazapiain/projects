<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Dish;
use App\Image;
use App\Review;


use Illuminate\Database\Eloquent\Builder;

class ReviewsController extends Controller
{
    public function show($id)
    {
        $user_id = $id;

        $dishes = Dish::whereHas('reviews', function (Builder $reviewQuery) use ($user_id) {
            $reviewQuery->where('user_id', $user_id);
        })->with(['reviews' => function ($reviewQ) use ($user_id) {
            $reviewQ->where('user_id', $user_id)->with('image');
        }])
            ->limit(20)
            ->get();

       return $dishes;
    }

    public function store(Request $request) 
    {
        // dd([$request->dish_id, $request->user_id, $request->review, $request->rating, $request->file('image')]);
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension(); // getting image extension
        $filename = uniqid().'.'.$extension;
        $file->move('images/', $filename);
        $image = Image::create([
            'path' => "images/" . $filename
        ]);

        $review = Review::create([
            'dish_id' => $request->dish_id,
            'user_id' => $request->user_id,
            'text' => $request->review,
            'rating' => $request->rating,
            'image_id' => $image->id,
        ]);

        $response = [
            'message' => 'success',
            'review' => $review,
            'image_id' => $image->id
        ];

        return $response;
    }
}
