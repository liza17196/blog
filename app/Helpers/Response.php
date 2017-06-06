<?php namespace App\Helpers;

use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as MainResponse;
use Config;
// use App\Helpers\Functions;

class Response {

	public $statuses = [
		'OK' => 200,
		'ERROR' => 400,
		'UNAUTHORIZED_APP' => 401,
		'UNAUTHORIZED_USER' => 403,
		'WRONG_RESET_TOKEN' => 409,
		'WRONG_ROLE' => 410,
	];

	protected $data = [];

	protected $status = 200;

	protected $errors = [];

	protected $alerts = [];

	public function setData($dataName, $data)
	{
		if ($dataName) {

			$this->data[$dataName] = $data;
		} else {
			
			$this->data = array_merge($this->data, $data);

		}

		return $this;
	}

	public function setStatus($status)
	{
		$this->status = $status;

		return $this;
	}

	public function setErrors($errors)
	{
		
		
		
		if (is_array($errors)) {

			$errors = isAssoc($errors) ? array_get($errors, 'errors', []) : $errors;

			($this->status == 200 && $errors) ? $this->setStatus(400) : '';

			$this->errors = array_merge($this->errors, $errors);
			
			
			return $this;
		}


		if ($errors instanceof \Illuminate\Support\MessageBag) {
			
			foreach ($errors->toArray() as $key => $error) {
				
				$this->errors[] = $error[0];

			}

			($this->status == 200 && $errors) ? $this->setStatus(400) : '';

			return $this;
		}


		$this->errors[] = $errors;
		($this->status == 200 && $errors) ? $this->setStatus(400) : '';

		return $this;

	}

	public function setAlerts($alerts)
	{
		if (is_array($alerts)) {

			array_merge($this->alerts, $alerts);

		}

		$this->alerts[] = $alerts;

		return $this;

	}

	public function unauthorized()
	{
		$this->setErrors('Your session has expired. Please refresh the page.');
		$this->setStatus($this->statuses['UNAUTHORIZED_APP']);

		return  $this->get();
	}

	public function unauthorizedUser()
	{
		$this->setErrors('Your session has expired. Please login again.');
		$this->setStatus($this->statuses['UNAUTHORIZED_USER']);

		return  $this->get();
	}

	public function setStatusWrongToken()
	{
		$this->setStatus($this->statuses['WRONG_RESET_TOKEN']);
		return $this;
	}
	public function setStatusBasicError()
	{
		$this->setStatus($this->statuses['ERROR']);

		return $this;
	}

	public function wrongRole($role)
	{
		$this->setErrors('You user is not allowed to access this resource');
		$this->setAlerts('Please login as '.$role.' to access this resource');
		$this->setStatus($this->statuses['WRONG_ROLE']);

		return $this;
	}

	public function get()
	{
		// dd(Config::get('services'));
		$res = new JsonResponse([
			'data'	=> $this->data, 
			'status' => $this->status, 
			'errors' => $this->errors,
			'alerts' => $this->alerts,
			'jsversion' => 15,
			'api' => array_get($_SERVER, 'ISPRODUCTION')
		]);
	// \Log::info(requestOriginIsValid());
		if($this->requestOriginIsValid())
		{

			$res = $this->setResponseHeaders($res);

		}

		return $res;
	}
	function requestOriginIsValid()
	{
		$rh = getallheaders(); // request headers
		// Log::info($rh);
		// $rh = ($rh) ? [];
		if(!array_key_exists('Origin', $rh)) return true; // this should mean it's not ajax request

		// \Log::info($urls);
		$allows_to_proceed = false;

		return $allows_to_proceed;
	}

	function setResponseHeaders(MainResponse $response)
		{

	// $client_id = Cache::get(session('access_token').'_client_id');
	$rh = getallheaders(); // request headers
	if(array_key_exists('Origin', $rh)) // this should mean it's ajax request, should also add a filter in here to check that origin is within the array of acceptable domain names
	{

		$response->header('Access-Control-Allow-Origin', $rh['Origin']);
		$response->header('Access-Control-Allow-Credentials', 'true');
		$response->header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE');

	}

	return $response;

	}




}