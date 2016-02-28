<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $properties = [
            'name'     => 'James Benner',
            'email'    => 'james.benner@gmail.com',
            'password' => 'secret'
        ];

        DB::table('users')->insert($properties);
    }
}
