<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    //
    protected $table = 'users_data';
    protected $fillable = [
        'id_user', 'likes', 'dislikes', 'super_likes'
    ];
}
