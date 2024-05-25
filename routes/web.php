<?php

use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\TitikController;
use App\Models\Province;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('home');
// });


// Route::get('/', [TitikController::class,'index']);
Route::get('/', [ProvinceController::class,'index']);
Route::get('/point/json', [TitikController::class,'titik_json']);
Route::get('/province/point', [ProvinceController::class,'point_province']);
Route::get('/point/location/{id}', [TitikController::class,'location']);
