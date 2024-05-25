<?php

namespace App\Http\Controllers;

use App\Models\Point;
use Illuminate\Http\Request;
use App\Models\Province;

class ProvinceController extends Controller
{
    public function index()
    {
        return view("home");
    }

    public function __construct()
    {
        $this->Province = new Province();
    }

    public function point_province()
    {
        $result = Point::allData();
        return json_encode($result);
    }
}
