import React, { useEffect, useRef } from 'react';

/**
 * Scroll-triggered animation hook using IntersectionObserver.
 * Elements with [data-reveal] attribute animate in when visible.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute('data-delay') || '0';
            setTimeout(() => {
              el.classList.add('revealed');
            }, parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * Typewriter hook — types text character by character.
 * Returns { displayText, isDone }
 */
export function useTypewriter(lines, options = {}) {
  const { speed = 55, startDelay = 400, loopDelay = 3000, loop = false } = options;
  const [displayText, setDisplayText] = React.useState('');
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDone, setIsDone] = React.useState(false);
  const [phase, setPhase] = React.useState('wait'); // wait | type | hold | erase | nextline

  useEffect(() => {
    if (!lines || lines.length === 0) return;

    let timeout;

    if (phase === 'wait') {
      timeout = setTimeout(() => setPhase('type'), startDelay);
    } else if (phase === 'type') {
      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentLine.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, speed);
      } else {
        // Finished typing this line
        if (lineIndex === lines.length - 1) {
          setIsDone(true);
          if (loop) {
            timeout = setTimeout(() => setPhase('erase'), loopDelay);
          }
        } else {
          timeout = setTimeout(() => setPhase('erase'), loopDelay);
        }
      }
    } else if (phase === 'erase') {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((c) => c - 1);
        }, speed / 2.5);
      } else {
        const nextLine = (lineIndex + 1) % lines.length;
        setLineIndex(nextLine);
        setCharIndex(0);
        setDisplayText('');
        setPhase('type');
        setIsDone(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex, lineIndex, lines, speed, startDelay, loopDelay, loop]);

  return { displayText, isDone, lineIndex };
}

/**
 * 3D Tilt card — applies CSS 3D perspective transform on mouse enter.
 * Wrap card children with this.
 */
export function TiltCard({ children, className = '', intensity = 12, glare = true, ...props }) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -intensity;
    const rotateY = ((x - cx) / cx) * intensity;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;

    if (glare && glareRef.current) {
      const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      glareRef.current.style.opacity = '0.12';
      glareRef.current.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 70%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    card.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (card) card.style.transition = 'transform 0.1s linear';
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      {...props}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 transition-opacity duration-300 z-10"
          style={{ borderRadius: 'inherit' }}
        />
      )}
    </div>
  );
}

/**
 * MagneticButton — button that pulls towards the cursor when hovered.
 */
export function MagneticButton({ children, className = '', strength = 0.4, ...props }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    btn.style.transition = 'transform 0.15s ease-out';
  };

  const handleMouseLeave = () => {
    const btn = ref.current;
    if (btn) {
      btn.style.transform = 'translate(0px, 0px)';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}
