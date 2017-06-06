<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
	protected $table = 'comments';

	protected $fillable = ['body', 'user_id', 'topic_id'];

    public function topic() {
    	return $this->belongsTo('App\Topic');
    }

    public function user() {
    	return $this->belongsTo('App\User');
    }
}
