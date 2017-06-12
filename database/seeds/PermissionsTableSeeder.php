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

        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        DB::table('permissions')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
        
        Permission::create([

        	'name' => "create-section", 
        	'display_name' => "Create Sections", 
        	'description' => "Create new section."
		]);

        Permission::create([

        	'name' => "delete-post", 
        	'display_name' => "Delete Posts", 
        	'description' => "Delete irrelevant posts."
		]);

        Permission::create([

        	'name' => "delete-comment", 
        	'display_name' => "Delete Comments", 
        	'description' => "Delete indecent comments."
		]);

    }
}
