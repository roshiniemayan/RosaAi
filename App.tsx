
import React, { useRef, forwardRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ScreenshotsSection from './components/ScreenshotsSection';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import ScrollProgressThread from './components/ScrollProgressThread';
import WaitlistForm from './components/WaitlistForm';

const StarryBackground = () => (
    <div className="fixed inset-0 z-0" style={{
        backgroundImage: `
            radial-gradient(white, rgba(255,255,255,0) 0.8px, transparent 2.5px),
            radial-gradient(white, rgba(255,255,255,0) 0.6px, transparent 2px)
        `,
        backgroundSize: '250px 250px, 150px 150px',
        backgroundPosition: '0 0, 80px 80px',
        animation: 'twinkle 10s linear infinite',
    }}>
        <style>{`
            @keyframes twinkle {
                from { background-position: 0 0, 80px 80px; }
                to { background-position: -500px 500px, -420px 420px; }
            }
        `}</style>
    </div>
);

const WhatsAppIcon: React.FC = () => (
  <svg fill="#40C351" viewBox="0 0 24 24" className="h-5 w-5 inline-block ml-1 align-middle" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp icon">
    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.73-1.11-5.2-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.23.86 5.82 2.45c1.59 1.59 2.45 3.62 2.45 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.82c-.23-.09-.39-.12-.56.12c-.17.25-.64.82-.79.98c-.15.17-.29.19-.54.06c-.25-.12-1.06-.39-2.02-1.25c-.75-.67-1.25-1.49-1.4-1.74c-.15-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43c.12-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.12-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42c-.14 0-.3-.02-.46-.02c-.17 0-.43.06-.66.31c-.22.25-.86.84-.86 2.05c0 1.21.88 2.37 1 2.53c.12.17 1.75 2.67 4.23 3.72c.59.25 1.05.4 1.41.51c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.06-.1-.22-.16-.47-.28z"/>
  </svg>
);


const App: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const screenshotsRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const sections = [
    { id: 'hero', ref: heroRef, icon: '🌙' },
    { id: 'screenshots', ref: screenshotsRef, icon: '💬' },
    { id: 'about', ref: aboutRef, icon: '👶' },
    { id: 'benefits', ref: benefitsRef, icon: '✨' },
    { id: 'faq', ref: faqRef, icon: '💡' },
    { id: 'footer', ref: footerRef, icon: '💌' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-gray-200 min-h-screen antialiased">
      <StarryBackground />
      <ScrollProgressThread sections={sections} />
      <div className="relative z-10 lg:pl-24">
        <main>
          <HeroSection ref={heroRef} />
          <ScreenshotsSection ref={screenshotsRef} />
          <AboutSection ref={aboutRef} />
          <BenefitsSection ref={benefitsRef} />
          <FAQSection ref={faqRef} />
        </main>
        <Footer ref={footerRef} />
      </div>
    </div>
  );
};

const Footer = forwardRef<HTMLElement>((props, ref) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <footer ref={ref} className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/10">
          <div className="space-y-12 text-center">
            {/* Supportive Note Section */}
            <div>
              <span className="text-3xl" role="img" aria-label="sparkles">✨</span>
              <p className="mt-4 text-xl md:text-2xl font-medium text-white italic leading-relaxed" style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>
                “Parenting a newborn can feel like the longest marathon — but you don’t have to run it alone. Rosa is here to make sure you feel seen, supported, and never without a friend when things get tough.”
              </p>
            </div>

            <div className="w-full h-[1px] bg-white/10 max-w-sm mx-auto"></div>

            {/* Waitlist Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Join thousands of parents waiting for Rosa’s launch.
              </h2>
              <p className="mt-2 text-lg text-gray-300">Early supporters get:</p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div className="bg-black/20 p-4 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-2xl">🎁</span>
                      <p className="mt-2 text-gray-300 font-medium">Exclusive baby sleep tips</p>
                  </div>
                   <div className="bg-black/20 p-4 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-2xl">🌟</span>
                      <p className="mt-2 text-gray-300 font-medium">Priority access to Rosa</p>
                  </div>
                   <div className="bg-black/20 p-4 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-2xl">💙</span>
                      <p className="mt-2 text-gray-300 font-medium">A chance to shape the journey</p>
                  </div>
              </div>
              
              <div className="mt-10">
                {!showForm ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-8 py-4 bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#D97706] text-yellow-950 font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#F59E0B]/40 hover:scale-105 active:scale-[0.98] transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-500/50 animate-pulse-glow"
                  >
                    👉 Join the Waitlist Today
                  </button>
                ) : (
                  <WaitlistForm />
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Closing Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400">
            You’ve got this.
          </p>
          <p className="mt-2 text-lg text-gray-400">
            And when you need a little help, Rosa will be right there — in your pocket, on{' '}
            <span className="font-semibold text-white whitespace-nowrap">
              WhatsApp
              <WhatsAppIcon />
            </span>
            , like a trusted friend.
          </p>
        </div>
      </div>
    </footer>
  );
});


export default App;