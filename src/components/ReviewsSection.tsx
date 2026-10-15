import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <section id="reviews" className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="text-left space-y-3">
          <div className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold">
            Social Proof & Feedback
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Loved by creators & indie founders
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Real feedback from solopreneurs who streamlined their business with Sherenza digital systems.
          </p>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-white/10 shrink-0">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <div className="text-xs text-zinc-300">
            <span className="font-bold text-white font-mono">4.96/5</span> average rating across 1,800+ downloads
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col justify-between rounded-2xl bg-zinc-900/60 border border-white/10 p-5 sm:p-6 space-y-4 hover:border-white/20 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                "{rev.content}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold uppercase shadow-sm">
                  {rev.avatarText}
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    )}
                  </div>
                  <div className="text-[11px] text-zinc-500">{rev.role}</div>
                </div>
              </div>

              <span className="text-[10px] font-mono text-zinc-500">
                {rev.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
