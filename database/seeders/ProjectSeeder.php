<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {

        Project::create([
            'name' => 'Test project',
            'color' => 'red',
            'description' => 'This is a test project',
            'owner_id' => 1,
        ]);
    }
}
