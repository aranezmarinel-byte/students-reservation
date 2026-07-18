import { Head } from '@inertiajs/react';

export default function LibraryReservation() {
    return (
        <>
            <Head title="Library Reservation" />
            <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
                <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <h2 className="mb-6 text-2xl font-semibold">Library Reservation Form</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="mb-1 block font-medium">Reservation Date</label>
                            <input type="date" name="reservation_date" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>

                        <div>
                            <label className="mb-1 block font-medium">Student ID</label>
                            <input type="text" name="student_id" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>

                        <div>
                            <label className="mb-1 block font-medium">Student Name</label>
                            <input type="text" name="student_name" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>

                        <div>
                            <label className="mb-1 block font-medium">Year</label>
                            <input type="text" name="year" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>

                        <div>
                            <label className="mb-1 block font-medium">Course</label>
                            <input type="text" name="course" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>

                        <div>
                            <label className="mb-1 block font-medium">Time Effective</label>
                            <input type="text" name="time_effective" placeholder="8:00 AM - 10:00 AM" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>

                        <div>
                            <label className="mb-1 block font-medium">Reason</label>
                            <textarea name="reason" rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>

                        <div>
                            <label className="mb-1 block font-medium">Total Students</label>
                            <input type="number" name="total_students" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>

                        <div>
                            <label className="mb-1 block font-medium">Maximum Students</label>
                            <input type="number" name="maximum_students" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>

                        <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                            Reserve
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
