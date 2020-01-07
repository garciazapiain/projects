<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsersSeeder extends Seeder
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
            $length = rand(1, 3);

            for ($i = 0; $i < $length; $i++) {
                $diets[] = rand(1, 20);
            }

            return $diets;
        };

        $passwords = [
            '12345678',
            '87654321',
            '11223344',
            '55667788',
            'password',
            'drowssap',
            '44332211',
            '88776655',
            'fuckthis',
            'sihtkcuf'
        ];

        $faker = Faker\Factory::create('cs_CZ');
        User::truncate();
        
        for ($i = 0; $i < count($passwords); $i++) {
            $user = new User;
            $diets = $diets_rand();

            $user->first_name = $faker->firstName();
            $user->last_name = $faker->lastName();
            $user->date_of_birth = $faker->date();
            $user->email = $faker->email();
            $user->password = Hash::make($passwords[$i]);

            $user->save();

            $user->diets()->attach($diets);
        }
    }
}
