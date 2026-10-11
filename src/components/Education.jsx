import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Trophy, 
  Milestone
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background soft ambient radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 shadow-sm">
            <Milestone size={14} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 dark:text-white tracking-tight mb-5">
            Educational Journey & <br />
            <span className="italic font-serif bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-300 dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent">
              Verified Credentials
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            From foundational diploma training in low-level systems to modern computer science engineering.
          </p>
        </div>

        {/* Two-Column Grid: Journey on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Educational Journey Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-2xl font-medium text-slate-900 dark:text-white flex items-center gap-2.5">
                <GraduationCap className="text-sky-600 dark:text-sky-400" size={24} />
                <span>Educational Journey</span>
              </h3>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                2 Key Milestones
              </span>
            </div>

            {/* Timeline Cards Container */}
            <div className="relative pl-6 sm:pl-8 border-l border-slate-300 dark:border-white/10 space-y-8 my-4 ml-3 sm:ml-4">
              
              {/* Milestone 1: 3rd Year Engineering */}
              <div className="relative group">
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 rounded-full bg-white dark:bg-[#0d0d14] border-2 border-sky-500 flex items-center justify-center text-sky-500 shadow-lg shadow-sky-500/20">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                </div>

                <div className="p-7 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#09090d]/80 backdrop-blur-xl border border-sky-500/30 hover:border-sky-500/50 shadow-xl shadow-slate-200/50 dark:shadow-2xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/30 font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      Currently in 3rd Year
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <Calendar size={13} className="text-sky-600 dark:text-sky-400" />
                      Aug 2025 – May 2028 (3rd Year)
                    </span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors mb-1">
                    Mangaldeep College of Engineering
                  </h4>
                  <div className="text-sm font-medium text-sky-700 dark:text-sky-200 mb-3 flex items-center gap-2">
                    <span>Bachelor of Engineering (B.E.) in Computer Science</span>
                  </div>

                  <p className="text-slate-600 dark:text-zinc-400 text-sm font-light leading-relaxed mb-4">
                    Actively pursuing 3rd year computer science coursework. Deepening expertise in algorithms, distributed systems, database engineering, system design, and AI-driven frontend applications.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-white/5">
                    {['Algorithms & DSA', 'Database Engineering', 'Distributed Computing', 'System Architecture'].map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Milestone 2: Diploma in CS */}
              <div className="relative group">
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 rounded-full bg-white dark:bg-[#0d0d14] border-2 border-purple-500 flex items-center justify-center text-purple-500 shadow-md">
                  <CheckCircle2 size={14} className="text-emerald-500 dark:text-emerald-400" />
                </div>

                <div className="p-7 sm:p-8 rounded-3xl bg-white/85 dark:bg-[#09090d]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-lg shadow-slate-200/40 dark:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-medium">
                      <CheckCircle2 size={12} />
                      Completed Diploma
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <Calendar size={13} className="text-purple-600 dark:text-purple-400" />
                      Sept 2021 – May 2025
                    </span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors mb-1">
                    LoGIMEER Institute Nashik (MSBTE)
                  </h4>
                  <div className="text-sm font-medium text-slate-700 dark:text-zinc-300 mb-3">
                    Diploma in Computer Science
                  </div>

                  <p className="text-slate-600 dark:text-zinc-400 text-sm font-light leading-relaxed mb-4">
                    Built comprehensive engineering fundamentals with intensive coursework in C, C++, Java, Object-Oriented Programming, Data Structures, Operating Systems, Relational Databases, and computer hardware.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-white/5">
                    {['C / C++ & Java', 'OOP Fundamentals', 'Operating Systems', 'Relational Databases'].map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Academic Commitment Ribbon */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-100/90 to-slate-50/70 dark:from-white/5 dark:to-white/[0.02] border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy size={20} />
                </div>
                <div>
                  <h5 className="text-slate-900 dark:text-white font-medium text-sm mb-1">Competitive & Hackathon Journey</h5>
                  <p className="text-slate-600 dark:text-zinc-400 text-xs leading-relaxed">
                    Represented college teams in national challenges including Hack for Green Bharat (Tech Masters / Unstop) and Delhi Technological University's FinWiz, applying classroom theory to production-grade engineering under pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Certifications & Competitions */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-medium text-slate-900 dark:text-white flex items-center gap-2.5 mb-2">
              <Award className="text-purple-600 dark:text-purple-400" size={24} />
              <span>Certifications & Honors</span>
            </h3>

            <div className="p-6 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#09090d]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-xl">
              <div className="space-y-3.5">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 hover:bg-slate-100/80 dark:hover:bg-white/[0.08] transition-all flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <div className="text-slate-900 dark:text-white font-medium text-sm leading-snug">
                          {cert.title}
                        </div>
                        <div className="text-slate-500 dark:text-zinc-400 text-xs mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-zinc-300 block mb-1">
                        {cert.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
