import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Binary, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Flame, 
  Award,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-transparent overflow-hidden">
      {/* Subtle radial backdrop for contrast */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 shadow-sm">
            <GraduationCap size={14} />
            <span>Background & Foundations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 dark:text-white tracking-tight mb-5">
            Bridging Algorithmic Rigor with <br />
            <span className="italic font-serif bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-300 dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent">
              High-Fidelity Engineering
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            I am a Computer Science student and software engineer driven by scalable systems, efficient algorithms in C++, and intuitive, accessible user interfaces built on React.
          </p>
        </div>

        {/* Main Content Grid: Story + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative in Backdrop Blur Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/85 dark:bg-[#09090d]/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-sky-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-serif text-2xl font-medium text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span>The Story So Far</span>
                <span className="text-xs font-mono font-normal text-sky-600 dark:text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                  Om Pawar
                </span>
              </h3>

              <div className="space-y-4 text-slate-700 dark:text-zinc-300 leading-relaxed font-normal text-sm sm:text-base">
                <p>
                  My engineering journey is rooted in deep fundamentals. Currently in my <strong className="text-slate-900 dark:text-white font-semibold">3rd year of Bachelor of Engineering in Computer Science at Mangaldeep College of Engineering</strong>, and having completed my <strong className="text-slate-900 dark:text-white font-semibold">Diploma in Computer Science at LoGIMEER Institute Nashik</strong>, I cultivate an obsession with writing clean, performant code that scales cleanly from low-level memory up to the pixel layer.
                </p>
                <p>
                  During my web development internship at <strong className="text-slate-900 dark:text-white font-semibold">Calibers Infotech Nashik</strong>, I translated complex design prototypes into responsive React applications. By implementing a modular, reusable component architecture, I spearheaded a <strong className="text-sky-600 dark:text-sky-300 font-semibold">30% reduction in development cycles</strong> and boosted page loading speed by <strong className="text-sky-600 dark:text-sky-300 font-semibold">25%</strong> while maintaining strict 100% semantic web compliance.
                </p>
                <p>
                  Currently, I engineer high-touch UI interfaces at <strong className="text-slate-900 dark:text-white font-semibold">Voke</strong>, an AI-powered platform preparing the next generation of engineers for technical interviews. Under the mentorship of Mr. Vivek Shridhar, I focus on low-latency state flows, real-time feedback interfaces, and community initiatives like collegiate hackathon sponsorships with Unstop.
                </p>
              </div>

              {/* Education Highlights Badges */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-sky-500/30 relative group hover:border-sky-500/50 transition-all shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-xs font-mono uppercase tracking-wider font-semibold">
                      <GraduationCap size={16} />
                      <span>Degree (3rd Year)</span>
                    </div>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </div>
                  <div className="text-slate-900 dark:text-white font-medium text-sm">Mangaldeep College of Engineering</div>
                  <div className="text-slate-500 dark:text-zinc-400 text-xs mt-0.5">B.E. Computer Science • Currently in 3rd Year</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-mono uppercase tracking-wider font-semibold">
                      <BookOpen size={16} />
                      <span>Diploma (Completed)</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Completed
                    </span>
                  </div>
                  <div className="text-slate-900 dark:text-white font-medium text-sm">LoGIMEER Institute Nashik</div>
                  <div className="text-slate-500 dark:text-zinc-400 text-xs mt-0.5">Diploma in Computer Science (MSBTE)</div>
                </div>
              </div>
            </div>

            {/* Quick Skills Quote Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#0d0d12]/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-4 shadow-md shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">Full-Stack & Systems Mindset</div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400">Comfortable navigating C++ data structures to modern React hooks.</div>
                </div>
              </div>
              <a 
                href="#skills" 
                className="hidden sm:flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-mono tracking-wider font-medium"
              >
                <span>Skills</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Competency Pillar Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Pillar 1: Problem Solving & DSA */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#09090d]/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-xl hover:border-sky-500/40 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 dark:text-amber-400">
                  <Flame size={24} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400/80 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  Competitive DSA
                </span>
              </div>
              <h4 className="font-serif text-xl font-medium text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors">
                200+ Algorithmic Problems Solved
              </h4>
              <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                Active problem solver on <strong className="text-slate-900 dark:text-white font-semibold">LeetCode and CodeChef</strong>, specializing in C++ standard template library (STL), dynamic programming, tree traversals, graphs, and Big-O efficiency analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">C++ STL</span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">Graphs & Trees</span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">Big-O Runtime</span>
              </div>
            </div>

            {/* Pillar 2: Frontend Engineering at Scale */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#09090d]/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-xl hover:border-sky-500/40 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-blue-500/20 border border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <Layers size={24} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400/80 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                  UI Architecture
                </span>
              </div>
              <h4 className="font-serif text-xl font-medium text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-200 transition-colors">
                Design System & Performance Focus
              </h4>
              <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                Proven experience crafting modular component libraries, responsive breakpoints, and strict semantic HTML. Boosted page speed by <strong className="text-sky-600 dark:text-sky-300 font-semibold">25%</strong> at Calibers Infotech with clean architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">React 19</span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">Tailwind CSS</span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">Accessibility</span>
              </div>
            </div>

            {/* Pillar 3: AI Product Innovation */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#09090d]/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-xl hover:border-purple-500/40 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Binary size={24} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400/80 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                  AI Integration
                </span>
              </div>
              <h4 className="font-serif text-xl font-medium text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">
                AI & Simulation Interfaces
              </h4>
              <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                Developing intelligent interactive cockpits at <strong className="text-slate-900 dark:text-white font-semibold">Voke</strong>. Connecting frontend UX to real-time speech and generative AI APIs for real-time interview feedback.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">AI Feedback</span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">REST APIs</span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300">Real-time UX</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
