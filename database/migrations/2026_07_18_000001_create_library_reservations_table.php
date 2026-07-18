<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('library_reservations', function (Blueprint $table) {
            $table->increments('reservation_id');
            $table->date('reservation_date');
            $table->string('student_id', 20);
            $table->string('student_name', 100);
            $table->string('year', 20);
            $table->string('course', 50);
            $table->string('time_effective', 50);
            $table->text('reason')->nullable();
            $table->integer('total_students');
            $table->integer('maximum_students');
            $table->string('status', 20)->default('Pending');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('library_reservations');
    }
};
