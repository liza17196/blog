<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Auth;
use App\User;
use App\Topic;
use App\Section;
use Response;
use Carbon\Carbon;

class TopicController extends Controller
{

    public function index($id) {       //вывод списка тем для определенного раздела

        $section = Section::with('topics')->find($id);
        // $title = $section->section;
        // $topics = $section->topics;        //вывод названия раздела
        // $topics = Topic::->latest()->get();
        $result = [];
        foreach ($section['topics'] as $key => $topic) {
            $transform = [
                'id' => $topic->id,
                'name' => $topic->title,
                'last_comment' => $topic->comments->sortByDesc('created_at')->first() ? $topic->comments->sortByDesc('created_at')->first()->body : 'Нет сообщений',
                'author' => $topic->user->name,
                'author_id' => $topic->user->id,
                'created_at' => Carbon::parse($topic->created_at)->toFormattedDateString()            
            ];
            array_push($result,$transform);
        }

          return $this->response->setData(false, $result)->get();
    }

    public function show_section($id)
    {
        $section = Section::with('topics')->find($id);
        $result = ['section' => $section->section];

        return $this->response->setData(false, $result)->get();
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

        // if(Auth::user()) { 
            return $this->response->setData(false, $options->toArray())->get();
        // }
        // return alert('errors');
    }

    public function new_topic(Section $options)
    {
        $this->validate(request(), [

            'title' => 'required',
            'section_id' => 'max:255',
            'user_id' => 'max:255',
            'body' => 'required'
        ]);

        Topic::create([

            'title' => request('title'),
            'section_id' => request('section_id'),
            'user_id' => request('user_id'),
            'body' => request('body'),
        ]);

        $alerts = 'The topic was created';

        return $this->response->setAlerts($alerts)
                        ->get();
    }

    public function show($id)                       //вывод страницы определенной темы
    {
        $topics = Topic::find($id);

        $result = [];
        foreach ($topics as $key => $topic) {
            $result = [
                'title' => $topics->title,
                'body' => $topics->body,
                'author' => $topics->user->name,
                'created_at' => Carbon::parse($topics->created_at)->toFormattedDateString()
            ];
        };
        // $variable = Topic::find($id)->user_id;
        // $owners = User::find($variable)->roles()->get();
        // return view('pages.topic', compact('topic', 'comments', 'owners'));
        // dd($result);

        return $this->response->setData(false, $result)->get();
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
        $topic = Topic::find($id);
        if($topic) {
            $topic->delete();
            $this->response->setAlerts('Delete is successful.');
        }
        else {
            $this->response->setAlerts('Errors');
        }
        return $this->response->setData(false, ['id' => $id])->get();
    }

}
