import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Code2, GitCommit, Sparkles, CheckCircle2 } from 'lucide-react';

export default function EducationSkills({ onSelectSkill }) {
  const [activeStep, setActiveStep] = useState(null);
  const [timelineProgress, setTimelineProgress] = useState(0.4);
  const timelineRef = useRef(null);

  // Dynamic progress line calculation based on viewport scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (windowHeight * 0.75 - rect.top) / rect.height));
      setTimelineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="border-b border-[#2a1213]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* 3-Column Grid matching original .cols (1.1fr 1.1fr 0.8fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr_0.8fr] divide-y lg:divide-y-0 lg:divide-x divide-[#2a1213]">
          
          {/* ================= COLUMN 1: EDUCATION & SKILLS ================= */}
          <div className="py-10 lg:py-12 lg:pr-8">
            <div className="flex items-center gap-2 text-[#ff3b3b] text-xs font-semibold tracking-[0.15em] uppercase mb-1.5 font-['JetBrains_Mono']">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Foundation</span>
            </div>
            <h2 className="font-['Anton'] font-normal text-2xl sm:text-3xl text-white tracking-[0.04em] uppercase mb-6">
              Education &amp; Skills
            </h2>

            {/* Education Sub-section */}
            <div className="mb-8">
              <div className="text-[#ff3b3b] text-xs font-bold tracking-[0.12em] uppercase mb-3 font-['JetBrains_Mono'] flex items-center gap-2">
                <span>EDUCATION</span>
                <span className="h-px bg-[#2a1213] flex-1" />
              </div>

              <div className="space-y-4">
                {portfolioData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-[#1a1a1a] hover:border-[#2a1213] bg-[#0d0d0d]/50 hover:bg-[#120809] transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {edu.degree}
                        </div>
                        <div className="text-xs text-[#9a9490] mt-0.5 font-medium">
                          {edu.institution}
                        </div>
                      </div>
                      {edu.isCurrent ? (
                        <span className="flex-none px-2 py-0.5 rounded bg-[#2a080a] border border-[#d4161c] text-[#ff3b3b] text-[10px] font-bold tracking-wider font-['JetBrains_Mono'] animate-pulse">
                          PRESENT
                        </span>
                      ) : (
                        <span className="flex-none text-[#ff3b3b] text-xs font-semibold font-['JetBrains_Mono']">
                          {edu.tag.split('·')[0]}
                        </span>
                      )}
                    </div>
                    {edu.details && (
                      <p className="text-[11px] text-[#9a9490]/80 mt-1.5 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Sub-section (Matches original .pills) */}
            <div>
              <div className="text-[#ff3b3b] text-xs font-bold tracking-[0.12em] uppercase mb-3 font-['JetBrains_Mono'] flex items-center gap-2">
                <span>SKILLS &amp; PROFICIENCIES</span>
                <span className="h-px bg-[#2a1213] flex-1" />
              </div>

              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.primary.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group relative cursor-default"
                  >
                    <span
                      className={`inline-block border rounded-md px-3 py-1.5 text-xs font-medium tracking-[0.06em] uppercase transition-all duration-200 select-none ${
                        skill.highlight
                          ? 'border-[#ff3b3b]/60 bg-[#1e0709] text-white shadow-[0_0_12px_rgba(212,22,28,0.25)] hover:border-[#ff3b3b] hover:shadow-[0_0_18px_rgba(255,59,59,0.5)] hover:-translate-y-0.5'
                          : 'border-[#333] bg-[#111] text-[#d8d4cf] hover:border-[#d4161c] hover:shadow-[0_0_14px_rgba(212,22,28,0.4)] hover:-translate-y-0.5 hover:text-white'
                      }`}
                    >
                      {skill.name}
                    </span>

                    {/* Micro tooltip note */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block z-20 px-2 py-1 rounded bg-[#161616] border border-[#2a1213] text-[10px] text-[#ff3b3b] whitespace-nowrap font-['JetBrains_Mono'] shadow-lg pointer-events-none">
                      {skill.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional skill tags */}
              <div className="mt-4 pt-3 border-t border-[#1a1a1a] flex flex-wrap items-center gap-2 text-[11px] text-[#9a9490] font-['JetBrains_Mono']">
                <span className="text-[#ff3b3b]">Also Exploring:</span>
                <span className="bg-[#141414] px-2 py-0.5 rounded border border-[#222]">Data Structures</span>
                <span className="bg-[#141414] px-2 py-0.5 rounded border border-[#222]">OOP Design</span>
                <span className="bg-[#141414] px-2 py-0.5 rounded border border-[#222]">REST APIs</span>
                <span className="bg-[#141414] px-2 py-0.5 rounded border border-[#222]">Git</span>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: WORK PROCESS ================= */}
          <div className="py-10 lg:py-12 lg:px-8">
            <div className="flex items-center gap-2 text-[#ff3b3b] text-xs font-semibold tracking-[0.15em] uppercase mb-1.5 font-['JetBrains_Mono']">
              <Code2 className="w-3.5 h-3.5" />
              <span>Engineering Lifecycle</span>
            </div>
            <h2 className="font-['Anton'] font-normal text-2xl sm:text-3xl text-white tracking-[0.04em] uppercase mb-6">
              Work Process
            </h2>

            {/* Interactive Timeline matching original .tl & .st */}
            <div ref={timelineRef} className="relative mt-6 space-y-6">
              {/* Connecting animated crimson line */}
              <div
                className="absolute left-[21px] top-[14px] bottom-[14px] w-[2px] bg-[#2a1213] pointer-events-none"
              >
                <div
                  className="w-full bg-[#ff3b3b] transition-all duration-300 origin-top shadow-[0_0_8px_#ff3b3b]"
                  style={{
                    height: `${Math.max(10, Math.min(100, timelineProgress * 100))}%`,
                  }}
                />
              </div>

              {portfolioData.process.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(isSelected ? null : idx)}
                    className="relative flex items-start gap-4 group cursor-pointer"
                  >
                    {/* Circle Number Icon (.ic) */}
                    <div
                      className={`relative z-10 flex-none w-11 h-11 rounded-full border flex items-center justify-center font-['Anton'] text-sm transition-all duration-200 select-none ${
                        isSelected
                          ? 'border-[#ff3b3b] bg-[#d4161c] text-white shadow-[0_0_20px_#ff3b3b] scale-105'
                          : 'border-[#d4161c] bg-[#0a0a0a] text-[#ff3b3b] group-hover:border-[#ff3b3b] group-hover:shadow-[0_0_15px_rgba(212,22,28,0.4)] group-hover:scale-105'
                      }`}
                    >
                      {step.step}
                    </div>

                    {/* Step Title & Summary (.st b & p) */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <b className="text-xs sm:text-sm font-bold tracking-[0.08em] text-[#ff3b3b] uppercase group-hover:text-white transition-colors">
                          {step.title}
                        </b>
                        <span className="text-[10px] text-[#9a9490] font-['JetBrains_Mono']">
                          {isSelected ? 'Collapse' : 'Details'}
                        </span>
                      </div>
                      <p className="text-xs text-[#9a9490] mt-0.5 leading-relaxed">
                        {step.summary}
                      </p>

                      {/* Expandable deeper methodology */}
                      {isSelected && (
                        <div className="mt-2.5 p-3 rounded-lg bg-[#14080a] border border-[#d4161c]/40 text-xs text-[#d8d4cf] leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200 font-['Inter']">
                          {step.details}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= COLUMN 3: PHILOSOPHY QUOTE ================= */}
          <div
            id="quote"
            className="py-10 lg:py-12 lg:pl-8 p-6 lg:p-8 flex flex-col justify-between border-0 rounded-none relative overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, #8b0f15 0%, #4a0508 55%, #2a0305 100%)',
            }}
          >
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff3b3b]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top quote content matching original .quote */}
            <div className="relative z-10">
              <span className="font-['Anton'] text-6xl sm:text-7xl text-white/40 leading-none select-none block -mb-6">
                “
              </span>
              <blockquote className="font-['Anton'] text-2xl sm:text-3xl font-normal text-white leading-snug tracking-wide mt-2">
                First make it work, then make it right, then make it fast.
              </blockquote>
              <p className="text-xs text-[#f3b9b9] mt-3 leading-relaxed">
                Disciplined problem solving: establish functional correctness before premature optimization.
              </p>
            </div>

            {/* Signature & Callout matching original .sig & small */}
            <div className="relative z-10 mt-10 pt-6 border-t border-white/20">
              <div className="font-['Caveat'] text-4xl sm:text-5xl text-white tracking-wide">
                Parthiban
              </div>
              <div className="text-[11px] font-bold tracking-[0.1em] text-[#f3b9b9] uppercase mt-1 font-['JetBrains_Mono']">
                LET’S BUILD SOMETHING GREAT TOGETHER.
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#8b0f15] hover:bg-[#f3f0ee] font-bold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95"
                >
                  <span>Connect Directly</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

