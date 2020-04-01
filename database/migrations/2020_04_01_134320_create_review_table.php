<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateReviewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('content');
            $table->string('author');
            $table->timestamps();
        });
        DB::table('review')->insert( [
            ['content' => "I can't believe I paid for this",
            'author' => 'Paul'],
            ['content' => "It's okay",
            'author' => 'Gabriel'],
            ['content' => "Who made this ? It doesn't even work !",
            'author' => 'Angry user']
            ]);
    }
    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review');
    }
}
