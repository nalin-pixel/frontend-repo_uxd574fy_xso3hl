import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0B0E1A]">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-32 text-center">
        <span className="mb-3 text-sm font-medium tracking-wide text-blue-300/80">
          wikan.dev — software studio
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Clean, fast, reliable software
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-slate-300 sm:text-lg">
          We specialize in web development, mobile apps, automation with n8n, and localized AI.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="rounded-md border border-slate-700 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-600"
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  );
}
