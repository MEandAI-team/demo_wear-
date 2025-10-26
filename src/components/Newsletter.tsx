import { useState } from 'react';
import { Mail } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-3 bg-white/10 rounded-full mb-6">
          <Mail size={32} />
        </div>
        <h2 className="text-4xl font-bold mb-4">Join the Club</h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to get exclusive access to new arrivals, special offers, and style inspiration
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>

          {subscribed && (
            <p className="mt-4 text-green-400 animate-fade-in">
              Thank you for subscribing!
            </p>
          )}
        </form>

        <p className="text-xs text-white/60 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates
        </p>
      </div>
    </section>
  );
};
