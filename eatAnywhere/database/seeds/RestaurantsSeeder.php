<?php

use Illuminate\Database\Seeder;
use App\Restaurant;

class RestaurantsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create('cs_CZ');
        Restaurant::truncate();
        
        for ($i = 0; $i < 100; $i++) {
            $restaurant = new Restaurant;

            $restaurant->insert([
                'name' => $faker->company(),
                'address' => $faker->streetAddress(),
                'latitude' => $faker->latitude($min = 50.020001, $max = 50.119999),
                'longitude' => $faker->longitude($min = 14.280001, $max = 14.539999),
                'phone' => $faker->phoneNumber(),
                'website_url' => $faker->domainName()
            ]);

        }
    }
}
