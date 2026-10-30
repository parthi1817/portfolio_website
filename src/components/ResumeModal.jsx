import React, { useEffect, useState } from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `PARTHIBAN S - BACKEND DEVELOPER & AI/ML STUDENT
Location: Bengaluru, India | Email: parthi1817@gmail.com | Phone: +91 63633 91534
GitHub: https://github.com/parthi1817 | LinkedIn: https://www.linkedin.com/in/parthiban-s-588086379/

EDUCATION:
• B.Tech in Artificial Intelligence & Machine Learning - 2nd Year (3rd Sem), PRESENT
• Pre-University (Class 12) - New Horizon PU College: 93% Distinction (KCET Rank 23000)
• ICSE (Class 10) - St. Vincent Pallotti School: 92% Distinction (Computer Applications / Java)

CORE SKILLS:
• Languages: Java (Core, OOP, Collections), SQL, Python (Basics), C/C++
• Backend & Systems: Database Management (DBMS), Schema Design, Algorithmic Thinking, Data Structures
• Tools: VS Code, Git/GitHub, Debugging & Profiling, Team Leadership

PROJECTS:
1. GEORE - Disaster Mapping & Real-time Heat-Map (Smart India Hackathon Qualifier)
   - Sub-12 second response SLA for public civilian status queries
   - Flood perimeter calculation and risk density heat-maps
   - Repo: https://github.com/parthi1817/Geore.git

2. WITH LOVE - AR 3D Heart Health Visualizer (24h Hackathon Finalist)
   - Real-time 3D physiological heart pulse modulated by user lab markers
   - Triage color coding (Green / Yellow / Red) for non-technical patients
   - Repo: https://github.com/ANTOJERRIN/Withlove101.git

3. IOT CANSAT - Atmospheric Altitude Satellite (IoT Expo Exhibit)
   - Sub-orbital containerized telemetry module measuring temp & barometric pressure
   - Altitude profile computation and serial telemetry stream
   - Repo: https://github.com/Jack26-bit/How-to-build-a-Cansat.git`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111111] border border-[#2a1213] rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-[0_0_60px_rgba(212,22,28,0.3)] my-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#222]">
          <div className="flex items-center gap-2">
            <span className="font-['Anton'] text-lg text-[#ff3b3b] tracking-wider">CURRICULUM VITAE</span>
            <span className="text-xs text-[#9a9490] font-['JetBrains_Mono']">· Parthiban S</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 rounded-lg border border-[#2a1213] bg-[#161616] hover:border-[#ff3b3b] text-xs text-[#9a9490] hover:text-white flex items-center gap-1.5 transition-colors"
              title="Copy plain text summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Download className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg border border-[#d4161c] bg-[#1a080a] text-[#ff3b3b] hover:bg-[#d4161c] hover:text-white text-xs flex items-center gap-1.5 transition-colors font-medium"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-[#222] text-[#9a9490] hover:text-white hover:bg-[#222]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="py-6 space-y-6 text-[#f3f0ee]">
          
          {/* Resume Header */}
          <div className="border-b border-[#222] pb-6">
            <h1 className="font-['Anton'] text-3xl sm:text-4xl tracking-wide uppercase text-white">
              PARTHIBAN S
            </h1>
            <p className="text-[#ff3b3b] font-semibold text-xs tracking-wider uppercase font-['JetBrains_Mono'] mt-1">
              Backend Developer | AI &amp; ML Engineering Student
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#9a9490]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ff3b3b]" />
                <span>Bengaluru, India</span>
              </span>
              <a href="mailto:parthi1817@gmail.com" className="flex items-center gap-1 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-[#ff3b3b]" />
                <span>parthi1817@gmail.com</span>
              </a>
              <a href="tel:+916363391534" className="flex items-center gap-1 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-[#ff3b3b]" />
                <span>+91 63633 91534</span>
              </a>
              <a href="https://github.com/parthi1817" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white">
                <GithubIcon className="w-3.5 h-3.5 text-[#ff3b3b]" />
                <span>github.com/parthi1817</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold text-[#ff3b3b] tracking-widest uppercase font-['JetBrains_Mono'] mb-2">
              EXECUTIVE SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-[#ccc] leading-relaxed">
              Aspiring backend software engineer currently pursuing B.Tech in Artificial Intelligence &amp; Machine Learning (3rd Semester). Passionate about architecting scalable server-side systems, relational database models, and high-performance algorithms. Java was my first programming language, igniting a disciplined approach to clean code, systematic debugging, and translating real-world constraints into reliable software products.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold text-[#ff3b3b] tracking-widest uppercase font-['JetBrains_Mono'] mb-3">
              EDUCATION
            </h3>
            <div className="space-y-3">
              <div className="border-l-2 border-[#d4161c] pl-3 py-0.5">
                <div className="flex justify-between items-baseline text-xs font-bold text-white">
                  <span>B.Tech in Artificial Intelligence &amp; Machine Learning</span>
                  <span className="text-[#ff3b3b] font-['JetBrains_Mono']">PRESENT · 3rd Sem (2nd Year)</span>
                </div>
                <div className="text-xs text-[#9a9490]">Engineering College, Bengaluru</div>
                <div className="text-[11px] text-[#888] mt-0.5">Focus: Data Structures &amp; Algorithms, Database Management Systems, Machine Learning Foundations.</div>
              </div>

              <div className="border-l-2 border-[#333] pl-3 py-0.5">
                <div className="flex justify-between items-baseline text-xs font-bold text-white">
                  <span>Pre-University Course (Class 12) - PCMC</span>
                  <span className="text-[#ff3b3b] font-['JetBrains_Mono']">93% · KCET Rank 23000</span>
                </div>
                <div className="text-xs text-[#9a9490]">New Horizon PU College, Bengaluru</div>
              </div>

              <div className="border-l-2 border-[#333] pl-3 py-0.5">
                <div className="flex justify-between items-baseline text-xs font-bold text-white">
                  <span>ICSE (Class 10)</span>
                  <span className="text-[#ff3b3b] font-['JetBrains_Mono']">92% Distinction</span>
                </div>
                <div className="text-xs text-[#9a9490]">St. Vincent Pallotti School, Bengaluru</div>
                <div className="text-[11px] text-[#888] mt-0.5">Distinction in Computer Applications (Core Java Programming).</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold text-[#ff3b3b] tracking-widest uppercase font-['JetBrains_Mono'] mb-2">
              TECHNICAL COMPETENCIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-[#161616] border border-[#222]">
                <span className="text-white font-semibold block mb-1">Languages:</span>
                <span className="text-[#aaa]">Java (Core, OOP, Multithreading, Collections), SQL, Python, C/C++</span>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#222]">
                <span className="text-white font-semibold block mb-1">Backend &amp; Systems:</span>
                <span className="text-[#aaa]">Database Management (DBMS), Schema Design, Algorithmic Thinking, Data Structures</span>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#222]">
                <span className="text-white font-semibold block mb-1">Developer Tools:</span>
                <span className="text-[#aaa]">VS Code, Git &amp; GitHub, Debugging, Hardware Serial Protocol</span>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#222]">
                <span className="text-white font-semibold block mb-1">Methodologies:</span>
                <span className="text-[#aaa]">Clean Code, Edge Case Testing, Team Leadership, Rapid Hackathon Prototyping</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-bold text-[#ff3b3b] tracking-widest uppercase font-['JetBrains_Mono'] mb-3">
              FEATURED ENGINEERING PROJECTS
            </h3>
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between items-baseline text-white font-bold">
                  <span>GEORE — Real-time Flood Mapping &amp; Public Safety Heat-Map</span>
                  <span className="text-[#ff3b3b] font-['JetBrains_Mono']">Smart India Hackathon</span>
                </div>
                <p className="text-[#aaa] mt-1">
                  Engineered disaster response tool enabling emergency officers to calculate flooded boundaries and thermal risk heat-maps. Features a public emergency query interface delivering verified zone status in under 12 seconds.
                </p>
                <div className="text-[#888] font-['JetBrains_Mono'] text-[11px] mt-1">
                  Tech: Java, SQL, Disaster Mapping APIs, Geolocation
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-white font-bold">
                  <span>WITH LOVE — AR 3D Cardiac Visualizer for Patient Literacy</span>
                  <span className="text-[#ff3b3b] font-['JetBrains_Mono']">24h AR Hackathon</span>
                </div>
                <p className="text-[#aaa] mt-1">
                  Created an accessibility-driven 3D biological heart that translates cryptic lab metrics into physiological color and beat frequencies (Green: Healthy, Yellow: Moderate, Red: Critical) in under 24 hours.
                </p>
                <div className="text-[#888] font-['JetBrains_Mono'] text-[11px] mt-1">
                  Tech: Augmented Reality, 3D Graphics, JavaScript, Diagnostic Rules Engine
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-white font-bold">
                  <span>IOT CANSAT — Atmospheric Telemetry &amp; Altitude Satellite</span>
                  <span className="text-[#ff3b3b] font-['JetBrains_Mono']">IoT Expo Exhibit</span>
                </div>
                <p className="text-[#aaa] mt-1">
                  Designed a soda-can form factor micro-satellite payload equipped with barometric and thermal sensors to log and transmit real-time telemetry descent profiles.
                </p>
                <div className="text-[#888] font-['JetBrains_Mono'] text-[11px] mt-1">
                  Tech: C/C++, Embedded Sensors, Microcontrollers, Serial Protocol
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
