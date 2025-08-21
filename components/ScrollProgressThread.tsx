import React, { useState, useEffect, RefObject } from 'react';

export interface SectionRef {
  id: string;
  ref: RefObject<HTMLElement>;
  icon: string;
}

interface ScrollProgressThreadProps {
  sections: SectionRef[];
}

const ScrollProgressThread: React.FC<ScrollProgressThreadProps> = ({ sections }) => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [dots, setDots] = useState<{ id: string; icon: string; top: number }[]>([]);

  useEffect(() => {
    const calculateDotPositions = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollableHeight = docHeight - winHeight;

      if (totalScrollableHeight <= 0) return;

      const newDots = sections.map(({ id, ref, icon }) => {
        const sectionTop = ref.current?.offsetTop || 0;
        // Position dots proportionally to their appearance on the page
        const topPercent = (sectionTop / totalScrollableHeight) * 100;
        return { id, icon, top: Math.min(topPercent, 95) }; // cap at 95% to keep it in view
      });
      setDots(newDots);
    };
    
    // Calculate on mount and on resize
    calculateDotPositions();
    window.addEventListener('resize', calculateDotPositions);
    // A small timeout allows layout to settle before calculating.
    const timeoutId = setTimeout(calculateDotPositions, 100);


    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollableHeight = docHeight - winHeight;
      
      if (totalScrollableHeight > 0) {
        const currentProgress = (scrollTop / totalScrollableHeight) * 100;
        setProgress(currentProgress);
      }

      // Determine active section
      let currentSection = '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && scrollTop + winHeight * 0.4 >= section.ref.current.offsetTop) {
          currentSection = section.id;
          break;
        }
      }
      setActiveSection(currentSection || sections[0]?.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateDotPositions);
      clearTimeout(timeoutId);
    };
  }, [sections]);

  return (
    <div className="hidden lg:block fixed top-0 left-8 h-full w-8 z-50" aria-hidden="true">
      <div className="relative h-full w-[2px] bg-white/10 mx-auto">
        {/* Progress Line */}
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-400 to-amber-400"
          style={{ 
            height: `${progress}%`,
            boxShadow: '0 0 8px rgba(167, 139, 250, 0.7)'
          }}
        />

        {/* Section Dots */}
        {dots.map(dot => (
          <div
            key={dot.id}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${dot.top}%` }}
          >
            <div className={`
              w-6 h-6 rounded-full bg-gray-800 border-2 flex items-center justify-center
              transition-all duration-300
              ${activeSection === dot.id ? 'border-purple-400 scale-125' : 'border-white/20'}
            `}>
              <div 
                className="w-4 h-4 rounded-full flex items-center justify-center bg-gray-700"
              >
                 <span className={`text-xs transition-opacity duration-300 ${activeSection === dot.id ? 'opacity-100' : 'opacity-60'}`}>
                  {dot.icon}
                 </span>
              </div>
               {activeSection === dot.id && (
                  <div className="absolute w-6 h-6 rounded-full bg-purple-500/50 animate-pulse-glow" style={{ animationDuration: '2s' }}></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgressThread;
