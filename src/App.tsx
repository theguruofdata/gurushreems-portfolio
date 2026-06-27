import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Journey from './components/Journey';
import Studio from './components/Studio';
import Connect from './components/Connect';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Custom cursor position state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Background ambient orbs positions based on mouse movement for high-end feel
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if the device is a touch screen
    const touchCheck = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(touchCheck);

    if (touchCheck) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Calculate slow drift coordinates for background ambient orbs
      const xPercent = e.clientX / window.innerWidth;
      const yPercent = e.clientY / window.innerHeight;
      setOrbOffset({
        x: (xPercent - 0.5) * 40,
        y: (yPercent - 0.5) * 40,
      });
    };

    const handleMouseOverInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.project-card') ||
        target.classList.contains('cursor-pointer');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOverInteractive);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOverInteractive);
    };
  }, []);

  const handleScrollToConnect = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-surface text-on-surface overflow-x-hidden selection:bg-cyan-400 selection:text-slate-950">
      
      {/* 1. Custom Interactive Trail Cursor (Only active on Desktop) */}
      {!isTouchDevice && (
        <div
          id="custom-cursor"
          className="custom-cursor hidden sm:block"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
            borderColor: isHovered ? '#22d3ee' : '#d946ef',
            backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.08)' : 'transparent',
          }}
        />
      )}

      {/* 2. Background Atmosphere Glowing Orbs (Interactive floating orbs) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Orb 1: Indigo Top-Left */}
        <div
          id="orb-1"
          className="orb indigo-orb top-[-10%] left-[-10%] transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${orbOffset.x}px, ${orbOffset.y}px)`,
          }}
        />
        {/* Orb 2: Fuchsia Bottom-Right */}
        <div
          id="orb-2"
          className="orb fuchsia-orb bottom-[-10%] right-[-10%] transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-orbOffset.x * 1.2}px, ${-orbOffset.y * 1.2}px)`,
          }}
        />
        {/* Orb 3: Cyan Mid-Right */}
        <div
          id="orb-3"
          className="orb cyan-orb top-[20%] right-[10%] transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${orbOffset.x * 0.8}px, ${orbOffset.y * 0.8}px)`,
          }}
        />
      </div>

      {/* 3. Core Structural Site Modules */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <Header onHireClick={handleScrollToConnect} />
        
        <main>
          <Hero 
            onTalkClick={handleScrollToConnect} 
            onExploreClick={handleScrollToWork} 
          />
          <Works onProjectClick={setSelectedProject} />
          <Journey />
          <Studio />
          <Connect />
        </main>
        
        <Footer />
      </div>

      {/* 4. Details Interactive Showcase Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
