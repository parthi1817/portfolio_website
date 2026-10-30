import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import parthibanPhoto from '../assets/parthiban-hero.png';
import { MapPin, Sparkles, Terminal, ArrowDown, FolderCode } from 'lucide-react';

export default function Hero({ onOpenTerminal }) {
  const [typedRole, setTypedRole] = useState('');
  const [photoOffset, setPhotoOffset] = useState({ x: 0, y: 0 });
  const [statsValues, setStatsValues] = useState({ stat0: 0, stat1: 0, stat2: 0 });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef(null);

  // Typewriter effect for role
  useEffect(() => {
    const fullRole = portfolioData.profile.role;
    let index = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setTypedRole(fullRole.slice(0, index));
        if (index >= fullRole.length) {
          clearInterval(interval);
        }
      }, 35);
      return () => clearInterval(interval);
    }, 1200);

    return () => clearTimeout(startTimeout);
  }, []);

  // Animated Stats Counter
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
      const duration = 1400;
      const steps = 40;
      const stepTime = duration / steps;
      let currentStep = 0;

      const counterInterval = setInterval(() => {
        currentStep++;
        const progress = Math.min(1, currentStep / steps);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setStatsValues({
          stat0: Math.round(portfolioData.stats[0].value * easeOut),
          stat1: Math.round(portfolioData.stats[1].value * easeOut),
          stat2: Math.round(portfolioData.stats[2].value * easeOut),
        });

        if (currentStep >= steps) {
          clearInterval(counterInterval);
        }
      }, stepTime);

      return () => clearInterval(counterInterval);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  // Parallax on mouse move (subtle X + Y)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const xRatio = e.clientX / window.innerWidth - 0.5;
      const yRatio = e.clientY / window.innerHeight - 0.5;
      setPhotoOffset({ x: xRatio * 18, y: yRatio * 8 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const portfolioLetters = "PORTFOLIO".split("");

  return (
    <section
      ref={heroRef}
      className="relative min-h-[750px] lg:min-h-[820px] overflow-hidden pt-28 pb-0 border-b border-[#2a1213]"
      style={{
        background: 'radial-gradient(ellipse at 55% 30%, #5a0a0e 0%, #150304 45%, #0a0a0a 75%)',
      }}
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Ambient red glow behind the portrait area */}
      <div
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-[0]"
        style={{
          background: 'radial-gradient(circle, rgba(212, 22, 28, 0.18) 0%, rgba(212, 22, 28, 0.06) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Giant "PORTFOLIO" Typography — Behind the Subject */}
      <div
        className="absolute top-16 md:top-12 left-1/2 -translate-x-1/2 font-['Anton'] text-[clamp(80px,17vw,230px)] text-[#d4161c] leading-none tracking-[0.02em] whitespace-nowrap opacity-[0.85] select-none pointer-events-none flex z-[1] drop-shadow-[0_0_60px_rgba(212,22,28,0.35)]"
      >
        {portfolioLetters.map((char, i) => (
          <span
            key={i}
            className="animate-letter-rise"
            style={{
              animationDelay: `${1.1 + i * 0.08}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* ============== LARGE CENTER PORTRAIT (like reference) ============== */}
      <div
        className="absolute bottom-0 left-1/2 z-[2] pointer-events-none transition-transform duration-300 ease-out will-change-transform flex justify-center items-end"
        style={{
          transform: `translateX(calc(-50% + ${photoOffset.x}px)) translateY(${photoOffset.y}px)`,
        }}
      >
        <img
          src={parthibanPhoto}
          alt="Parthiban S - Backend Developer"
          onLoad={() => setImageLoaded(true)}
          className={`hero-portrait-mask w-auto max-w-[85vw] sm:max-w-[55vw] md:max-w-[45vw] lg:max-w-[38vw] object-bottom object-contain transition-opacity duration-[1.4s] ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            height: 'clamp(420px, 72vh, 700px)',
            filter: 'contrast(1.08) brightness(0.95) saturate(0.92) drop-shadow(0 0 50px rgba(212, 22, 28, 0.45))',
          }}
        />
      </div>

      {/* Bottom Gradient Overlay — seamless bleed into next section */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent z-[3] pointer-events-none" />

      {/* ============== HERO CONTENT ============== */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col justify-between min-h-[620px]">
        {/* Left Intro Block */}
        <div className="max-w-xl pt-8 sm:pt-14 pb-8">
          {/* Handwritten greeting */}
          <div className="font-['Caveat'] text-3xl sm:text-4xl text-[#f3f0ee] tracking-wide mb-1 drop-shadow">
            Hello, I'm
          </div>

          {/* Bold Name */}
          <h1 className="font-['Anton'] font-normal text-[clamp(56px,8.5vw,96px)] leading-[0.92] text-white tracking-tight uppercase">
            PARTHIBAN
            <br />
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,59,59,0.35)]">S</span>
          </h1>

          {/* Animated Typewriter Role */}
          <div className="text-[#ff3b3b] font-semibold tracking-[0.08em] text-[13px] sm:text-[15px] min-h-[26px] mt-4 mb-3 flex items-center gap-2 font-['JetBrains_Mono']">
            <span>{typedRole}</span>
            <span className="inline-block w-2 h-4 bg-[#ff3b3b] animate-pulse" />
          </div>

          {/* Bio Description */}
          <p className="text-[#9a9490] text-sm sm:text-base leading-relaxed max-w-md font-normal">
            {portfolioData.profile.bio}
          </p>

          {/* Location indicator */}
          <div className="flex items-center gap-2 mt-4 text-[#ff3b3b] text-xs sm:text-sm font-medium tracking-wide">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3b3b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4161c]" />
            </span>
            <span className="font-['JetBrains_Mono']">◎ {portfolioData.profile.location}</span>
          </div>

          {/* Interactive CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d4161c] hover:bg-[#ff3b3b] text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(212,22,28,0.5)] hover:shadow-[0_0_35px_rgba(255,59,59,0.8)] transition-all duration-200 active:scale-95"
            >
              <FolderCode className="w-4 h-4" />
              <span>Explore Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#2a1213] bg-[#111111]/80 hover:border-[#ff3b3b] text-[#f3f0ee] hover:text-[#ff3b3b] text-xs font-['JetBrains_Mono'] tracking-wider uppercase transition-all duration-200 active:scale-95"
            >
              <Terminal className="w-3.5 h-3.5 text-[#ff3b3b]" />
              <span>Launch Terminal</span>
            </button>
          </div>
        </div>

        {/* Floating Tagline (Desktop) — positioned to sit beside the portrait */}
        <div className="hidden lg:block absolute right-8 top-[200px] z-10 max-w-[170px] text-xs leading-relaxed text-[#9a9490] border-l-2 border-[#d4161c] pl-3 py-1 bg-[#0a0a0a]/60 backdrop-blur-sm rounded-r">
          <div className="text-[#ff3b3b] font-medium text-xs mb-0.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Mission</span>
          </div>
          {portfolioData.profile.tagline}
        </div>

        {/* Floating Stats Block — right side */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:right-6 lg:bottom-16 z-10 grid grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:w-[170px]">
          {portfolioData.stats.map((stat, i) => {
            const currentValue = i === 0 ? statsValues.stat0 : i === 1 ? statsValues.stat1 : statsValues.stat2;
            return (
              <div
                key={i}
                className="border-b border-[#2a1213] pb-2 sm:pb-3 bg-[#0a0a0a]/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-3 lg:p-0 rounded-lg lg:rounded-none border lg:border-0 lg:border-b"
              >
                <div className="flex items-baseline gap-0.5">
                  <span className="font-['Anton'] text-3xl sm:text-4xl text-[#ff3b3b] font-normal leading-none drop-shadow-[0_0_15px_rgba(212,22,28,0.4)]">
                    {currentValue}
                  </span>
                  <span className="font-['Anton'] text-xl sm:text-2xl text-[#ff3b3b]">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#9a9490] tracking-[0.06em] uppercase font-semibold mt-1">
                  {stat.label}
                </div>
                <div className="text-[9px] text-[#9a9490]/70 truncate hidden sm:block">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
