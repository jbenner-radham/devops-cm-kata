<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ApacheTest extends TestCase
{
    /**
     * Verify that the Apache daemon is running.
     *
     * @return void
     */
    public function testApacheIsRunning()
    {
        $this->assertTrue(`service apache2 status` == " * apache2 is running\n");
    }
}
