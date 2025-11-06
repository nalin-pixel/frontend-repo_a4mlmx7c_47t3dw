import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import { Leaf, Instagram, Youtube } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Tips />
        <Testimonials />
        <Pricing />
        <Booking />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="text-emerald-600" />
          <span className="font-semibold">Momentum Coaching</span>
        </a>
        <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
          <a href="#tips" className="hover:text-emerald-700">Science Tips</a>
          <a href="#testimonials" className="hover:text-emerald-700">Results</a>
          <a href="#pricing" className="hover:text-emerald-700">Pricing</a>
          <a href="#booking" className="hover:text-emerald-700">Book</a>
        </nav>
        <a
          href="#pricing"
          className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 sm:block"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

function Tips() {
  const tips = [
    {
      title: 'Protein first, plate it right',
      desc:
        'Aim for 20–40g of protein per meal. Fill half your plate with veggies, a quarter with protein, a quarter with smart carbs.',
    },
    {
      title: 'Hunger > Willpower',
      desc:
        'Balance meals to prevent cravings. When hunger is handled, motivation stays high and snacking fades.',
    },
    {
      title: 'Move the easy way',
      desc:
        'Daily steps beat sporadic intense workouts. Start at your current baseline and add 1,000 steps at a time.',
    },
    {
      title: 'Tiny habits, big wins',
      desc:
        'Stack small actions to create momentum: prep 1 snack, pour water on waking, 5-minute evening plan.',
    },
  ];

  return (
    <section className="bg-gray-50" id="tips">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-emerald-700 ring-1 ring-emerald-200">
            Simple, science-backed
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Make weight loss boring—and effective
          </h2>
          <p className="mt-3 text-gray-600">
            Proven fundamentals you can follow on a busy week. No extreme diets, just steady progress.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-500" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 text-center text-white lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to build momentum?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-emerald-50">
          Start with the plan, add coaching when you want accountability. Your future self will thank you.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#pricing" className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-emerald-700 shadow-sm">
            View Pricing
          </a>
          <a
            href="#booking"
            className="rounded-lg bg-emerald-800 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-white/20"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Leaf className="text-emerald-600" size={18} />
            Momentum Coaching — Results built on science and support
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:text-emerald-700">Privacy</a>
            <a href="#" className="hover:text-emerald-700">Terms</a>
            <a href="#" className="hover:text-emerald-700" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" className="hover:text-emerald-700" aria-label="YouTube">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
