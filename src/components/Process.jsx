import React from 'react';

const steps = [
  { k: '01', t: 'Discover', d: 'We align on goals, scope, and success metrics.' },
  { k: '02', t: 'Design', d: 'Flows and UI with clarity and accessibility.' },
  { k: '03', t: 'Build', d: 'Iterative development with tight feedback loops.' },
  { k: '04', t: 'Launch', d: 'Deploy, track, and improve with data.' }
];

export default function Process() {
  return (
    <section className="w-full bg-[#0B0E1A] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Process</h2>
          <p className="mt-2 max-w-2xl text-slate-300">A straightforward path from idea to impact.</p>
        </div>
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <li key={s.k} className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-blue-600/20 text-xs font-semibold text-blue-300">
                  {s.k}
                </span>
                <h3 className="text-lg font-semibold text-white">{s.t}</h3>
              </div>
              <p className="text-slate-300">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
