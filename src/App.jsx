import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="w-full bg-[#070815] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <div className="text-slate-400">
          <span className="font-semibold text-white">wikan.dev</span> — Building bold software with a blue touch.
        </div>
        <div className="text-slate-400">© {new Date().getFullYear()} Wikan Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#070815]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#070815]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold text-white">
            <span className="text-blue-400">wikan</span>.dev
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow shadow-blue-600/30 hover:bg-blue-500">
            Get a quote
          </a>
        </div>
      </header>

      <main id="home" className="pt-16">
        <Hero />
        <div id="process">
          <Services />
          <Process />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
