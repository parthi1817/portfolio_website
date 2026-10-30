import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filters = ['ALL', 'BACKEND & GEO', 'AR / 3D & AI', 'IOT & EMBEDDED'];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'BACKEND & GEO') return p.category.includes('Backend');
    if (selectedFilter === 'AR / 3D & AI') return p.category.includes('AR');
    if (selectedFilter === 'IOT & EMBEDDED') return p.category.includes('IoT');
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-[#2a1213] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Section Header (Matches original .head) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#2a1213]">
          <div>
            <div className="flex items-center gap-2 text-[#ff3b3b] text-xs font-semibold tracking-[0.15em] uppercase mb-1.5 font-['JetBrains_Mono']">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Work</span>
            </div>
            <h2 className="font-['Anton'] font-normal text-3xl sm:text-4xl text-white tracking-[0.04em] uppercase">
              SELECTED PROJECTS
            </h2>
          </div>

          {/* Right action / view all */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/parthi1817"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#9a9490] hover:text-[#ff3b3b] tracking-[0.08em] uppercase transition-colors flex items-center gap-1.5 group"
            >
              <span>VIEW ALL ON GITHUB</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1.5 rounded-full text-xs font-['JetBrains_Mono'] tracking-wider transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-[#d4161c] text-white shadow-[0_0_15px_rgba(212,22,28,0.5)] font-semibold'
                  : 'bg-[#111111] text-[#9a9490] border border-[#222] hover:border-[#d4161c]/50 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 3-Column Projects Grid (Matches original .grid3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* SIH Hackathon & Team Note Banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-xl border border-[#2a1213] bg-gradient-to-r from-[#140506] via-[#100304] to-[#0a0a0a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#d4161c]/10 border border-[#d4161c]/40 flex items-center justify-center text-[#ff3b3b] font-['Anton'] text-xl flex-none">
              SIH
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Hackathon Tested & Team Validated
              </h4>
              <p className="text-xs text-[#9a9490] mt-0.5">
                Every project was built under strict time constraints — from 24-hour rapid prototyping to collegiate IoT hardware expositions.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/parthi1817"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none px-4 py-2 rounded-full border border-[#2a1213] bg-[#111] hover:border-[#d4161c] hover:bg-[#1a080a] text-xs text-[#f3f0ee] tracking-wider uppercase font-medium flex items-center gap-2 transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#ff3b3b]" />
            <span>parthi1817</span>
          </a>
        </div>
      </div>
    </section>
  );
}
