<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components
use App\Http\Controllers\ResultController;

Route::get('/', [ResultController::class, 'index']);
Route::get('/polling_unit/{id}', [ResultController::class, 'pollingUnit']);
Route::get('/q2', [ResultController::class, 'q2page']);
Route::get('/q3', [ResultController::class, 'q3page']);
Route::post('/submit', [ResultController::class, 'submit']);
