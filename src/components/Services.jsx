import React from 'react';
import { Code2, Smartphone, Workflow, Bot } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Fast, scalable websites and web apps using modern stacks.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Cross‑platform apps with smooth UX and native feel.'
  },
  {
    icon: Workflow,
    title: 'Automation with n8n',
    desc: 'Automate workflows and integrations to save time.'
  },
  {
    icon: Bot,
    title: 'Localized AI',
    desc: 'Privacy‑aware, on‑device and region‑aware AI solutions.'
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#0B0E1A] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-slate-300">Practical, production‑ready solutions with a subtle blue touch.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-700/50">
              <div className="mb-3 inline-flex rounded-lg bg-blue-600/10 p-2">
                <Icon className="h-5 w-5 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
