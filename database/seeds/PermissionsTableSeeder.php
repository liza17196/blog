<?php

use Illuminate\Database\Seeder;
use App\Permissions;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('permissions')->truncate();
        Permission::create([

        	'name' => "create-section", 
        	'display_name' => "Create Sections", 
        	'description' => "Create new section."
		]);

		DB::table('permissions')->truncate();
        Permission::create([

        	'name' => "delete-post", 
        	'display_name' => "Delete Posts", 
        	'description' => "Delete irrelevant posts."
		]);

		DB::table('permissions')->truncate();
        Permission::create([

        	'name' => "delete-comment", 
        	'display_name' => "Delete Comments", 
        	'description' => "Delete indecent comments."
		]);

    }
}
