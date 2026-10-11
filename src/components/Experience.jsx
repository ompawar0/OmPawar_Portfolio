import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background glow element */}
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 shadow-sm">
            <Briefcase size={14} />
            <span>Work & Internships</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 dark:text-white tracking-tight mb-5">
            Engineering Experience <br />
            <span className="italic font-serif bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-300 dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent">
              In High-Growth Environments
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            Shipping user-centric features, optimizing web performance metrics, and building scalable component libraries.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-7 sm:p-9 rounded-3xl bg-white/85 dark:bg-[#09090d]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-200/40 dark:shadow-2xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Top ambient color stripe */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} opacity-70 group-hover:opacity-100 transition-opacity`} 
              />

              {/* Title & Metadata Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-white/15">
                      {exp.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 font-medium text-sm sm:text-base">
                    <Building2 size={16} className="text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-sky-600 dark:text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-slate-400 dark:text-zinc-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Key Bullet Highlights */}
              <div className="py-6 space-y-3">
                {exp.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0 shadow-sm shadow-sky-400" />
                    <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base font-normal leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider mr-1">
                    Tech Stack:
                  </span>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {exp.company.includes('Voke') && (
                  <a
                    href="https://voke.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:underline transition-colors font-medium"
                  >
                    <span>View Voke Platform</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
