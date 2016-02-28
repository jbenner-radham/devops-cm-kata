<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use Exception;

class StatusController extends Controller
{
    /**
     * Display an architectural "ping" status page.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            // MariaDB
            $data = User::first();
        } catch (Exception $e) {
            $data = false;
        }

        // PHP
        $application  = true;

        // Apache
        $presentation = (`service apache2 status` == " * apache2 is running\n");

        return view('status', compact('data', 'application', 'presentation'));
    }
}
