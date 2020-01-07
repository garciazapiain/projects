<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RestaurantRequest;
use App\Restaurant;
use Spatie\Geocoder\Geocoder;

class RestaurantsController extends Controller
{
    public function show($id)
    {
        $restaurant = Restaurant::where('id', $id)
            ->with('dishes.diets')
            ->with('dishes.reviews.image')
            ->first();

       return $restaurant;
    }

    public function store(RestaurantRequest $request)
    {
        $client = new \GuzzleHttp\Client();

        $geocoder = new Geocoder($client);

        $geocoder->setApiKey(config('geocoder.key'));

        $address = $geocoder->getCoordinatesForAddress($request->input('address'));
        
        // dd($address);

        $newRestaurant = Restaurant::create([
            'name' => $request->input('name'),
            'address' => $request->input('address'),
            'latitude' => $address['lat'],
            'longitude' => $address['lng'],
            'phone' => $request->input('phone'),
            'website_url' => $request->input('website_url')
        ]);
        return $newRestaurant;
    }
}
