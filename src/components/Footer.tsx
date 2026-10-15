import React, { useState } from 'react';
import { Mail, Check, ShieldCheck, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#08090d] text-zinc-400 text-xs">
      {/* Pre-footer Guarantee & Newsletter strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl bg-gradient-to-r from-rose-950/30 via-zinc-900 to-indigo-950/30 border border-white/10 p-6 sm:p-10">
          <div className="lg:col-span-7 space-y-2 text-left">
            <div className="flex items-center gap-1.5 text-xs font-mono text-rose-400 uppercase font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Risk-Free Guarantee</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Crafted for creators who value quality over noise.
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-lg">
              Get notified when we release new Notion templates, prompt vaults, and creator case studies. Zero spam.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>You are in! Check your inbox for your welcome gift.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-zinc-900/90 border border-white/10 rounded-xl pl-9 pr-3 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors shrink-0 shadow-md shadow-rose-950/40"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="text-xl font-display font-bold text-white">
              Sherenza<span className="text-rose-500">.</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Premium digital storefront for modern creators, designers, and entrepreneurs. Instant downloads & lifetime updates.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Catalog
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#products" className="hover:text-white transition-colors">Notion Systems</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Ebooks & Guides</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">AI Prompt Vaults</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">UI Kits & Tokens</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Support & Legal
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#faq" className="hover:text-white transition-colors">Help Center & FAQ</a></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition-colors">Contact Support</button></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">License Agreement</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Payment Methods
            </h4>
            <p className="text-zinc-500 text-xs mb-3">
              Secured with 256-bit SSL encryption. Supporting worldwide and local Moroccan payments.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono font-medium text-zinc-400">
              <span className="px-2 py-1 rounded bg-zinc-900 border border-white/5">Visa</span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-white/5">Mastercard</span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-white/5">Apple Pay</span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-white/5">PayPal</span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-white/5">CMI Morocco</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <div>
            © {new Date().getFullYear()} Sherenza Digital. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-zinc-500">
            <span>Built with precision for PC and mobile</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
