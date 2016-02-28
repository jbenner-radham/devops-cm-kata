<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OsTest extends TestCase
{
    /**
     * Get the POSIX "uname" info from the OS.
     *
     * @return void
     */
    public function testPosixUnameIsNotEmpty()
    {
        $this->assertTrue(!empty(posix_uname()));
    }
}
