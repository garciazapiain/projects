<?php

use Illuminate\Database\Seeder;
use App\Diet;

class DietsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Diet::truncate();
        
        Diet::insert([
            ['name' => 'vegan'],
            ['name' => 'vegetarian'],
            ['name' => 'pescatarian'],
            ['name' => 'keto'],
            ['name' => 'halal'],
            ['name' => 'kosher'],
            ['name' => 'gluten'],
            ['name' => 'milk'],
            ['name' => 'soy'],
            ['name' => 'eggs'],
            ['name' => 'peanuts'],
            ['name' => 'tree nuts'],
            ['name' => 'fish'],
            ['name' => 'molluscs'],
            ['name' => 'crustaceans'],
            ['name' => 'mustard'],
            ['name' => 'sesame'],
            ['name' => 'celery'],
            ['name' => 'lupin'],
            ['name' => 'sulphites'],
            ]);
    }
}
