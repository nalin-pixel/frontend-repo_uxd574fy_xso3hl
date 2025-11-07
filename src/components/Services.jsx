import React from 'react';
import { Code2, Smartphone, Workflow, Bot } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Fast, scalable, and accessible websites and web apps built with modern stacks.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Native-quality cross‑platform apps with smooth UX and offline‑first thinking.'
  },
  {
    icon: Workflow,
    title: 'Automation with n8n',
    desc: 'Streamline operations with visual workflows, integrations, and background jobs.'
  },
  {
    icon: Bot,
    title: 'Localized AI',
    desc: 'Private, on‑device and region‑aware AI to enhance products while keeping data safe.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#0A0C1D] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(35%_45%_at_90%_20%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What we do</h2>
          <p className="mt-2 max-w-2xl text-slate-300">From prototypes to production. We ship reliable systems with a blue, modern aesthetic.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-800/70 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-5 transition hover:border-blue-700/60 hover:shadow-lg hover:shadow-blue-600/10">
              <div className="mb-4 inline-flex rounded-xl bg-blue-600/10 p-3 ring-1 ring-inset ring-blue-500/30">
                <Icon className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
