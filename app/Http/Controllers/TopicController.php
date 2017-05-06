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
        return view('pages.create');
    }

    public function option() {

        $options = Section::all();

        return view('pages.create', compact('options'));
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

        return view('pages.topic', compact('topic', 'comments'));
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
        //
    }

}
