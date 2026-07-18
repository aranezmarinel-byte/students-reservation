<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LibraryReservationController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [LibraryReservationController::class, 'index'])->name('dashboard');
    Route::post('dashboard/reservations', [LibraryReservationController::class, 'store'])->name('dashboard.reservations.store');
});

require __DIR__.'/settings.php';
