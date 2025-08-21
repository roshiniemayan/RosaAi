import React, { forwardRef, useState } from 'react';
import WaitlistForm from './WaitlistForm';

const aboutPoints = [
  {
    icon: "👶",
    title: "A Restless Baby",
    description: "Gentle, step-by-step guidance when your little one just won't settle."
  },
  {
    icon: "⏰",
    title: "Endless Night Wakings",
    description: "Practical, calming strategies to manage frequent wake-ups through the night."
  },
  {
    icon: "🗓️",
    title: "Building Gentle Routines",
    description: "Simple, flexible routines to help both you and your baby find a rhythm for rest."
  },
  {
    icon: "🤗",
    title: "Reassurance & Support",
    description: "A friendly voice to remind you that you're doing a great job, especially when you feel alone."
  }
];


const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-transparent via-purple-500/10 to-transparent py-4 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ textShadow: '0 0 20px rgba(167, 139, 250, 0.3)' }}>
            Because every parent deserves a little support at night.
          </h2>
        </div>
        <div className="mt-8 max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
          <p>
            Becoming a new parent is beautiful — but it’s also exhausting, confusing, and sometimes overwhelming. Rosa is here to gently guide you through:
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto space-y-8 text-left">
          {aboutPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-6 p-4 rounded-xl transition-colors duration-300 hover:bg-white/5">
              <div className="bg-purple-900/40 text-3xl p-4 rounded-full flex-shrink-0 border border-white/10 shadow-lg">
                <span>{point.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                <p className="text-gray-400 mt-1 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto text-lg text-gray-300">
           <p>
            Rosa isn’t just advice — she’s a reassuring voice that listens, reminds, and walks with you through each step.
          </p>
        </div>
        <div className="mt-16 text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.98] transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500/50 animate-float"
              style={{ animationDuration: '5s' }}
            >
              I need this!
            </button>
          ) : (
            <WaitlistForm />
          )}
        </div>
      </div>
    </section>
  );
});

export default AboutSection;