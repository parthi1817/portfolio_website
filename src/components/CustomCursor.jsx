import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with hover capability
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsHovered(true);
    const onMouseUp = () => setIsHovered(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Smooth trail animation
  useEffect(() => {
    let animationFrame;
    const follow = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrame = requestAnimationFrame(follow);
    };
    animationFrame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className="fixed pointer-events-none z-[999] rounded-full transition-transform duration-75 ease-out hidden md:block"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          width: isHovered ? '42px' : '32px',
          height: isHovered ? '42px' : '32px',
          transform: 'translate(-50%, -50%)',
          border: '1.5px solid rgba(255, 59, 59, 0.45)',
          backgroundColor: 'rgba(212, 22, 28, 0.08)',
          boxShadow: '0 0 20px rgba(212, 22, 28, 0.3)',
        }}
      />
      {/* Core Center Red Dot */}
      <div
        className="fixed pointer-events-none z-[1000] rounded-full bg-[#ff3b3b] shadow-[0_0_12px_#ff3b3b] hidden md:block transition-all duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '10px' : '6px',
          height: isHovered ? '10px' : '6px',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}

