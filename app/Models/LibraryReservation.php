<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LibraryReservation extends Model
{
    protected $table = 'library_reservations';
    protected $primaryKey = 'reservation_id';
    public $timestamps = false;

    protected $fillable = [
        'reservation_date',
        'student_id',
        'student_name',
        'year',
        'course',
        'time_effective',
        'reason',
        'total_students',
        'maximum_students',
        'status',
    ];
}
