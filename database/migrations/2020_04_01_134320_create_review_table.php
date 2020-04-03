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
            'author' => 'Virginie C.'],
            ['content' => "It's okay",
            'author' => 'Gabriel B.'],
            ['content' => "Who made this ? It doesn't even work !",
            'author' => 'Grégory H.']
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
