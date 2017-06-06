<?php

use Illuminate\Database\Seeder;
use App\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->truncate();
        Role::create([

        	'name' => "user owner", 
        	'display_name' => "Post Owner", 
        	'description' => "User is the owner of a given post."
		]);

		DB::table('roles')->truncate();
        Role::create([

        	'name' => "user admin", 
        	'display_name' => "User Administrator", 
        	'description' => "User is allowed to manage and edit other users."
		]);

    }
}
