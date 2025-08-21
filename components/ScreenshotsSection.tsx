import React, { forwardRef, useState } from 'react';
import WaitlistForm from './WaitlistForm';

interface PhoneMockupProps {
  imgSrc: string;
  quote: string;
  animationDelay: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ imgSrc, quote, animationDelay }) => {
  return (
    <div className="flex flex-col items-center gap-4 group animate-float" style={{ animationDelay }}>
      <div className="relative bg-gradient-to-br from-[#7DD3FC] to-[#A78BFA] p-1 rounded-3xl shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:shadow-purple-500/50 group-hover:-translate-y-2 transform">
        <div className="bg-gray-900 rounded-[calc(1.5rem-0.25rem)]">
          <div className="aspect-[9/19] w-full max-w-[280px] overflow-hidden rounded-2xl border-4 border-gray-800">
            <img src={imgSrc} alt="Rosa app screenshot" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="text-center px-2">
        <p className="text-gray-300 italic max-w-[260px] leading-relaxed">
            “{quote}”
        </p>
      </div>
    </div>
  );
};

const screenshots = [
  {
    imgSrc: "/phone-mockup-images/convo2.png",
    quote: "Rosa spots patterns and helps reset baby’s routine with care."
  },
  {
    imgSrc: "/phone-mockup-images/convo3.png",
    quote: "When doubts rise, Rosa reminds you: you’re doing enough."
  },
  {
    imgSrc: "/phone-mockup-images/convo4.png",
    quote: "A calm voice in the dark — Rosa stays by your side."
  }
];

const ScreenshotsSection = forwardRef<HTMLElement>((props, ref) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          See what chatting with Rosa feels like 💬
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          Looks and feels just like texting a friend — because that’s what Rosa is designed to be.
        </p>
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center md:items-start gap-y-16 md:gap-x-4 lg:gap-x-8">
          {/* Mockup 1: Far Left */}
          

          {/* Mockup 2: Left */}
          <div className="md:mt-12 transform md:rotate-[-4deg] transition-transform duration-500 ease-in-out hover:rotate-0 hover:scale-105">
              <PhoneMockup imgSrc={screenshots[0].imgSrc} quote={screenshots[0].quote} animationDelay="0.1s" />
          </div>

          {/* Mockup 3: Center */}
          <div className="md:scale-110 z-10 transition-transform duration-500 ease-in-out hover:scale-115">
              <PhoneMockup imgSrc={screenshots[1].imgSrc} quote={screenshots[1].quote} animationDelay="0.2s" />
          </div>
          
          {/* Mockup 4: Right */}
          <div className="md:mt-12 transform md:rotate-[4deg] transition-transform duration-500 ease-in-out hover:rotate-0 hover:scale-105">
              <PhoneMockup imgSrc={screenshots[2].imgSrc} quote={screenshots[2].quote} animationDelay="0.3s" />
          </div>
        </div>
        <div className="mt-20">
            <p className="text-xl font-semibold text-white">
                ✨ Imagine this kind of support at your fingertips.
            </p>
            <div className="mt-6">
                 {!showForm ? (
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 active:scale-[0.98] transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500/50 animate-pulse-glow"
                    >
                        Get Early Access
                    </button>
                 ) : (
                    <WaitlistForm />
                 )}
            </div>
        </div>
      </div>
    </section>
  );
});

export default ScreenshotsSection;
