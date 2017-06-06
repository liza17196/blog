<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use App\Helpers\Response;

abstract class Controller extends BaseController
{
    use DispatchesJobs, ValidatesRequests;
    protected $response;

    public function __construct( Response $response ){

    	$this->response = $response;
    }
}
