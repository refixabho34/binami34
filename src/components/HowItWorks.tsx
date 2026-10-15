import React from 'react';
import { Search, CreditCard, Sparkles, Download, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pick Your Digital Assets',
      description: 'Explore high-leverage Notion systems, tactical ebooks, and AI prompt engineering vaults tested in the real world.',
      icon: Search,
      badge: 'Zero Fluff'
    },
    {
      num: '02',
      title: 'Seamless Instant Checkout',
      description: 'Complete checkout in seconds with Apple Pay, Card, or PayPal. Full support for USD, EUR, and Moroccan Dirhams (MAD).',
      icon: CreditCard,
      badge: '256-bit Encrypted'
    },
    {
      num: '03',
      title: 'Download & Ship Faster',
      description: 'Instant download button and permanent email backup. Duplicate Notion pages with 1 click and receive free updates for life.',
      icon: Download,
      badge: 'Lifetime Access'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 border-t border-white/5 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left space-y-3 mb-12">
          <div className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold">
            The Sherenza Experience
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How it works
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            From discovering the right system to deploying it in your workflow in under 3 minutes.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl bg-zinc-900/60 border border-white/10 p-6 md:p-8 space-y-4 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-rose-500/80 group-hover:text-rose-400 transition-colors">
                    {step.num}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 border border-white/10 text-zinc-400">
                    {step.badge}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-rose-400">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
