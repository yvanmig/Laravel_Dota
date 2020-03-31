<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateHeroTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hero', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('mainStat');
            $table->string('age');
            $table->string('orientation');
            $table->string('picture');

            $table->timestamps();
        });
        DB::table('hero')->insert(
            ['name' => ' -- ',
            'mainStat' => '--',
            'age' => '-',
            'orientation' => ' -- ',
            'picture' => ''
            ]);
        }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hero');
    }
}
