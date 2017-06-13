<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Auth;
use App\User;
use App\Topic;
use App\Section;
use App\Role;
use App\Permission;
use Image;

use Carbon\Carbon;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $user = Auth::user();
        if ($user)
        {
            $role = $user->roles[0]->name;
            $user = $user->toArray();
            $user['role'] = $role;
        }
        else
        {
            $user = ['role' => 'guest'];
        }
        return $this->response->setData(false, $user)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        // $topics = Auth::user()->toArray();

        $result = [];
        foreach(Auth::user()->topics as $topic) {
            $result[] = [
                'id' => $topic->id,
                'title' => $topic->title,
                'section' => $topic->section->section,
                'created_at' => Carbon::parse($topic->created_at)->toFormattedDateString(),
                'updated_at' => Carbon::parse($topic->updated_at)->toFormattedDateString()
            ]; 
        // dd($result);
        }
        return $this->response->setData(false, $result)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
         return view('pages.setting', array('user'=>Auth::user() ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update_avatar(Request $request)
    {
        if($request->hasFile('newAvatar')) {
            $avatar = $request->file('newAvatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(150, 150)->save(public_path('/uploads/avatars/' . $filename));

            $user = Auth::user();
            $user->avatar ='/uploads/avatars/' . $filename;
            $user->save();

             return $this->response->setAlerts('Update is successful')->get();
        }

        return $this->response->setErrors('The newAvatar is null')->setAlerts('Something was wrong')->get();
    }
    public function update(Request $request)
    {
        if(request('newName')) {
            $newName = request('newName');
            $user = User::find(request('id'));
            $user->name = $newName;
            $user->save();

            return $this->response->setAlerts('Update is successful')->get();
        }

        return $this->response->setErrors('The newName is null')->setAlerts('Something was wrong')->get();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        Auth::logout();
        User::find($id)->delete();

        $user = $user = ['role' => 'guest'];

        $this->response->setData(false, $user)->get();
    }
}
