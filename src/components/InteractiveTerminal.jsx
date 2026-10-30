import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "Parthiban S - Backend Developer CLI v2.4.0 (x86_64-pc-linux-gnu)\nType 'help' to view available system commands or 'curl /api/v1/profile' for raw JSON.",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    // Save to history
    setCommandHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    const parts = raw.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    const newEntries = [{ type: 'user', text: raw }];

    switch (command) {
      case 'help':
        newEntries.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help                    - Display this system command list
  whoami                  - Learn about Parthiban S
  skills                  - Output technical skill architecture
  projects                - Query built projects and repositories
  education               - View academic history and KCET rank
  stats                   - Display verified academic & project statistics
  quote                   - Display Parthiban's engineering philosophy
  curl <endpoint>         - Try: 'curl /api/v1/profile' or 'curl /api/v1/contact'
  contact                 - Display communication channels
  sudo hire               - Trigger hiring protocol & celebrate
  clear                   - Clear the terminal session
  exit                    - Close the CLI window`,
        });
        break;

      case 'whoami':
        newEntries.push({
          type: 'output',
          text: `NAME:     Parthiban S
ROLE:     Backend Developer | AI & ML Engineering Student
LOCATION: Bengaluru, India
STATUS:   Open to Internships & Placements
BIO:      ${portfolioData.profile.bio}`,
        });
        break;

      case 'skills':
        newEntries.push({
          type: 'output',
          text: `SKILL MATRIX:
├── Primary Languages
│   ├── Java (Core, OOP, Multithreading, Collections) [Primary Focus]
│   ├── SQL (Complex queries, Indexing, Relational models)
│   ├── Python (Data structures & scripting)
│   └── C / C++ (Embedded & IoT foundations)
├── Architecture & Systems
│   ├── Database Management (DBMS) & Schema Normalization
│   ├── Algorithmic Thinking & Computational Logic
│   └── REST API Contract Design
└── Development Toolchain
    ├── VS Code & Modern Dev Extensions
    ├── Git & Version Control
    ├── Debugging, Tracing & Profiling
    └── Technical Team Leadership`,
        });
        break;

      case 'projects':
        newEntries.push({
          type: 'output',
          text: `SELECTED REPOSITORIES:
[01] GEORE - Disaster Mapping & Real-time Heat-Map
     SIH Internal Qualifier | Sub-12s response latency
     Repo: https://github.com/parthi1817/Geore.git

[02] WITH LOVE - AR 3D Heart Health Visualizer
     24h AR Hackathon | Biometric Lab Report Visualizer
     Repo: https://github.com/ANTOJERRIN/Withlove101.git

[03] IOT CANSAT - Atmospheric Altitude Satellite
     IoT Expo | Microcontroller sensor fusion & telemetry
     Repo: https://github.com/Jack26-bit/How-to-build-a-Cansat.git`,
        });
        break;

      case 'education':
        newEntries.push({
          type: 'output',
          text: `ACADEMIC DOSSIER:
1. B.Tech in Artificial Intelligence & Machine Learning
   - Semester: 3rd Sem (2nd Year) [CURRENT]
   - Specialization: Backend Systems, Algorithms, Machine Learning

2. Pre-University (Class 12) - New Horizon PU College
   - Score: 93% Distinction
   - KCET Rank: 23,000

3. ICSE (Class 10) - St. Vincent Pallotti School
   - Score: 92% Distinction (Distinction in Computer Applications / Java)`,
        });
        break;

      case 'stats':
        newEntries.push({
          type: 'output',
          text: `STATISTICS:
• Class 10 (ICSE):    92%
• Class 12 (PU Board): 93% (KCET Rank 23k)
• Projects Built:     3+ Verified Repositories
• First Language:     Java
• Coffee Consumption: Steady`,
        });
        break;

      case 'quote':
        newEntries.push({
          type: 'output',
          text: `“First make it work, then make it right, then make it fast.”
  — Parthiban S`,
        });
        break;

      case 'curl':
        if (args.includes('/api/v1/profile')) {
          newEntries.push({
            type: 'json',
            text: JSON.stringify(
              {
                developer: "Parthiban S",
                title: "Backend Developer",
                education: "B.Tech AI & ML",
                location: "Bengaluru, India",
                openForHiring: true,
                preferredRoles: ["Backend Intern", "Software Engineering Intern"],
                coreTech: ["Java", "SQL", "DBMS", "Algorithms"],
              },
              null,
              2
            ),
          });
        } else if (args.includes('/api/v1/contact')) {
          newEntries.push({
            type: 'json',
            text: JSON.stringify(
              {
                email: "parthi1817@gmail.com",
                phone: "+91 63633 91534",
                github: "https://github.com/parthi1817",
                linkedin: "https://www.linkedin.com/in/parthiban-s-588086379",
              },
              null,
              2
            ),
          });
        } else {
          newEntries.push({
            type: 'error',
            text: `curl: (6) Could not resolve host. Try: 'curl /api/v1/profile' or 'curl /api/v1/contact'`,
          });
        }
        break;

      case 'sudo':
        if (args === 'hire') {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#ff3b3b', '#d4161c', '#ffffff'],
          });
          newEntries.push({
            type: 'success',
            text: `[AUTH GRANTED]: You have excellent taste in backend talent!
Preparing email dispatch to parthi1817@gmail.com...
Let's build something remarkable together!`,
          });
          setTimeout(() => {
            window.location.href = "mailto:parthi1817@gmail.com?subject=Opportunity%20at%20our%20company&body=Hi%20Parthiban,%20we%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect!";
          }, 1500);
        } else {
          newEntries.push({
            type: 'error',
            text: `sudo: ${args}: command not recognized. Did you mean 'sudo hire'?`,
          });
        }
        break;

      case 'contact':
        newEntries.push({
          type: 'output',
          text: `CONTACT PARTHIBAN:
  Email:    parthi1817@gmail.com
  Phone:    +91 63633 91534
  LinkedIn: https://www.linkedin.com/in/parthiban-s-588086379/
  GitHub:   https://github.com/parthi1817`,
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        onClose();
        return;

      default:
        newEntries.push({
          type: 'error',
          text: `bash: ${command}: command not found. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex] || '');
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`bg-[#0d0d0d] border border-[#d4161c]/70 rounded-xl shadow-[0_0_60px_rgba(212,22,28,0.35)] flex flex-col overflow-hidden transition-all duration-200 font-['JetBrains_Mono'] ${
          isMaximized ? 'w-full h-full' : 'w-full max-w-3xl h-[540px]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="bg-[#161616] border-b border-[#2a1213] px-4 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <div className="ml-3 text-xs text-[#9a9490] flex items-center gap-1.5 font-medium">
              <TerminalIcon className="w-3.5 h-3.5 text-[#ff3b3b]" />
              <span>parthiban@bengaluru: ~ (bash)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-[#9a9490] hover:text-white hover:bg-[#222]"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#9a9490] hover:text-white hover:bg-[#222]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Toolbar */}
        <div className="bg-[#111] px-4 py-1.5 border-b border-[#222] flex items-center gap-2 overflow-x-auto text-[11px] text-[#9a9490] select-none">
          <span className="text-[#ff3b3b] font-semibold">Quick:</span>
          {['help', 'whoami', 'skills', 'projects', 'curl /api/v1/profile', 'sudo hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-[#1c1c1c] hover:bg-[#2a1012] hover:text-[#ff3b3b] transition-colors whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-4 overflow-y-auto text-xs leading-relaxed space-y-2 text-[#f3f0ee]"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => {
            if (item.type === 'system') {
              return (
                <div key={idx} className="text-[#9a9490] whitespace-pre-wrap border-b border-[#222] pb-2 mb-2">
                  {item.text}
                </div>
              );
            }
            if (item.type === 'user') {
              return (
                <div key={idx} className="flex items-center gap-2 text-white font-semibold">
                  <span className="text-[#ff3b3b]">parthiban@bengaluru:~$</span>
                  <span>{item.text}</span>
                </div>
              );
            }
            if (item.type === 'error') {
              return (
                <div key={idx} className="text-red-400 whitespace-pre-wrap">
                  {item.text}
                </div>
              );
            }
            if (item.type === 'success') {
              return (
                <div key={idx} className="text-green-400 whitespace-pre-wrap font-semibold">
                  {item.text}
                </div>
              );
            }
            if (item.type === 'json') {
              return (
                <pre key={idx} className="text-amber-300 font-['JetBrains_Mono'] whitespace-pre overflow-x-auto bg-[#050505] p-2.5 rounded border border-[#222]">
                  {item.text}
                </pre>
              );
            }
            return (
              <div key={idx} className="text-[#ccc] whitespace-pre-wrap">
                {item.text}
              </div>
            );
          })}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[#ff3b3b] font-semibold whitespace-nowrap">parthiban@bengaluru:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white focus:outline-none font-['JetBrains_Mono']"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}

