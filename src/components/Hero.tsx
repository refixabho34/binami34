import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Download, Zap, Star } from 'lucide-react';
import { Product, Currency } from '../types';
import { ProductCover } from './ProductCover';
import { formatPrice } from '../utils/formatters';

interface HeroProps {
  featuredProduct: Product;
  onSelectProduct: (product: Product) => void;
  currency: Currency;
  onOpenCartWithProduct: (product: Product) => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredProduct,
  onSelectProduct,
  currency,
  onOpenCartWithProduct,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-white/5">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Quiet Kick-off tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>New 2026 Collection Released</span>
              <span className="text-zinc-500">·</span>
              <span className="text-rose-400 font-semibold">Instant Access</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              Digital products, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-rose-300 bg-clip-text text-transparent">
                ready to download.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Curated ebooks, actionable guides, Notion systems, and creator toolkits. 
              Pay securely in seconds and receive your digital assets and lifetime updates instantly by email.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-zinc-300 pt-1">
              <div className="flex items-center gap-1.5">
                <Download className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Instant 1-Click File Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>14-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lifetime Updates Included</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 shadow-xl shadow-rose-950/40 transition-all group"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onSelectProduct(featuredProduct)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white border border-white/10 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Explore Master Bundle</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold ml-1">
                  Save 65%
                </span>
              </button>
            </div>

            {/* Social Proof Metric bar */}
            <div className="pt-4 flex items-center gap-4 border-t border-white/5">
              <div className="flex -space-x-2">
                {['#38bdf8', '#fb7185', '#a78bfa', '#34d399'].map((col, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full border-2 border-[#0c0d12] flex items-center justify-center text-[10px] font-bold text-white uppercase shadow-sm"
                    style={{ backgroundColor: col }}
                  >
                    {['AE', 'SK', 'MR', 'JL'][idx]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.96 / 5.0</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Over <span className="font-semibold text-zinc-200">2,400+</span> creators & entrepreneurs downloading daily
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Featured Product Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Radial backdrop blur card shadow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-600/30 to-indigo-600/30 opacity-70 blur-xl group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl bg-zinc-900/90 border border-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-2xl flex flex-col items-center">
                {/* Product Cover Showcase */}
                <div 
                  className="w-full cursor-pointer transform transition-transform duration-300 hover:scale-[1.01]"
                  onClick={() => onSelectProduct(featuredProduct)}
                >
                  <ProductCover product={featuredProduct} size="hero" />
                </div>

                {/* Card Meta info & Quick Buy strip */}
                <div className="w-full mt-5 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono tracking-wider text-rose-400 uppercase font-semibold">
                        Featured Bundle
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                        {featuredProduct.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold font-mono text-white">
                        {formatPrice(featuredProduct.priceUSD, currency)}
                      </div>
                      <div className="text-xs text-zinc-500 line-through font-mono">
                        {formatPrice(featuredProduct.originalPriceUSD, currency)}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {featuredProduct.subtitle}
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(featuredProduct)}
                      className="flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 hover:text-white border border-white/10 transition-colors text-center"
                    >
                      Quick View & Preview
                    </button>
                    <button
                      onClick={() => onOpenCartWithProduct(featuredProduct)}
                      className="py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Get All Files</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
