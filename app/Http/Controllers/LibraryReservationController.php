<?php

namespace App\Http\Controllers;

use App\Models\LibraryReservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LibraryReservationController extends Controller
{
    public function index()
    {
        $reservations = LibraryReservation::orderBy('reservation_date', 'desc')->get();

        return Inertia::render('dashboard', [
            'reservations' => $reservations,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'reservation_date' => 'required|date',
            'student_id' => 'required|string|max:20',
            'student_name' => 'required|string|max:100',
            'year' => 'required|string|max:20',
            'course' => 'required|string|max:50',
            'time_effective' => 'required|string|max:50',
            'reason' => 'nullable|string',
            'total_students' => 'required|integer',
            'maximum_students' => 'required|integer',
        ]);

        LibraryReservation::create($validated);

        return redirect()->route('dashboard')->with('success', 'Reservation saved successfully.');
    }
}
