<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Point extends Model
{
    public function allData(){
        $result = DB::table("tbl_point")
            ->select('name', 'latitude', 'longitude')
            ->get();
            return $result;
    }
}
