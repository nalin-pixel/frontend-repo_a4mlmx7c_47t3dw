import React from 'react';
import { Check, ArrowRight, Calendar, Video } from 'lucide-react';

const plans = [
  {
    name: 'Weight-Loss Plan',
    price: '$149',
    cadence: 'one-time',
    highlight: 'Everything you need to start',
    features: [
      'Step-by-step habit roadmap',
      'Calorie & protein targets that fit your life',
      'Smart grocery and meal guide',
      'Plate method templates',
      'Mindset reset toolkit',
    ],
    cta: 'Buy the Plan',
    href: '#checkout',
  },
  {
    name: 'Live Coaching',
    price: '$59',
    cadence: '/month',
    highlight: 'Accountability and support',
    features: [
      'Weekly live group calls',
      'Q&A and hot-seat coaching',
      'Private community access',
      'Progress reviews and check-ins',
      'Call recordings + notes',
    ],
    cta: 'Join Coaching',
    href: '#booking',
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white" id="pricing">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 ring-1 ring-emerald-200">
            <Calendar size={14} /> Start now, stay consistent
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple pricing, powerful support
          </h2>
          <p className="mt-3 text-gray-600">
            Choose your starting point. Add coaching when you want accountability and momentum.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-6 shadow-sm ${
                p.popular ? 'border-emerald-300 bg-emerald-50' : 'border-gray-100 bg-white'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                  Most Popular
                </span>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.highlight}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">{p.price}</p>
                  <p className="text-sm text-gray-500">{p.cadence}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check size={18} className="mt-0.5 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href={p.href}
                  className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium shadow-sm transition ${
                    p.popular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-900 text-white hover:bg-black'
                  }`}
                >
                  {p.cta} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-gray-600">
          <Video size={16} className="text-emerald-600" /> Live calls are hosted weekly. You’ll get email reminders and replays.
        </div>
      </div>
    </section>
  );
}
