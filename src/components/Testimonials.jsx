import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya K.',
    result: 'Lost 16 lbs in 12 weeks',
    quote:
      'I finally stopped yo-yo dieting. The weekly calls kept me consistent and the habits are so doable.',
    avatar:
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Michael B.',
    result: 'Down 22 lbs, more energy',
    quote:
      "The plan cut through the noise. No crazy rules—just clarity and momentum that fit my routine.",
    avatar:
      'https://images.unsplash.com/photo-1605460375648-278bcbd579a6?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Sara L.',
    result: 'Confident and consistent',
    quote:
      'The mindset tools were a game changer. I stopped all-or-nothing thinking and learned to reset fast.',
    avatar:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-emerald-700 ring-1 ring-emerald-200">
            <Quote size={14} /> What clients say
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Results you can feel and see
          </h2>
          <p className="mt-3 text-gray-600">
            Real people, real progress. Consistency beats intensity—and we make consistency simple.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-emerald-700">{t.result}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
