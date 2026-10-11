import React, { useState } from 'react';
import { 
  Code, 
  Layout, 
  Cpu, 
  Database, 
  Wrench, 
  Terminal, 
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code size={20} className="text-sky-600 dark:text-sky-400" />;
      case 'layout':
        return <Layout size={20} className="text-indigo-600 dark:text-indigo-400" />;
      case 'cpu':
        return <Cpu size={20} className="text-amber-600 dark:text-amber-400" />;
      case 'database':
        return <Database size={20} className="text-emerald-600 dark:text-emerald-400" />;
      case 'wrench':
        return <Wrench size={20} className="text-purple-600 dark:text-purple-400" />;
      default:
        return <Terminal size={20} className="text-sky-600 dark:text-sky-400" />;
    }
  };

  const filteredCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.category === activeTab);

  return (
    <section id="skills" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background glow orb */}
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 shadow-sm">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 dark:text-white tracking-tight mb-5">
            Core Competencies & <br />
            <span className="italic font-serif bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-300 dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent">
              Engineered Skillset
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            Rooted in strong computational foundations, systems memory concepts, and modern responsive frontend toolchains.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'All'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-md shadow-slate-900/10 dark:shadow-white/10'
                : 'bg-white/80 dark:bg-[#0f0f14]/80 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === cat.category
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-md shadow-slate-900/10 dark:shadow-white/10'
                  : 'bg-white/80 dark:bg-[#0f0f14]/80 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white/85 dark:bg-[#09090d]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-sky-500/40 dark:hover:border-white/20 transition-all duration-300 shadow-lg shadow-slate-200/40 dark:shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                    {getCategoryIcon(group.icon)}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                      {group.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-3.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 hover:bg-slate-100/80 dark:hover:bg-white/[0.07] transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm text-slate-800 dark:text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-sky-500/10 dark:bg-white/10 text-sky-700 dark:text-sky-300">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 pl-3.5">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer detail */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                <span>Production Tested</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: 200+ LeetCode & CodeChef */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-500/10 via-white/90 to-purple-500/10 dark:from-sky-950/40 dark:via-[#0a0a0f]/90 dark:to-purple-950/40 backdrop-blur-xl border border-sky-500/25 shadow-xl shadow-slate-200/50 dark:shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-600 dark:text-sky-300 shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="font-serif text-xl font-medium text-slate-900 dark:text-white mb-1">
                200+ Algorithmic Challenges Solved
              </h4>
              <p className="text-slate-600 dark:text-zinc-300 text-sm font-light">
                Actively practicing on LeetCode & CodeChef focusing on C++ STL, graphs, dynamic programming, and sub-optimal runtime reduction.
              </p>
            </div>
          </div>
          <a
            href="https://leetcode.com/ompawar0"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-900 text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white hover:bg-slate-800 border border-slate-800 dark:border-white/20 transition-all shadow-sm"
          >
            LeetCode Profile
          </a>
        </div>

      </div>
    </section>
  );
}
