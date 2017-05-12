<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Comment;
use App\Filter;

class FilterWords extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'filter:demo';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will be searching indecent words';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $filters = Filter::get();
        
        foreach($filters as $filter) {
        
            $comments = Comment::where('body', 'like', '%'.$filter->filter.'%')
                            ->get();

                foreach($comments as $comment){
                    
                    $value = strip_tags($comment['body']);
                    $naked_value = preg_replace("|[^\d\w ]+|i","",$value);
                    $pieces = explode(" ", $naked_value);
                    
                    foreach($pieces as $key => $piece) {
                        
                        if($piece == $filter->filter) {
                            $replacement = substr_replace($piece, '***', 1, -1);
                            $this->info($comment['body']);
                            $comment['body'] = substr_replace($comment['body'], $replacement, strpos($comment['body'], $piece), strlen($piece));
                            $comment->save();
                            $this->info($comment['body']);
                        }


                            // $new_words = Comment::where('body', 'like', '%' . $filter->filter . '%')
                            //         // ->update($piece => $new_value)
                            //         ->get();
                            //     foreach($new_words as $new_word) {
                            //     }
                            // $user->name = $new_nickname;
                            // $user->save();

                            // UPDATE comments SET BODY =REPLACE(body, '" . $piece . "', '" . $new_value . "')

                    }
                }
        }
    }
}
