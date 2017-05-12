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

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()                                 //вывод всех разделов, последний добавленный - первый
    {
        $last_topic = Topic::orderby('created_at', 'desc')->first();
        $sections = Section::with('topics')->latest()->get();
        $result = [];
        foreach ($sections as $key => $section) {
            $result[] = [
                'id' => $section->id,
                'name' => $section->section,
                'last_topic_id' => $section->topics->sortByDesc('created_at')->first()->id, 
                'last_topic' => $section->topics->sortByDesc('created_at')->first()->title,
                'last_topic_author' => $section->topics->sortByDesc('created_at')->first()->user->name,
                'created_at' => $section->created_at
            ];
        }
        // dd($result);

        return view('pages.index', compact('result'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        if(Auth::user()) {

            if(Auth::user()->hasRole('user admin')) {
                return view('pages.new_section');
            }
        }    
        return back();
    }

    public function new_section() 
    {
        $this->validate(request(), [

            'section' => 'required',
        ]);

        Section::create([

            'section' => request('section'),
        ]);

        return redirect('/');
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
    public function show($id)                      
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
