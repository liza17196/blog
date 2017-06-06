<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
	protected $table = 'topics';

    protected $fillable = ['title', 'body', 'user_id', 'section_id'];

    public function section() {
    	return $this->belongsTo('App\Section');
    }

    public function user() {
    	return $this->belongsTo('App\User');
    }

    public function comments() {
    	return $this->hasMany('App\Comment');
    }
}