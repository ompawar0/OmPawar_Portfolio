import React, { useEffect } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, experiences, educationList, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#0d0d12] border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden z-10 transition-colors duration-300">
        
        {/* Modal Top Action Bar */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-[#111118] border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse" />
            <h3 className="font-serif text-lg font-medium text-slate-900 dark:text-white">
              Curriculum Vitae — Om Pawar
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-200/70 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-white/10 transition-colors"
              title="Print Resume"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Document Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-50 dark:bg-[#09090d] text-slate-800 dark:text-zinc-200">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-wide">
                OM PAWAR
              </h1>
              <p className="font-mono text-sm text-sky-600 dark:text-sky-400 mt-1 font-medium">
                Software Engineer & Frontend Developer
              </p>
            </div>
            
            <div className="space-y-1 font-mono text-xs text-slate-600 dark:text-zinc-400 text-center sm:text-right">
              <div>Chh. Sambhajinagar, Maharashtra | +91 8459503932</div>
              <div>
                <a href={`mailto:${personalInfo.email}`} className="text-sky-600 dark:text-sky-300 hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-3 pt-1">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white underline">
                  LinkedIn: om-pawar-301081330
                </a>
                <span>•</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white underline">
                  GitHub: ompawar0
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-700 dark:text-zinc-300 text-sm leading-relaxed font-light">
              Computer Science student specializing in C++ and Data Structures & Algorithms, with hands-on experience in front-end development using React, HTML5, CSS3, and JavaScript. Proven ability to convert complex Figma designs into responsive web applications during a professional internship. Solved 200+ algorithmic problems on LeetCode and CodeChef, focusing on runtime efficiency and scalability. Skilled in Git/GitHub, cloud fundamentals, and collaborative Agile workflows. Seeking an internship or entry-level role in software engineering, full-stack development, or systems programming to apply problem-solving expertise and technical innovation.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="text-sm space-y-1 text-slate-700 dark:text-zinc-300">
              <p><strong className="text-slate-900 dark:text-white font-medium">Programming Languages:</strong> C, C++, Java, Python, JavaScript</p>
              <p><strong className="text-slate-900 dark:text-white font-medium">Web Development & Frameworks:</strong> HTML5, CSS3, React, Node.js, Tailwind CSS</p>
              <p><strong className="text-slate-900 dark:text-white font-medium">Databases & Backend:</strong> MySQL, MongoDB (basics), REST APIs</p>
              <p><strong className="text-slate-900 dark:text-white font-medium">Version Control & Tools:</strong> Git, GitHub, VS Code</p>
              <p><strong className="text-slate-900 dark:text-white font-medium">Core Fundamentals:</strong> Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Semantic HTML</p>
              <p><strong className="text-slate-900 dark:text-white font-medium">Cloud & DevOps:</strong> AWS (basics), CI/CD concepts</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-6">
              
              {/* Voke */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Front-End Developer | Voke – AI-Powered Interview Preparation Platform
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-zinc-400">Mar 2025 – Present</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-zinc-300 space-y-1.5 font-light">
                  <li>Developed responsive user interfaces with React, HTML5, CSS3, and JavaScript, ensuring seamless interaction across devices.</li>
                  <li>Collaborated with the product team to design and implement core features, improving usability and interview simulation workflows.</li>
                  <li>Integrated front-end components with backend APIs, enhancing real-time feedback delivery for users.</li>
                  <li>Contributed to strategic initiatives, including an upcoming partnership with Unstop to host a hackathon.</li>
                </ul>
              </div>

              {/* Calibers Infotech */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Web Development Intern | Calibers Infotech Nashik
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-zinc-400">Jun 2024 – Aug 2024</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-zinc-300 space-y-1.5 font-light">
                  <li>Converted high-fidelity Figma designs into responsive React applications, improving page load speed by 25% and enhancing user experience.</li>
                  <li>Engineered a modular, reusable UI component library that reduced development time by 30% across multiple project modules.</li>
                  <li>Ensured semantic HTML structure and cross-browser compatibility, achieving 100% compliance across major platforms.</li>
                  <li>Collaborated within a 3-person Agile team to deliver core features on schedule, resolving 10+ critical accessibility issues.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <span className="text-slate-900 dark:text-white font-medium">Mangaldeep College of Engineering</span>
                  <div className="text-xs text-sky-600 dark:text-sky-300">Bachelor of Engineering (B.E.) in Computer Science • Currently in 3rd Year</div>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-zinc-400">Current (3rd Year)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <span className="text-slate-900 dark:text-white font-medium">LoGIMEER Institute Nashik (MSBTE)</span>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Diploma in Computer Science • Completed</div>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-zinc-400">Sept 2021 – May 2025</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-3">
              CERTIFICATIONS & RECOGNITION
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>What Is Generative AI? – LinkedIn Learning (Jul 2026)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>Introduction to AI – IBM SkillsBuild (Jul 2026)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>Build Your Own Gen AI Model – NxtWave (Oct 2024)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>C, C++, and DSA – Core2Web Pune (2024)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>Hack for Green Bharat – Tech Masters India / Unstop</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>FinWiz Competition – Delhi Technological University</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-[#111118] border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
            Verified resume data for Om Pawar
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
