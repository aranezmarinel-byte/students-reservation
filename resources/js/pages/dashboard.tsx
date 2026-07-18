import { Head, useForm, usePage } from '@inertiajs/react';
import { dashboard } from '@/routes';

type ReservationFlash = {
    success?: string;
};

export default function Dashboard() {
    const { flash } = usePage<{ flash?: ReservationFlash }>().props;
    const { data, setData, post, processing, reset } = useForm({
        reservation_date: '',
        student_id: '',
        student_name: '',
        year: '',
        course: '',
        time_effective: '',
        reason: '',
        total_students: '',
        maximum_students: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/reservations');
        reset('reservation_date', 'student_id', 'student_name', 'year', 'course', 'time_effective', 'reason', 'total_students', 'maximum_students');
    };

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <h2 className="mb-4 text-2xl font-semibold">Student Library Reservation</h2>
                    {flash?.success && (
                        <div className="mb-4 rounded-md bg-green-100 p-3 text-sm text-green-700">
                            {flash.success}
                        </div>
                    )}

                    <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-sm font-medium">Reservation Date</label>
                            <input type="date" value={data.reservation_date} onChange={(e) => setData('reservation_date', e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" required />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Student ID</label>
                            <input type="text" value={data.student_id} onChange={(e) => setData('student_id', e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" required />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Student Name</label>
                            <input type="text" value={data.student_name} onChange={(e) => setData('student_name', e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" required />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Year</label>
                            <input type="text" value={data.year} onChange={(e) => setData('year', e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" required />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Course</label>
                            <input type="text" value={data.course} onChange={(e) => setData('course', e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" required />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Time Effective</label>
                            <input type="text" value={data.time_effective} onChange={(e) => setData('time_effective', e.target.value)} placeholder="8:00 AM - 10:00 AM" className="w-full rounded-md border border-slate-300 px-3 py-2" required />
                        </div>
                        <div className="md:col-span-2">
                            <label className="mb-1 block text-sm font-medium">Reason</label>
                            <textarea value={data.reason} onChange={(e) => setData('reason', e.target.value)} rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2" />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Total Students</label>
                            <input type="number" value={data.total_students} onChange={(e) => setData('total_students', e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" required />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Maximum Students</label>
                            <input type="number" value={data.maximum_students} onChange={(e) => setData('maximum_students', e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" required />
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" disabled={processing} className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60">
                                {processing ? 'Saving...' : 'Reserve'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
