import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#070815]">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Grainy gradient overlay (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(30,64,175,0.35),rgba(2,6,23,0.9))] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-36 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-300 ring-1 ring-inset ring-blue-500/30">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          wikan.dev — Software House
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          We build bold, high‑performance digital products
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-slate-300 sm:text-lg">
          Specialized in web development, mobile apps, automation with n8n, and localized AI solutions — crafted with a blue‑tinted, futuristic touch.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="rounded-lg border border-slate-700/60 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-slate-600 hover:bg-slate-900/60"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
