import React, { useState, forwardRef } from 'react';
import WaitlistForm from './WaitlistForm';

const WhatsAppIcon: React.FC = () => (
  <svg fill="#40C351" viewBox="0 0 24 24" className="h-6 w-6 inline-block ml-1 align-middle" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp icon">
    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.73-1.11-5.2-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.23.86 5.82 2.45c1.59 1.59 2.45 3.62 2.45 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.82c-.23-.09-.39-.12-.56.12c-.17.25-.64.82-.79.98c-.15.17-.29.19-.54.06c-.25-.12-1.06-.39-2.02-1.25c-.75-.67-1.25-1.49-1.4-1.74c-.15-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43c.12-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.12-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42c-.14 0-.3-.02-.46-.02c-.17 0-.43.06-.66.31c-.22.25-.86.84-.86 2.05c0 1.21.88 2.37 1 2.53c.12.17 1.75 2.67 4.23 3.72c.59.25 1.05.4 1.41.51c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.06-.1-.22-.16-.47-.28z"/>
  </svg>
);

const HeroPhoneMockup: React.FC = () => {
  return (
    <div className="relative group animate-float" style={{ animationDuration: '8s' }}>
      {/* Ambient Glow */}
      <div className="absolute -inset-12 bg-purple-500/20 blur-3xl rounded-full opacity-60" aria-hidden="true"></div>
      <div className="relative bg-gradient-to-br from-[#7DD3FC] to-[#A78BFA] p-1 rounded-[3rem] shadow-2xl shadow-purple-500/20">
        <div className="bg-gray-900 rounded-[calc(3rem-0.25rem)]">
          <div className="aspect-[9/19] w-full max-w-[300px] overflow-hidden rounded-[2.5rem] border-4 border-gray-800">
            <img 
              src="/images/Convo1Header.png" 
              alt="Rosa AI chat screenshot" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center py-20 lg:py-0 overflow-hidden">
      <div className="absolute top-10 right-10 text-7xl opacity-30 animate-float lg:opacity-10 lg:right-1/2 lg:translate-x-[40vw]">
        <span style={{filter: 'drop-shadow(0 0 25px #A78BFA)'}}>🌙</span>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-[55%] xl:w-1/2 text-center lg:text-left">
            <div className="max-w-3xl mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight" style={{lineHeight: 1.2}}>
                You’re not alone in the sleepless nights - Meet <span style={{ textShadow: '0 0 20px #A78BFA' }}>Rosa 🌙</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
                Your 2AM parenting buddy - always there on{' '}
                <span className="font-semibold text-white whitespace-nowrap">
                  WhatsApp
                  <WhatsAppIcon />
                </span>
                . Science-backed baby sleep support - as easy as chatting with a friend.
              </p>
              <div className="mt-10">
                <div className="flex flex-col items-center lg:items-start">
                    {!showForm ? (
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-10 py-5 bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#D97706] text-yellow-950 font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:shadow-[#F59E0B]/40 active:scale-[0.98] transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-500/50 animate-breathe"
                    >
                        👉 Join the Waitlist
                    </button>
                    ) : (
                    <div className="w-full max-w-md">
                        <WaitlistForm />
                    </div>
                    )}
                </div>
              </div>
              <p className="mt-4 text-xl md:text-2xl text-white text-center lg:text-left lg:mt-6 lg:ml-2" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                🌙 Launching in your region soon — we’ll be available in just a week! Join the waitlist for early access.
              </p>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="lg:w-[45%] xl:w-1/2 flex justify-center lg:justify-end lg:pr-8 xl:pr-16">
            <div className="relative text-center">
              <HeroPhoneMockup />
              <p className="mt-6 text-gray-300 italic max-w-xs mx-auto leading-relaxed">
                “At 2AM, Rosa guides you step by step — you’re never alone.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default HeroSection;
