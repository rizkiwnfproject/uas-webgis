<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Point;

class TitikController extends Controller
{
    public function index()
    {
        return view("home");
    }
    
    public function __construct()
    {
        $this->Point = new Point();
    }

    public function titik_json()
    {
        $result = $this->Point->allData();
        return json_encode($result);
    }

    public function location($id = '')
    {
        $result = $this->Point->getLocation($id);
        return json_encode($result);
    }
}
