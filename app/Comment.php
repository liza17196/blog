<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function topic() {
    	return $this->belongsTo('App\Topic');
    }

    public function comment() {
    	return $this->belongsTo('App\Comment');
    }
}
