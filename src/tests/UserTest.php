<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    /**
     * Test to verify that "James Benner" displays at the "/users" route.
     *
     * @return void
     */
    public function testJamesBennerUserDisplays()
    {
        $this->visit('/users')
             ->see('James Benner');
    }
}
