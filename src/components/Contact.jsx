import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      setStatus('Sending...');
      // In a full app, send to backend/email provider. Here we just simulate.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! We will get back to you shortly.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0A0C1D] py-20">
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s build together</h2>
          <p className="mt-2 text-slate-300">Tell us about your idea and we’ll reach out within 24 hours.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-300">Name</label>
            <input name="name" required className="rounded-lg border border-slate-700/60 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 outline-none focus:border-blue-500" placeholder="Your name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-300">Email</label>
            <input type="email" name="email" required className="rounded-lg border border-slate-700/60 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 outline-none focus:border-blue-500" placeholder="you@company.com" />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-slate-300">Project details</label>
            <textarea name="message" rows={5} required className="rounded-lg border border-slate-700/60 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 outline-none focus:border-blue-500" placeholder="Tell us about your goals, timeline, and budget." />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-400">We reply fast. No spam ever.</p>
            <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Send message
            </button>
          </div>
          {status && (
            <div className="sm:col-span-2 text-sm text-blue-300">{status}</div>
          )}
        </form>
      </div>
    </section>
  );
}
