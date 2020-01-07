<?php

use Illuminate\Database\Seeder;
use App\Restaurant;
use App\Dish;

class DishesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $diets_rand = function() {
            $diets = [];
            $length = rand(1, 4);

            for ($i = 0; $i < $length; $i++) {
                $diets[] = rand(1, 20);
            }

            return $diets;
        };
    
        $faker = Faker\Factory::create('en_US');
        Dish::truncate();

        $restaurant_ids = Restaurant::pluck('id')->toArray();


        foreach($restaurant_ids as $restaurant_id) {

            for ($i = 0; $i < 20; $i++) {
                $diets = $diets_rand();

                $dish = new Dish;

                $dish->name = $faker->word();
                $dish->description = $faker->text($maxNbChars = 100);
                $dish->restaurant_id = $restaurant_id;
                $dish->save();

                $dish->diets()->attach($diets);
            }
        }


    }
}
