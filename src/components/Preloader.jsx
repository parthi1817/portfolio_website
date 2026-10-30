import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState('active'); // active -> sliding -> done

  useEffect(() => {
    // Stage 1: Display title
    const t1 = setTimeout(() => {
      setStage('sliding');
    }, 750);

    // Stage 2: Slide up and unmount
    const t2 = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#000000] flex flex-col items-center justify-center transition-transform duration-[850ms] ease-[cubic-bezier(0.7,0,0.2,1)] ${
        stage === 'sliding' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="relative overflow-hidden text-center select-none px-6">
        <h1 className="font-['Anton'] text-4xl sm:text-6xl md:text-7xl tracking-[0.12em] text-[#ff3b3b] drop-shadow-[0_0_35px_rgba(212,22,28,0.7)] animate-pulse">
          PARTHIBAN S
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4 text-xs tracking-[0.25em] text-[#9a9490] uppercase font-['JetBrains_Mono']">
          <span className="w-2 h-2 rounded-full bg-[#d4161c] animate-ping" />
          <span>Backend Developer & AI Engineer</span>
        </div>
      </div>

      {/* Crimson accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4161c] to-transparent" />
    </div>
  );
}

