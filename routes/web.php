<?php

use App\Http\Controllers\TitikController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('home');
// });


Route::get('/', [TitikController::class,'index']);
Route::get('/point/json', [TitikController::class,'titik_json']);