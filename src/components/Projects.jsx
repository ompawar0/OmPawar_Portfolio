import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Bot, 
  Check, 
  Activity
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';
import { TiltCard } from '../hooks/useAnimations';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Web Apps', 'Algorithms & Systems', 'UI Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const featuredVoke = projects.find(p => p.id === 'voke');

  return (
    <section id="projects" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 shadow-sm">
            <FolderGit2 size={14} />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 dark:text-white tracking-tight mb-5">
            Engineering Systems & <br />
            <span className="italic font-serif bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-300 dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent">
              High-Impact Applications
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            Architected with precision in React, modern JavaScript, Tailwind CSS, and C++. Every project embodies algorithmic efficiency and intuitive user experience.
          </p>
        </div>

        {/* 1. Dedicated Flagship Showcase: Voke AI Platform */}
        {featuredVoke && (
          <div className="mb-14">
            <div className="relative rounded-3xl p-8 sm:p-12 bg-white/90 dark:bg-gradient-to-br dark:from-[#0c0d14]/90 dark:via-[#0a0a0f]/80 dark:to-[#07070a]/90 backdrop-blur-2xl border border-sky-500/30 shadow-2xl shadow-slate-200/50 dark:shadow-2xl overflow-hidden group">
              {/* Radiant spotlight glow */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/15 blur-3xl rounded-full pointer-events-none group-hover:bg-sky-500/25 transition-all duration-500" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side: Voke details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/15 text-sky-600 dark:text-sky-300 border border-sky-500/30">
                      <Bot size={13} />
                      Flagship AI Platform
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                      Active Production Development
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-tight">
                    {featuredVoke.title}
                  </h3>

                  <p className="text-slate-700 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
                    {featuredVoke.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {featuredVoke.featuredPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="mt-1 w-4 h-4 rounded-full bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                          <Check size={11} />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-3">
                    {featuredVoke.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-200 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={featuredVoke.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 active:scale-95 transition-all"
                    >
                      <span>Explore Voke Live</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={featuredVoke.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-200 border border-slate-300 dark:border-white/15 active:scale-95 transition-all"
                    >
                      <Github size={15} />
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right side: Interactive UI Simulation Mockup Card */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-slate-950/95 dark:bg-[#060609]/90 border border-slate-800 dark:border-white/15 shadow-2xl relative overflow-hidden text-white">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800 dark:border-white/10 text-xs font-mono text-zinc-400">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="text-zinc-300 ml-2">voke-interview-cockpit.tsx</span>
                      </div>
                      <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                        <Activity size={12} className="animate-pulse" />
                        Live Feed
                      </span>
                    </div>

                    <div className="py-5 space-y-4 font-mono text-xs">
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-zinc-400 uppercase tracking-widest mb-1">
                          Candidate Audio Prompt
                        </div>
                        <div className="text-zinc-200 font-sans text-xs italic">
                          "Explain how you would optimize a React application with heavy 3D canvas re-renders..."
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/30">
                        <div className="flex items-center justify-between text-[11px] text-sky-400 uppercase tracking-widest mb-1.5">
                          <span>AI Feedback Stream</span>
                          <span className="text-emerald-400">Score: 94/100</span>
                        </div>
                        <div className="space-y-1.5 text-zinc-300 font-sans text-xs">
                          <p>• Isolated Three.js loop via useRef to avoid React state re-render stalls.</p>
                          <p>• Applied WebGL buffer geometry disposal & throttled resize listeners.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                          <span className="text-zinc-400 block">Latency</span>
                          <span className="text-emerald-400 font-semibold">&lt; 180ms</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                          <span className="text-zinc-400 block">UX Satisfaction</span>
                          <span className="text-sky-400 font-semibold">99.4%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-md shadow-slate-900/10 dark:shadow-white/10'
                  : 'bg-white/80 dark:bg-[#0e0e14]/80 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Secondary Projects Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter(p => p.id !== 'voke' || selectedCategory !== 'All')
            .map((project, cardIdx) => (
              <TiltCard
                key={project.id}
                intensity={10}
                glare={true}
                data-reveal
                data-delay={`${cardIdx * 80}`}
                className="reveal-up"
              >
                <div
                  data-cursor="Open"
                  className="group p-6 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#09090d]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-slate-200/40 dark:shadow-xl hover:shadow-sky-500/10 h-full"
                >
                  <div>
                    {/* Card top bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 font-semibold">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="Code"
                          className="p-2 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="Live"
                          className="p-2 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono text-slate-500 dark:text-zinc-400 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-600 dark:text-zinc-300 text-sm font-light leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Feature bullet list */}
                    <div className="space-y-1.5 mb-6 text-xs text-slate-600 dark:text-zinc-400 font-normal">
                      {project.featuredPoints.slice(0, 2).map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <span className="text-sky-600 dark:text-sky-400 mt-0.5">•</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech tags and metric footer */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 font-medium group-hover:border-sky-500/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      ⚡ {project.metrics}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
        </div>

      </div>
    </section>
  );
}
