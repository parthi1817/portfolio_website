import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function FooterContact() {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ff3b3b', '#d4161c', '#ffffff'],
    });
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 sm:py-24 border-t border-[#2a1213] bg-[#070707] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Main 3-Column Footer matching original .foot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-center pb-16">
          
          {/* Column 1: Call to Action */}
          <div>
            <div className="flex items-center gap-2 text-[#ff3b3b] text-xs font-semibold tracking-[0.15em] uppercase mb-2 font-['JetBrains_Mono']">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Hire</span>
            </div>
            <h2 className="font-['Anton'] font-normal text-3xl sm:text-4xl text-white tracking-[0.04em] uppercase leading-tight mb-4">
              Let’s Work Together <span className="text-[#ff3b3b]">✦</span>
            </h2>
            <p className="text-sm text-[#9a9490] leading-relaxed mb-6 font-normal">
              {portfolioData.profile.ctaPitch}
            </p>

            <a
              href="mailto:parthi1817@gmail.com?subject=Opportunity%20Discussion%20with%20Parthiban"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#d4161c] text-[#ff3b3b] hover:bg-[#d4161c] hover:text-white text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-200 shadow-[0_0_20px_rgba(212,22,28,0.25)] hover:shadow-[0_0_30px_rgba(212,22,28,0.6)] active:scale-95"
            >
              <span>OPEN TO OPPORTUNITIES</span>
              <span>→</span>
            </a>
          </div>

          {/* Column 2: Direct Contacts matching original .ct */}
          <div className="space-y-3.5">
            {/* Email */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#2a1213] transition-colors group">
              <a
                href="mailto:parthi1817@gmail.com"
                className="flex items-center gap-3.5 text-xs sm:text-sm text-[#f3f0ee] group-hover:text-white break-all flex-1"
              >
                <i className="flex-none w-9 h-9 rounded-full border border-[#d4161c] flex items-center justify-center not-italic text-[#ff3b3b] font-bold text-xs bg-[#1a080a]">
                  @
                </i>
                <span className="font-['JetBrains_Mono']">parthi1817@gmail.com</span>
              </a>
              <button
                onClick={() => handleCopy('parthi1817@gmail.com', 'email')}
                title="Copy email to clipboard"
                className="p-2 text-[#9a9490] hover:text-[#ff3b3b] transition-colors"
              >
                {copiedItem === 'email' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#2a1213] transition-colors group">
              <a
                href="tel:+916363391534"
                className="flex items-center gap-3.5 text-xs sm:text-sm text-[#f3f0ee] group-hover:text-white flex-1"
              >
                <i className="flex-none w-9 h-9 rounded-full border border-[#d4161c] flex items-center justify-center not-italic text-[#ff3b3b] text-xs bg-[#1a080a]">
                  ☎
                </i>
                <span className="font-['JetBrains_Mono']">+91 63633 91534</span>
              </a>
              <button
                onClick={() => handleCopy('+91 63633 91534', 'phone')}
                title="Copy phone to clipboard"
                className="p-2 text-[#9a9490] hover:text-[#ff3b3b] transition-colors"
              >
                {copiedItem === 'phone' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#2a1213] transition-colors group">
              <a
                href="https://www.linkedin.com/in/parthiban-s-588086379/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-xs sm:text-sm text-[#f3f0ee] group-hover:text-white flex-1"
              >
                <i className="flex-none w-9 h-9 rounded-full border border-[#d4161c] flex items-center justify-center not-italic text-[#ff3b3b] text-xs bg-[#1a080a]">
                  in
                </i>
                <span className="font-['JetBrains_Mono'] truncate">linkedin.com/in/parthiban-s-588086379</span>
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#2a1213] transition-colors group">
              <a
                href="https://github.com/parthi1817"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-xs sm:text-sm text-[#f3f0ee] group-hover:text-white flex-1"
              >
                <i className="flex-none w-9 h-9 rounded-full border border-[#d4161c] flex items-center justify-center not-italic text-[#ff3b3b] text-xs bg-[#1a080a]">
                  GH
                </i>
                <span className="font-['JetBrains_Mono'] truncate">github.com/parthi1817</span>
              </a>
            </div>
          </div>

          {/* Column 3: Stylized 3D Laptop Device matching original .lap */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="w-full max-w-[280px] h-[180px] rounded-t-2xl rounded-b-md bg-gradient-to-br from-[#1c1c1c] via-[#101010] to-[#050505] border-[6px] border-[#252525] flex flex-col items-center justify-center relative shadow-[0_20px_60px_rgba(212,22,28,0.28)] hover:shadow-[0_25px_70px_rgba(212,22,28,0.5)] transition-all duration-300 group hover:-translate-y-1.5 cursor-pointer overflow-hidden"
              onClick={scrollToTop}
              title="Click to scroll to top"
            >
              {/* Laptop Camera notch */}
              <div className="absolute top-1.5 w-1.5 h-1.5 rounded-full bg-[#333]" />

              {/* Glowing Screen Content */}
              <div className="font-['Anton'] text-2xl text-[#ff3b3b] tracking-wider text-center leading-tight drop-shadow-[0_0_20px_rgba(212,22,28,0.7)] group-hover:scale-105 transition-transform duration-300">
                PARTHIBAN S
                <br />
                <span className="text-white text-xl">PORTFOLIO</span>
              </div>

              {/* Terminal scanline subtle animation */}
              <div className="absolute bottom-2 text-[9px] font-['JetBrains_Mono'] text-[#9a9490] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                <span>BENGALURU, IN</span>
              </div>

              {/* Light sweep glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Laptop Base Stand / Keyboard tray */}
            <div className="w-[310px] h-[8px] rounded-b-xl bg-[#2a2a2a] border-t border-[#3a3a3a] shadow-md" />
            <div className="w-[80px] h-[3px] rounded-b-sm bg-[#1a1a1a] mx-auto" />
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9a9490]">
          <div>
            © {new Date().getFullYear()} Parthiban S. All rights reserved.
          </div>
          <div className="font-['JetBrains_Mono'] text-[11px]">
            Engineered with React + Tailwind CSS · Bengaluru, India
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#ff3b3b] hover:text-white transition-colors uppercase tracking-wider text-[11px] font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
