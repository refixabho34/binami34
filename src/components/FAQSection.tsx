import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-white/5 bg-zinc-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-3 mb-12">
          <div className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold">
            Common Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-400">
            Everything you need to know about purchasing, file delivery, Notion integration, and refunds.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl bg-zinc-900/60 border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rose-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
