<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Dish;
use App\Review;

class ReviewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create('en_US');
        Review::truncate();

        $user_ids = User::pluck('id')->toArray();
        $dish_ids = Dish::pluck('id')->toArray();


        foreach($dish_ids as $dish_id) {

            for ($i = 0; $i < rand(1, 5); $i++) {
                $review = new Review;

                $review->dish_id = $dish_id;
                $review->user_id = $user_ids[$i];
                $review->text = $faker->text($maxNbChars = 100);
                $review->rating = rand(1, 5);
                $review->image_id = rand(1, 24);
                $review->save();
            }
        }
    }
}
