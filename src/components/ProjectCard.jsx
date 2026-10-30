import React, { useState, useRef } from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelect }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({
      x: -y * 12,
      y: x * 12,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="group relative bg-[#111111] border border-[#1f1f1f] hover:border-[#d4161c] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_35px_rgba(212,22,28,0.35)] transition-colors duration-300 flex flex-col justify-between"
    >
      {/* Top Banner / Graphic Box */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#2a0608] via-[#140405] to-[#0d0d0d] flex items-center justify-center border-b border-[#1f1f1f] group-hover:border-[#d4161c]/40 transition-colors">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-tech-grid opacity-25" />

        {/* Hackathon Badge */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-[#0a0a0a]/80 border border-[#d4161c]/40 text-[10px] font-medium text-[#ff3b3b] font-['JetBrains_Mono'] tracking-wider">
          {project.badge}
        </div>

        {/* Quick View Button on top right */}
        <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#0a0a0a]/80 border border-[#2a1213] group-hover:border-[#ff3b3b] flex items-center justify-center text-[#9a9490] group-hover:text-white transition-all transform group-hover:scale-110">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Center Typography (Matches original .pic) */}
        <h3 className="font-['Anton'] text-4xl sm:text-5xl text-[#7a1015] group-hover:text-[#ff3b3b] tracking-wider transition-all duration-500 transform group-hover:scale-105 select-none drop-shadow-[0_0_20px_rgba(212,22,28,0.3)]">
          {project.title}
        </h3>

        {/* Light flare reflection */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Index & Title Row */}
          <div className="flex items-baseline gap-3.5 mb-2">
            <span className="font-['Anton'] text-3xl sm:text-4xl text-[#ff3b3b] leading-none">
              {project.index}
            </span>
            <div>
              <h4 className="font-['Inter'] font-bold text-sm tracking-wide text-white group-hover:text-[#ff3b3b] transition-colors">
                {project.title}
              </h4>
              <p className="text-[11px] text-[#9a9490] font-medium tracking-wider uppercase font-['JetBrains_Mono']">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Description snippet */}
          <p className="text-[#9a9490] text-xs leading-relaxed line-clamp-3 mb-4">
            {project.desc}
          </p>
        </div>

        {/* Tech Stack Pills & Links */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 3).map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-[#181818] border border-[#2a2a2a] text-[10px] text-[#9a9490] font-['JetBrains_Mono']"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-1.5 py-0.5 rounded bg-[#181818] text-[10px] text-[#ff3b3b] font-['JetBrains_Mono']">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between text-xs">
            <span className="text-[#ff3b3b] font-medium text-[11px] tracking-wider uppercase flex items-center gap-1 group-hover:underline">
              <span>View Case Study</span>
              <span>→</span>
            </span>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#9a9490] hover:text-white p-1 rounded hover:bg-[#222] transition-colors"
              title="Open GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
