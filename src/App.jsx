import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import { useScrollReveal } from './hooks/useAnimations';

function PortfolioContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { isDark } = useTheme();

  // Activate scroll-triggered reveal on all [data-reveal] elements
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#050505] text-slate-900 dark:text-[#f1f5f9] selection:bg-sky-500/30 selection:text-white transition-colors duration-300 relative">
      {/* ── Custom Cursor ─────────────────────── */}
      <CustomCursor />

      {/* ── Persistent 3D GLSL Canvas Background ─ */}
      <Background3D />

      {/* ── Navigation ────────────────────────── */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* ── Main Content ──────────────────────── */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* ── Footer ────────────────────────────── */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* ── Resume Modal ──────────────────────── */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
