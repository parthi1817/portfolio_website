import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Mail, Menu, X, ArrowUpRight, Check, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ onOpenResume, onOpenTerminal }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('parthi1817@gmail.com');
    setCopiedEmail(true);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.1, x: 0.8 },
      colors: ['#ff3b3b', '#d4161c', '#ffffff'],
    });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Education & Skills', href: '#skills' },
    { label: 'Work Process', href: '#process' },
    { label: 'Philosophy', href: '#quote' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#d4161c] via-[#ff3b3b] to-[#ff6b6b] z-[60] shadow-[0_0_12px_#ff3b3b] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a1213] py-3'
            : 'bg-transparent border-b border-[#2a1213]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#"
            className="group flex items-center gap-3 text-left transition-transform duration-200 active:scale-95"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#d4161c] to-[#450709] border border-[#ff3b3b]/30 flex items-center justify-center font-['Anton'] text-lg text-white shadow-[0_0_15px_rgba(212,22,28,0.35)] group-hover:shadow-[0_0_22px_rgba(212,22,28,0.65)] transition-all">
              P
            </div>
            <div>
              <div className="font-['Anton'] text-base tracking-[0.08em] text-[#ff3b3b] flex items-center gap-2 group-hover:text-white transition-colors">
                <span>PARTHIBAN S</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b3b] animate-ping hidden sm:inline-block" />
              </div>
              <div className="text-[11px] text-[#9a9490] tracking-[0.06em] uppercase font-medium">
                Backend Developer
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[12px] tracking-[0.08em] uppercase text-[#9a9490]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff3b3b] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Interactive Terminal Toggle */}
            <button
              onClick={onOpenTerminal}
              title="Open Interactive Terminal CLI"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2a1213] bg-[#111] hover:border-[#d4161c] hover:bg-[#1f0a0c] text-[11px] text-[#f3f0ee] tracking-wider transition-all duration-200"
            >
              <Terminal className="w-3.5 h-3.5 text-[#ff3b3b]" />
              <span className="font-['JetBrains_Mono']">CLI</span>
            </button>

            {/* Quick Resume Button */}
            <button
              onClick={onOpenResume}
              title="View Resume / CV"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2a1213] bg-[#111] hover:border-[#ff3b3b] text-[11px] text-[#9a9490] hover:text-white tracking-wider transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-[#ff3b3b]" />
              <span>RESUME</span>
            </button>

            {/* Main CTA: OPEN TO INTERNSHIPS & PLACEMENTS → */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#d4161c] text-[#ff3b3b] text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] uppercase hover:bg-[#d4161c] hover:text-white hover:shadow-[0_0_24px_rgba(212,22,28,0.6)] transition-all duration-200 active:scale-95"
            >
              <span>OPEN TO INTERNSHIPS & PLACEMENTS</span>
              <span className="hidden xs:inline">→</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#2a1213] text-[#f3f0ee] hover:border-[#d4161c] hover:text-[#ff3b3b] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 bg-[#0e0e0e] border-b border-[#2a1213] text-sm animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-[#1a080a] text-[#f3f0ee] hover:text-[#ff3b3b] font-medium tracking-wide flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#9a9490]" />
                </a>
              ))}

              <div className="h-px bg-[#2a1213] my-2" />

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="flex items-center justify-center gap-2 py-2 rounded-lg border border-[#2a1213] bg-[#141414] text-xs text-[#ff3b3b] font-['JetBrains_Mono']"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Launch CLI</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 py-2 rounded-lg border border-[#2a1213] bg-[#141414] text-xs text-white"
                >
                  <FileText className="w-4 h-4 text-[#ff3b3b]" />
                  <span>View Resume</span>
                </button>
              </div>

              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#d4161c]/50 bg-[#1f0a0c] text-xs text-[#ff3b3b] font-medium tracking-wider uppercase mt-1"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">parthi1817@gmail.com copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Copy Email: parthi1817@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

