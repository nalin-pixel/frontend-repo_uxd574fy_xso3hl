import React from 'react';

const steps = [
  {
    k: '01',
    t: 'Discover',
    d: 'We align on goals, constraints, and success metrics. Clear scope, clear outcomes.'
  },
  {
    k: '02',
    t: 'Design',
    d: 'Flows, wireframes, and UI with a crisp blue look. Accessibility from day one.'
  },
  {
    k: '03',
    t: 'Build',
    d: 'Iterative development with transparent progress and CI pipelines.'
  },
  {
    k: '04',
    t: 'Launch & Grow',
    d: 'Deploy, measure, and optimize. We stay to scale and maintain.'
  }
];

export default function Process() {
  return (
    <section className="relative w-full bg-[#070815] py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our process</h2>
            <p className="mt-2 max-w-2xl text-slate-300">A simple path from idea to impact, engineered for speed and quality.</p>
          </div>
        </div>
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <li key={s.k} className="group rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 transition hover:border-blue-700/60">
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600/20 text-xs font-semibold text-blue-300 ring-1 ring-inset ring-blue-500/30">
                  {s.k}
                </span>
                <h3 className="text-xl font-semibold text-white">{s.t}</h3>
              </div>
              <p className="text-slate-300">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
