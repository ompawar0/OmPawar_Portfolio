import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState('');
  const { isDark } = useTheme();

  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const dot = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafId = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const onEnter = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        setIsHovering(true);
        setLabel(el.getAttribute('data-cursor') || '');
      }
    };

    const onLeave = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest?.('[data-cursor]')) {
        setIsHovering(false);
        setLabel('');
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    const animate = () => {
      dot.current.x += (pos.current.x - dot.current.x) * 0.11;
      dot.current.y += (pos.current.y - dot.current.y) * 0.11;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (typeof window === 'undefined') return null;

  const ringBorder = isDark
    ? isHovering ? 'rgba(56,189,248,0.7)' : 'rgba(255,255,255,0.25)'
    : isHovering ? 'rgba(2,132,199,0.85)' : 'rgba(15,23,42,0.35)';

  const ringBg = isDark
    ? isHovering ? 'rgba(56,189,248,0.08)' : 'transparent'
    : isHovering ? 'rgba(2,132,199,0.08)' : 'transparent';

  const dotBg = isDark
    ? isHovering ? '#38bdf8' : 'white'
    : isHovering ? '#0284c7' : '#0f172a';

  return (
    <>
      {/* Outer trailing ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className="transition-all duration-200 ease-out flex items-center justify-center"
          style={{
            width: isHovering ? '56px' : isClicking ? '28px' : '40px',
            height: isHovering ? '56px' : isClicking ? '28px' : '40px',
            borderRadius: '50%',
            border: `1.5px solid ${ringBorder}`,
            background: ringBg,
            backdropFilter: isHovering ? 'blur(4px)' : 'none',
            opacity: isVisible ? 1 : 0,
            boxShadow: isHovering
              ? isDark ? '0 0 20px rgba(56,189,248,0.3)' : '0 0 20px rgba(2,132,199,0.25)'
              : 'none',
          }}
        >
          {isHovering && label && (
            <span
              className={`font-mono text-[9px] uppercase tracking-widest select-none whitespace-nowrap ${
                isDark ? 'text-sky-300' : 'text-sky-700 font-semibold'
              }`}
              style={{ letterSpacing: '0.15em' }}
            >
              {label}
            </span>
          )}
        </div>
      </div>

      {/* Inner precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className="transition-all duration-100"
          style={{
            width: isHovering ? '6px' : isClicking ? '3px' : '5px',
            height: isHovering ? '6px' : isClicking ? '3px' : '5px',
            borderRadius: '50%',
            background: dotBg,
            opacity: isVisible ? 0.9 : 0,
            boxShadow: isHovering
              ? isDark ? '0 0 8px #38bdf8' : '0 0 8px #0284c7'
              : isDark ? '0 0 4px rgba(255,255,255,0.5)' : '0 0 3px rgba(15,23,42,0.4)',
          }}
        />
      </div>
    </>
  );
}
