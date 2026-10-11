import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background glow lighting */}
      <div 
        className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 shadow-sm">
            <Mail size={14} />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 dark:text-white tracking-tight mb-5">
            Let's Engineer the Next <br />
            <span className="italic font-serif bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-300 dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent">
              Breakthrough Together
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            I am currently open to software engineering internships, frontend developer roles, and high-impact systems projects.
          </p>
        </div>

        {/* Contact Grid: Direct Info on Left, Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="p-7 rounded-3xl bg-white/85 dark:bg-[#09090d]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-xl group hover:border-sky-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <Mail size={22} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10 active:scale-95 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={13} className="text-emerald-500 dark:text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1">
                Direct Email
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-medium text-lg text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors block break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-2 font-light">
                Response typically within 24 hours.
              </p>
            </div>

            {/* Direct Links Grid (GitHub, LinkedIn, Phone, Location) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/85 dark:bg-[#09090d]/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all group flex flex-col justify-between shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-800 dark:text-white">
                    <Github size={18} />
                  </div>
                  <ArrowUpRight size={15} className="text-slate-400 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-zinc-400">GitHub</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">ompawar0</div>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/85 dark:bg-[#09090d]/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all group flex flex-col justify-between shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <Linkedin size={18} />
                  </div>
                  <ArrowUpRight size={15} className="text-slate-400 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-zinc-400">LinkedIn</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{personalInfo.linkedinUsername || 'om-pawar-301081330'}</div>
                </div>
              </a>

              {/* Phone Card */}
              <div
                onClick={handleCopyPhone}
                className="p-5 rounded-2xl bg-white/85 dark:bg-[#09090d]/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all cursor-pointer group flex flex-col justify-between shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Phone size={18} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400">
                    {copiedPhone ? 'Copied!' : 'Click to copy'}
                  </span>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-zinc-400">Phone</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{personalInfo.phone}</div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-white/85 dark:bg-[#09090d]/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <MapPin size={18} />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-zinc-400">Location</div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white leading-tight">Chh. Sambhajinagar, MH</div>
                </div>
              </div>

            </div>

            {/* Availability Callout Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-sky-500/10 to-purple-500/10 dark:from-sky-950/30 dark:to-purple-950/30 border border-sky-500/25 backdrop-blur-md shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-mono text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-1.5 font-semibold">
                <Sparkles size={14} />
                <span>Status & Availability</span>
              </div>
              <p className="text-slate-700 dark:text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed">
                Currently open to internship offers, software engineering positions, and collaborative technical endeavors.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#09090d]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-2xl">
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                    Direct communication dispatch
                  </p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={28} />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-slate-900 dark:text-white">
                    Message Received!
                  </h4>
                  <p className="text-slate-600 dark:text-zinc-300 text-sm max-w-md mx-auto font-light">
                    Thank you for reaching out, <span className="text-slate-900 dark:text-white font-medium">{formData.name}</span>. I'll get back to your email at <span className="text-sky-600 dark:text-sky-300 font-mono">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white border border-slate-200 dark:border-white/15"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-sky-500/60 focus:bg-white dark:focus:bg-white/[0.08] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none transition-all shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-sky-500/60 focus:bg-white dark:focus:bg-white/[0.08] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Question"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-sky-500/60 focus:bg-white dark:focus:bg-white/[0.08] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                      Message Content *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Om, let's discuss an engineering opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-sky-500/60 focus:bg-white dark:focus:bg-white/[0.08] text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none transition-all resize-none shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-xl shadow-sky-500/20 active:scale-[0.99] transition-all"
                  >
                    <Send size={14} />
                    <span>Send Message Directly</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
