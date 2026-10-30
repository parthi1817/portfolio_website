import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import EducationSkills from './components/EducationSkills';
import FooterContact from './components/FooterContact';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import InteractiveTerminal from './components/InteractiveTerminal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f3f0ee] relative selection:bg-[#d4161c] selection:text-white">
      {/* Preloader on initial mount */}
      <Preloader />

      {/* Custom Red Glow Cursor for Desktop */}
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* Selected Projects Showcase */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Education, Skills, Work Process & Philosophy */}
        <EducationSkills />
      </main>

      {/* Footer & Contact */}
      <FooterContact />

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Terminal CLI */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
