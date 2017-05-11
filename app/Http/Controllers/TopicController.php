<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Auth;
use App\User;
use App\Topic;
use App\Section;

class TopicController extends Controller
{

    public function index($id) {       //вывод списка тем для определенного раздела

        $title = Section::find($id);        //вывод названия раздела
        
        return view('pages.topics', compact('title'));
    }

    public function create()
    {
        if(Auth::user()) { 
            return view('pages.create');
        }
        return back();
    }

    public function option() {

        $options = Section::all();

        if(Auth::user()) { 
            return view('pages.create', compact('options'));
        }
        return back();
    }

    public function new_topic(Section $options)
    {
        $this->validate(request(), [

            'title' => 'required',
            'section_id' => 'max:255',
            'body' => 'required'
        ]);

        Topic::create([

            'title' => request('title'),
            'section_id' => request('section_id'),
            'user_id' => auth()->user()->id,
            'body' => request('body'),
        ]);

        return redirect('/profile');
    }

    public function show($id)                       //вывод страницы определенной темы
    {
        $topic = Topic::find($id);
        $comments = Topic::find($id)->comments()->paginate(5);
        $variable = Topic::find($id)->user_id;
        $owners = User::find($variable)->roles()->get();

        return view('pages.topic', compact('topic', 'comments', 'owners'));
    }

    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        Topic::find($id)->delete();

        return redirect('/');
    }

}
