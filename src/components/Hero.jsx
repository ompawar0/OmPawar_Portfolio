import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTypewriter, MagneticButton } from '../hooks/useAnimations';

const TYPEWRITER_LINES = [
  'Software Engineer & Frontend Developer',
  'React & Three.js Specialist',
  'C++ & Algorithm Enthusiast',
  'AI Interface Architect @ Voke',
];

export default function Hero({ onOpenResume }) {
  const { displayText } = useTypewriter(TYPEWRITER_LINES, {
    speed: 52,
    startDelay: 600,
    loopDelay: 2200,
    loop: true,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
    >
      {/* Subtle readability gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-slate-200/30 dark:to-[#050505]/40 z-[2]" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Availability badge */}
        <div
          data-reveal
          className="reveal-fade inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#0d0d12]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-lg text-xs font-medium text-slate-700 dark:text-zinc-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Open to Software Engineering & Frontend Roles</span>
          <span className="hidden sm:inline text-slate-400 dark:text-zinc-600">•</span>
          <span className="hidden sm:inline font-mono text-slate-500 dark:text-zinc-400">Maharashtra, India</span>
        </div>

        {/* Glassy headline card */}
        <div
          data-reveal
          data-delay="200"
          className="reveal-up relative p-6 sm:p-10 md:p-12 rounded-3xl bg-white/85 dark:bg-[#09090d]/65 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-2xl max-w-4xl mx-auto"
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-24 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Mono label */}
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 mb-3 font-semibold">
            Om Pawar — Portfolio
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-slate-900 dark:text-white leading-[1.06] mb-4">
            Building the Future, <br className="hidden sm:block" />
            <span className="italic font-serif bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-300 dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent">
              One Line at a Time.
            </span>
          </h1>

          {/* ── Typewriter subtitle ── */}
          <div className="min-h-[2.5rem] mb-6 flex items-center justify-center">
            <p className="text-base sm:text-xl text-slate-800 dark:text-zinc-200 font-mono tracking-wide">
              <span className="text-sky-600 dark:text-sky-400">&gt; </span>
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-5 bg-sky-600 dark:bg-sky-400 ml-0.5 animate-pulse align-middle" />
            </p>
          </div>

          {/* Bio copy */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light mb-8">
            Specializing in <span className="text-slate-900 dark:text-white font-medium">React</span>, <span className="text-slate-900 dark:text-white font-medium">C++</span>, and high-performance interactive architectures. Currently engineering AI-driven interview interfaces at{' '}
            <span className="text-sky-600 dark:text-sky-300 font-medium">Voke AI</span>, where algorithmic rigor meets seamless design.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <a
                href="#projects"
                data-cursor="View"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-slate-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-100 shadow-xl shadow-slate-900/10 dark:shadow-white/10 active:scale-95 transition-all"
              >
                <span>Explore Selected Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                data-cursor="Hello"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300/80 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:border-white/15 backdrop-blur-md active:scale-95 transition-all"
              >
                <span>Get in Touch</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onOpenResume}
                data-cursor="CV"
                className="flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium tracking-wide bg-gradient-to-r from-sky-500/10 to-indigo-500/10 hover:from-sky-500/20 hover:to-indigo-500/20 text-sky-600 dark:text-sky-300 border border-sky-500/30 backdrop-blur-md active:scale-95 transition-all"
              >
                <Eye size={16} />
                <span>Quick Resume</span>
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Metric stats ribbon */}
        <div
          data-reveal
          data-delay="400"
          className="reveal-up mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              data-cursor="More"
              className="p-4 rounded-2xl bg-white/80 dark:bg-[#0c0c11]/70 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-lg text-center hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-[#0f0f16]/80 transition-all"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-zinc-300">{stat.label}</div>
              <div className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 mt-1">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-8 text-xs font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-2 bg-white/80 dark:bg-black/40 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/5 backdrop-blur-sm shadow-sm">
          <span className="w-1 h-1 rounded-full bg-sky-500 animate-pulse" />
          <span>Scroll to explore · Move cursor for 3D parallax</span>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" className="flex flex-col items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-widest">
          <span>Scroll</span>
          <div className="w-5 h-9 rounded-full border border-slate-300 dark:border-zinc-700 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-sky-500 dark:bg-sky-400 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
