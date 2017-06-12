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
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        DB::table('roles')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
        
        Role::create([

        	'name' => "user owner", 
        	'display_name' => "Post Owner", 
        	'description' => "User is the owner of a given post."
		]);

        Role::create([

        	'name' => "user admin", 
        	'display_name' => "User Administrator", 
        	'description' => "User is allowed to manage and edit other users."
		]);

    }
}
