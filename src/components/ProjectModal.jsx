import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Activity, Terminal, ShieldAlert, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, demo
  const [demoArea, setDemoArea] = useState('Indiranagar');
  const [demoQuerying, setDemoQuerying] = useState(false);
  const [demoResult, setDemoResult] = useState(null);

  // Heart BPM simulator for "WITH LOVE"
  const [heartBpm, setHeartBpm] = useState(76);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleSimulateGeore = (e) => {
    e.preventDefault();
    setDemoQuerying(true);
    setDemoResult(null);
    setTimeout(() => {
      setDemoQuerying(false);
      setDemoResult({
        zone: demoArea,
        waterLevel: '1.8m (Critical)',
        riskLevel: 'HIGH ALERT',
        evacuationRoute: 'Via Ring Road Flyover - Elevated Lane 2',
        latency: '8.4 seconds',
      });
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111111] border border-[#d4161c] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_0_60px_rgba(212,22,28,0.4)] my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-[#2a1213] bg-[#1a080a] text-[#9a9490] hover:text-white hover:border-[#ff3b3b] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Badges */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-['Anton'] text-2xl text-[#ff3b3b]">
            {project.index}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#1e0a0d] border border-[#d4161c]/40 text-[11px] font-['JetBrains_Mono'] text-[#ff3b3b]">
            {project.badge}
          </span>
          <span className="text-xs text-[#9a9490] font-['JetBrains_Mono']">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-['Anton'] font-normal text-3xl sm:text-4xl text-white tracking-wide uppercase">
          {project.title}
        </h3>
        <p className="text-xs text-[#ff3b3b] font-semibold tracking-widest uppercase font-['JetBrains_Mono'] mt-1 mb-4">
          {project.subtitle}
        </p>

        {/* Modal Tabs */}
        <div className="flex border-b border-[#222] mb-5">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 text-xs font-semibold tracking-wider uppercase transition-colors relative ${
              activeTab === 'overview' ? 'text-white' : 'text-[#9a9490] hover:text-white'
            }`}
          >
            Overview & Architecture
            {activeTab === 'overview' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4161c]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`pb-2.5 px-3 text-xs font-semibold tracking-wider uppercase transition-colors relative flex items-center gap-1.5 ${
              activeTab === 'demo' ? 'text-[#ff3b3b]' : 'text-[#9a9490] hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
            {activeTab === 'demo' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4161c]" />
            )}
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            {/* Description */}
            <p className="text-[#d8d4cf] text-sm leading-relaxed">
              {project.extendedDesc || project.desc}
            </p>

            {/* Engineering Highlights */}
            {project.features && (
              <div className="mt-4 pt-4 border-t border-[#1f1f1f]">
                <h5 className="text-xs font-semibold text-[#ff3b3b] tracking-wider uppercase mb-2 font-['JetBrains_Mono']">
                  Core Engineering Highlights
                </h5>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#9a9490]">
                      <span className="text-[#ff3b3b] mt-0.5">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mt-4 pt-4 border-t border-[#1f1f1f]">
              <h5 className="text-xs font-semibold text-[#ff3b3b] tracking-wider uppercase mb-2 font-['JetBrains_Mono']">
                Technology Stack & Methods
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#181818] border border-[#2b2b2b] text-xs text-[#f3f0ee] font-['JetBrains_Mono']"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Demo Simulator */}
        {activeTab === 'demo' && (
          <div className="space-y-4 animate-in fade-in duration-150 bg-[#0c0c0c] border border-[#222] p-4 rounded-xl">
            {project.id === 'geore' && (
              <div>
                <div className="flex items-center gap-2 text-xs text-[#ff3b3b] font-['JetBrains_Mono'] mb-3">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Sub-12 Second Civilian Flood Query Protocol</span>
                </div>
                <form onSubmit={handleSimulateGeore} className="flex gap-2">
                  <input
                    type="text"
                    value={demoArea}
                    onChange={(e) => setDemoArea(e.target.value)}
                    placeholder="Enter locality / coordinates..."
                    className="flex-1 bg-[#161616] border border-[#333] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4161c]"
                  />
                  <button
                    type="submit"
                    disabled={demoQuerying}
                    className="px-4 py-2 rounded-lg bg-[#d4161c] hover:bg-[#ff3b3b] text-white text-xs font-medium font-['JetBrains_Mono'] disabled:opacity-50"
                  >
                    {demoQuerying ? 'Computing...' : 'Query Zone'}
                  </button>
                </form>

                {demoResult && (
                  <div className="mt-4 p-3 rounded-lg bg-[#1a080a] border border-[#d4161c]/40 font-['JetBrains_Mono'] text-xs space-y-1.5 animate-in fade-in duration-200">
                    <div className="text-white font-bold flex justify-between">
                      <span>LOCATION: {demoResult.zone.toUpperCase()}</span>
                      <span className="text-[#ff3b3b]">{demoResult.riskLevel}</span>
                    </div>
                    <div className="text-[#9a9490]">Water Depth: {demoResult.waterLevel}</div>
                    <div className="text-green-400">Safe Route: {demoResult.evacuationRoute}</div>
                    <div className="text-[10px] text-[#ff3b3b]/70 pt-1 border-t border-[#331113]">
                      Computed & verified in {demoResult.latency} (SLA &lt; 12.0s passed)
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.id === 'with-love' && (
              <div>
                <div className="flex items-center gap-2 text-xs text-[#ff3b3b] font-['JetBrains_Mono'] mb-3">
                  <Activity className="w-4 h-4" />
                  <span>3D Physiological Cardiac Rhythm Simulation</span>
                </div>

                <div className="text-center py-4">
                  <div
                    className="inline-block text-5xl font-['Anton'] transition-colors duration-300"
                    style={{
                      color: heartBpm > 105 ? '#ff3b3b' : heartBpm > 85 ? '#eab308' : '#22c55e',
                      textShadow: `0 0 25px ${
                        heartBpm > 105 ? '#ff3b3b' : heartBpm > 85 ? '#eab308' : '#22c55e'
                      }`,
                    }}
                  >
                    {heartBpm} <span className="text-xl">BPM</span>
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold mt-1">
                    {heartBpm > 105 ? (
                      <span className="text-red-400">Status: Critical Tachycardia</span>
                    ) : heartBpm > 85 ? (
                      <span className="text-yellow-400">Status: Moderately Elevated</span>
                    ) : (
                      <span className="text-green-400">Status: Optimal Resting Rhythm</span>
                    )}
                  </div>
                </div>

                <label className="block text-[11px] text-[#9a9490] font-['JetBrains_Mono'] mb-1">
                  Simulate Patient Lab Biomarker Response:
                </label>
                <input
                  type="range"
                  min="55"
                  max="145"
                  value={heartBpm}
                  onChange={(e) => setHeartBpm(Number(e.target.value))}
                  className="w-full accent-[#d4161c]"
                />
              </div>
            )}

            {project.id === 'iot-cansat' && (
              <div>
                <div className="flex items-center gap-2 text-xs text-[#ff3b3b] font-['JetBrains_Mono'] mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>CanSat Telemetry Serial Stream [9600 Baud]</span>
                </div>
                <div className="bg-black p-3 rounded-lg font-['JetBrains_Mono'] text-[11px] text-green-400 leading-relaxed border border-[#222] space-y-1">
                  <div>[SYS_INIT] Barometric sensor BMP280 initialized at 0x76</div>
                  <div>[CALIB] Zero-reference altitude calibrated: 914m ASL (Bengaluru)</div>
                  <div>[STREAM] PKT_#1044: ALT: 1240.2m | TEMP: 21.4°C | PRESS: 874.1 hPa</div>
                  <div>[STREAM] PKT_#1045: ALT: 1205.8m | TEMP: 21.9°C | PRESS: 878.3 hPa</div>
                  <div className="text-[#ff3b3b]">[DESCENT] Parachute deployment verified OK</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-[#1f1f1f] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#d4161c] bg-[#1a080a] hover:bg-[#d4161c] text-[#ff3b3b] hover:text-white font-medium text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(212,22,28,0.25)] hover:shadow-[0_0_25px_rgba(212,22,28,0.6)]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>VIEW ON GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-[#333] hover:border-[#666] text-[#9a9490] hover:text-white text-xs tracking-wider uppercase transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
