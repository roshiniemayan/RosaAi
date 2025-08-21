import React, { useState } from 'react';

const WAITLIST_URL = 'https://script.google.com/macros/s/AKfycbxRwFtwno0mBOzlvoDzYthmjx-ZnL39kpm1ozpsoZIYKhCCbtVlpDXONrdB0NS3KetMHg/exec';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }

    setStatus('loading');
    setMessage('');
    
    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch(WAITLIST_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      setStatus('success');
      setMessage("Thanks for joining ❤️ You’ll be among the first to welcome Rosa into your nights.");
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="mt-4 flex justify-center">
        <p className="text-center font-semibold text-green-300 bg-green-500/10 p-3 rounded-lg max-w-md">
            {message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
      <div className="relative w-full">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#D97706] focus-within:animate-shimmer" >
          <div className="relative flex items-center">
            <span className="absolute left-4 text-xl pointer-events-none" aria-hidden="true">🌙</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full pl-12 pr-5 py-3 rounded-full border-0 bg-[#0D1B2A] text-white placeholder-gray-400 focus:outline-none focus:ring-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-300"
              disabled={status === 'loading'}
            />
          </div>
        </div>
        {status === 'error' && <p className="text-red-400 text-sm mt-2 ml-4">{message}</p>}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto flex-shrink-0 px-6 py-3 bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#D97706] text-yellow-950 font-semibold rounded-full shadow-md hover:shadow-lg hover:shadow-[#F59E0B]/40 hover:scale-105 active:scale-[0.98] transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-500/50 animate-shimmer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Joining...' : 'Submit'}
      </button>
    </form>
  );
};

export default WaitlistForm;