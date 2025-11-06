import React from 'react';
import { ArrowRight, Shield, Award, Users, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-emerald-50" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs text-emerald-700 shadow-sm backdrop-blur">
              <Shield size={16} /> Science-backed and coach-tested
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Lose weight with clarity, momentum, and support
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              No fads. No confusion. Just simple habits that work even on busy weeks—guided by a coach who’s helped hundreds create sustainable results.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-white shadow-sm transition hover:bg-emerald-700"
              >
                Get the Weight-Loss Plan <ArrowRight size={18} />
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-emerald-700 ring-1 ring-emerald-200 transition hover:bg-emerald-50"
              >
                Join a Live Coaching Call <Play size={18} />
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-sm">
              <Stat icon={<Users className="text-emerald-700" size={18} />} label="Clients coached" value="800+" />
              <Stat icon={<Award className="text-emerald-700" size={18} />} label="Avg. 12-week loss" value="7–18 lbs" />
              <Stat icon={<Shield className="text-emerald-700" size={18} />} label="Satisfaction" value="4.9/5" />
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100">
              <img
                src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1480&auto=format&fit=crop"
                alt="Healthy lifestyle"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50 ring-1 ring-emerald-100">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold text-gray-900">{value}</div>
        <div className="text-xs text-gray-500">{label}</div>
      </div>
    </div>
  );
}
