<?php

use Illuminate\Database\Seeder;
use App\Image;

class ImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Image::truncate();
        
        Image::insert([
            ['path' => '/images/alfredo_zoodles.jpg'],
            ['path' => '/images/almond_berry_pie.jpg'],
            ['path' => '/images/avocado_blueberry_walnut_salad.jpg'],
            ['path' => '/images/avocado_salad.jpg'],
            ['path' => '/images/bbq_brisket_chop_salad.jpg'],
            ['path' => '/images/black_truffle_mac_and_cheese.jpg'],
            ['path' => '/images/bread_and_spread.jpg'],
            ['path' => '/images/cajun_wings_with_bleu_cheese_dip.jpg'],
            ['path' => '/images/ceviche_with_celery.jpg'],
            ['path' => '/images/chicken_gorgonzola_risotto.jpg'],
            ['path' => '/images/fallow_deer_loin.jpg'],
            ['path' => '/images/fois_gras.jpg'],
            ['path' => '/images/gypsy_chicken.jpg'],
            ['path' => '/images/lox_salad.jpg'],
            ['path' => '/images/miso_ramen.jpg'],
            ['path' => '/images/mushroom_risotto.jpg'],
            ['path' => '/images/pickled_camembert.jpg'],
            ['path' => '/images/pork_loin_with_salad.jpg'],
            ['path' => '/images/pork_tenderloin_salad.jpg'],
            ['path' => '/images/pulled_pork_salad.jpg'],
            ['path' => '/images/roasted_pork_tenderloin.jpg'],
            ['path' => '/images/salmon_fillet.jpg'],
            ['path' => '/images/shio_ramen_no_noodles.jpg'],
            ['path' => '/images/veal_and_ribs.jpg'],
            ['path' => '/images/chicken_with_camembert.jpg'],
            ['path' => '/images/meatloaf1.jpg'],
            ['path' => '/images/meatloaf2.jpg'],
            ['path' => '/images/pork_spiz.jpg'],

            ]);
    }
}
