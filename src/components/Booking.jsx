import React, { useState } from 'react';
import { CalendarDays, Clock, Video, Phone, CheckCircle2 } from 'lucide-react';

const times = ['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function Booking() {
  const [selectedDay, setSelectedDay] = useState('Wed');
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [type, setType] = useState('Group Session');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-gray-50" id="booking">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-emerald-700 ring-1 ring-emerald-200">
            <CalendarDays size={14} /> Book a call or join a group session
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Reserve your spot in minutes
          </h2>
          <p className="mt-3 text-gray-600">
            Choose a time that works for you. You’ll receive a confirmation email with details.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 size={42} className="text-emerald-600" />
                <h3 className="mt-3 text-xl font-semibold text-gray-900">You’re booked!</h3>
                <p className="mt-1 text-gray-600">
                  We’ve sent a confirmation with your session details and reminders.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-900">Session type</label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {['Group Session', '1:1 Coaching'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setType(t)}
                        className={`rounded-lg border px-4 py-2 text-sm ${
                          type === t
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                            : 'border-gray-200 bg-white text-gray-700'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900">Day</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {days.map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => setSelectedDay(d)}
                        className={`rounded-lg border px-4 py-2 text-sm ${
                          selectedDay === d
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                            : 'border-gray-200 bg-white text-gray-700'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900">Time</label>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {times.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`rounded-lg border px-4 py-2 text-sm ${
                          selectedTime === t
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                            : 'border-gray-200 bg-white text-gray-700'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Confirm Booking
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">What to expect</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><Video size={18} className="mt-0.5 text-emerald-600" /> Interactive Zoom sessions</li>
              <li className="flex items-start gap-2"><Clock size={18} className="mt-0.5 text-emerald-600" /> 45–60 minutes per session</li>
              <li className="flex items-start gap-2"><Phone size={18} className="mt-0.5 text-emerald-600" /> Reminders and replays included</li>
            </ul>
            <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900 ring-1 ring-emerald-200">
              Tip: New to coaching? Start with a group session to build momentum, then upgrade to 1:1 when you want deeper support.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
