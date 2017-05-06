<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
	protected $table = 'sections';

	protected $fillable = ['section'];

    public function topics() {

    	return $this->hasMany('App\Topic');
    }
}
