<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Auth;
use App\User;
use App\Topic;
use App\Section;
use App\Comment;
use Carbon\Carbon;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $comments = Topic::find($id)->comments;
        $result = [];
        foreach ($comments as $key => $comment) {
            $transform = [
                'id' => $comment->id,
                'body' => $comment->body,
                'author' => $comment->user->name,
                'date' => Carbon::parse($comment->created_at)->toFormattedDateString()
            ];
            array_push($result,$transform);
        };

        return $this->response->setData(false, $result)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {

        $this->validate(request(), [

            'topic_id' => 'max:255',
            'user_id' => 'required|max:255',
            'body' => 'required|max:255',
        ]);

        $result = Comment::create([

            'topic_id' => request('topic_id'),
            'user_id' => request('user_id'),
            'body' => request('body'),
        ]);

        return $this->response->setData(false, $result->toArray())->get();  
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
    public function show(Topic $id)
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
        $comment = Comment::find($id);
        if($comment) {
            $comment->delete();
            $this->response->setAlerts('Delete is successful.');
        }
        else {
            $this->response->setAlerts('Errors');
        }

        // $comments = Topic::find($input['topic_id'])->comments;
        return $this->response->setData(false, ['id' => $id])->get();
    }
}
