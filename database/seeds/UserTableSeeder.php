<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        User::create([

        	'name' => "Admin", 
        	'email' => "admin@mail.ru", 
        	'phone' => "+38(012)333-44-55", 
        	'avatar'=> "/uploads/avatars/default.jpg", 
        	'password' => "bcrypt('admin123')"
		]);

		DB::table('users')->truncate();
        User::create([

        	'name' => "User1", 
        	'email' => "user1@mail.ru", 
        	'phone' => "+38(099)111-22-33", 
        	'avatar'=> "/uploads/avatars/default.jpg", 
        	'password' => "bcrypt('user123')"
		]);

				DB::table('users')->truncate();
        User::create([

        	'name' => "User2", 
        	'email' => "user3@mail.ru", 
        	'phone' => "+38(099)211-22-33", 
        	'avatar'=> "/uploads/avatars/default.jpg", 
        	'password' => "bcrypt('user123')"
		]);
				DB::table('users')->truncate();
        User::create([

        	'name' => "User3", 
        	'email' => "user3@mail.ru", 
        	'phone' => "+38(099)311-22-33", 
        	'avatar'=> "/uploads/avatars/default.jpg", 
        	'password' => "bcrypt('user123')"
		]);
    }
}
