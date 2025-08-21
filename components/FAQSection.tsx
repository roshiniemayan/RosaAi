import React, { useState, forwardRef } from 'react';
import WaitlistForm from './WaitlistForm';

const faqData = [
  {
    question: "What’s the best part about it?",
    answer: "Peace of mind. Knowing you’re <strong>never alone in the parenting journey</strong> — there’s always a friend in your pocket with guidance and encouragement.",
    icon: "💖"
  },
  {
    question: "Is it only about baby sleep?",
    answer: "Not at all. You’ll also get <strong>tips for your own rest, calming techniques, and gentle reassurance</strong> to help you feel more confident as a parent.",
    icon: "🧘‍♀️"
  },
  {
    question: "Can I use it during the day too?",
    answer: "Absolutely! Whether it’s <strong>naps, bedtime routines, or just a quick check-in</strong>, your buddy is here 24/7 to support you.",
    icon: "☀️"
  },
  {
    question: "Do I need to install a new app?",
    answer: `Nope! No downloads, no accounts. Just chat with Rosa directly on <strong>WhatsApp<svg fill="#40C351" viewBox="0 0 24 24" style="height:1.1em; width:1.1em; display:inline-block; vertical-align:middle; margin-left:4px;" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp icon"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.73-1.11-5.2-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.23.86 5.82 2.45c1.59 1.59 2.45 3.62 2.45 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.82c-.23-.09-.39-.12-.56.12c-.17.25-.64.82-.79.98c-.15.17-.29.19-.54.06c-.25-.12-1.06-.39-2.02-1.25c-.75-.67-1.25-1.49-1.4-1.74c-.15-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43c.12-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.12-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42c-.14 0-.3-.02-.46-.02c-.17 0-.43.06-.66.31c-.22.25-.86.84-.86 2.05c0 1.21.88 2.37 1 2.53c.12.17 1.75 2.67 4.23 3.72c.59.25 1.05.4 1.41.51c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.06-.1-.22-.16-.47-.28z"/></svg></strong>, like a friend.`,
    icon: "📱"
  },
  {
    question: "Is Rosa safe and private?",
    answer: "Yes. Your conversations are private and never shared.",
    icon: "🔒"
  },
  {
    question: "Who is Rosa for?",
    answer: "New parents, first-time moms and dads, and anyone caring for a newborn.",
    icon: "👨‍👩‍👧"
  },
  {
    question: "Will Rosa give personalized advice?",
    answer: "Yes! Rosa adapts based on your baby’s age, patterns, and your preferences.",
    icon: "🧠"
  },
  {
    question: "Why should I join the waitlist?",
    answer: "Early supporters get exclusive tips, priority access, and special perks.",
    icon: "✨"
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  icon: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="flex-shrink-0 bg-purple-900/40 text-2xl w-12 h-12 flex items-center justify-center rounded-full border border-white/10">
            {icon}
        </span>
        <span className="flex-1 text-lg font-semibold text-white pt-2">{question}</span>
        <span className={`transform transition-transform duration-300 pt-3 ${isOpen ? 'rotate-180' : ''}`}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
           </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div
            className="pt-4 text-gray-300 leading-relaxed pl-16"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </div>
    </div>
  );
};


const FAQSection = forwardRef<HTMLElement>((props, ref) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center py-20 lg:py-0">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          💡 Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} icon={faq.icon} />
          ))}
        </div>
        <div className="mt-20 text-center">
            <p className="text-lg text-gray-300 mb-8">Ready to have a friend in your pocket for those tough nights?</p>
            {!showForm ? (
                <button
                onClick={() => setShowForm(true)}
                className="relative group px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-amber-400 hover:text-yellow-950 hover:shadow-lg hover:shadow-amber-400/40 hover:scale-105 active:scale-[0.98] focus:outline-none"
                >
                <span className="sparkle" style={{ top: '10%', left: '10%', animationDelay: '0s' }} />
                <span className="sparkle" style={{ top: '80%', left: '90%', animationDelay: '0.3s' }} />
                <span className="sparkle" style={{ top: '20%', left: '85%', animationDelay: '0.6s' }} />
                <span className="sparkle" style={{ top: '70%', left: '15%', animationDelay: '0.9s' }} />
                Join the Waitlist Now
                </button>
            ) : (
                <WaitlistForm />
            )}
        </div>
      </div>
    </section>
  );
});

export default FAQSection;