import React, { forwardRef, useState } from 'react';
import WaitlistForm from './WaitlistForm';

const WhatsAppIcon: React.FC = () => (
  <svg fill="#40C351" viewBox="0 0 24 24" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp icon">
    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.73-1.11-5.2-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.23.86 5.82 2.45c1.59 1.59 2.45 3.62 2.45 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.82c-.23-.09-.39-.12-.56.12c-.17.25-.64.82-.79.98c-.15.17-.29.19-.54.06c-.25-.12-1.06-.39-2.02-1.25c-.75-.67-1.25-1.49-1.4-1.74c-.15-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43c.12-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.12-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42c-.14 0-.3-.02-.46-.02c-.17 0-.43.06-.66.31c-.22.25-.86.84-.86 2.05c0 1.21.88 2.37 1 2.53c.12.17 1.75 2.67 4.23 3.72c.59.25 1.05.4 1.41.51c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.06-.1-.22-.16-.47-.28z"/>
  </svg>
);

const benefits = [
  { icon: "🌙", title: "Calm & Science-Backed", description: "Sleep advice rooted in proven methods from sleep consultants and pediatricians." },
  { icon: "🤝", title: "Always There, 24/7", description: "Guidance is available the moment you need it, even during 3 AM feedings." },
  { icon: "💌", title: "Gentle Reminders", description: "Helps you stay consistent with bedtime routines without adding mental load." },
  { icon: "🍼", title: "Practical & Simple", description: "Clear, actionable next steps that don’t leave you feeling overwhelmed." },
  { icon: <WhatsAppIcon />, title: "No Extra Apps", description: <>Just <strong className="text-white">WhatsApp</strong> — easy, familiar, and completely stress-free.</> },
];

interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, className = '' }) => (
    <div className={`bg-gradient-to-br from-white/10 to-transparent p-6 rounded-2xl border border-white/10 text-center transform hover:scale-105 hover:bg-white/10 transition-all duration-300 flex flex-col items-center shadow-lg hover:shadow-purple-500/20 ${className}`}>
        <div className="bg-purple-900/40 text-4xl p-4 rounded-full flex-shrink-0 border border-white/10 shadow-lg mb-6 h-16 w-16 flex items-center justify-center">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300 flex-grow">{description}</p>
    </div>
);

const BenefitsSection = forwardRef<HTMLElement>((props, ref) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center py-20 lg:py-0">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block bg-gradient-to-r from-transparent via-purple-500/10 to-transparent py-4 px-8 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ textShadow: '0 0 20px rgba(167, 139, 250, 0.3)' }}>
            ✨ Why parents love Rosa
            </h2>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
                {benefits.map((benefit, index) => (
                    <BenefitCard 
                        key={benefit.title} 
                        {...benefit} 
                        className={index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
                    />
                ))}
            </div>
        </div>
        <div className="mt-20">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="px-10 py-5 bg-[#1B263B] text-white font-bold text-lg rounded-2xl transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/30 active:scale-[0.98] focus:outline-none border-chase"
            >
              Unlock My Support System
            </button>
          ) : (
            <WaitlistForm />
          )}
        </div>
      </div>
    </section>
  );
});

export default BenefitsSection;