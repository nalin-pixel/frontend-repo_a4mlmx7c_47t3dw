import React from 'react';
import { Star, ShieldCheck, HeartPulse } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid items-center gap-6 sm:grid-cols-3">
          <TrustItem
            icon={<Star className="text-amber-500" size={20} />}
            title="Proven Methods"
            desc="Evidence-based strategies, no gimmicks"
          />
          <TrustItem
            icon={<ShieldCheck className="text-emerald-600" size={20} />}
            title="Certified Coach"
            desc="Accredited, insured, and experienced"
          />
          <TrustItem
            icon={<HeartPulse className="text-rose-500" size={20} />}
            title="Health First"
            desc="Sustainable, habit-focused approach"
          />
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 ring-1 ring-gray-100">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
