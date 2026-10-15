import React, { useState } from 'react';
import { X, Check, Star, ShieldCheck, Download, FileText, Sparkles, BookOpen, Layers } from 'lucide-react';
import { Product, Currency } from '../types';
import { ProductCover } from './ProductCover';
import { formatPrice } from '../utils/formatters';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onInstantBuy: (product: Product) => void;
  inCart: boolean;
  currency: Currency;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onInstantBuy,
  inCart,
  currency,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'sample'>('details');

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Visual Artwork & Specs (5 Cols) */}
          <div className="md:col-span-5 bg-zinc-950 p-6 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-white/5 space-y-6">
            <div className="w-full max-w-[280px]">
              <ProductCover product={product} size="lg" />
            </div>

            {/* Quick File Specs */}
            <div className="w-full bg-zinc-900/60 rounded-xl p-4 border border-white/5 space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-zinc-500">Format:</span>
                <span className="font-semibold text-white">{product.format}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-zinc-500">File Size:</span>
                <span className="font-mono text-white">{product.fileSize}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-zinc-500">Scope:</span>
                <span className="font-semibold text-rose-300">{product.pagesOrItems}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">License:</span>
                <span className="text-emerald-400 font-medium">Personal & Commercial</span>
              </div>
            </div>

            <div className="text-center text-xs text-zinc-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes 14-day 100% money-back guarantee</span>
            </div>
          </div>

          {/* Right Column: Information, Tabs & Purchase Module (7 Cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-rose-400 font-semibold tracking-wider uppercase">
                  {product.categoryLabel}
                </span>
                {product.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-rose-500/20 text-rose-300 uppercase">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {product.title}
              </h2>

              <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                {product.subtitle}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3 text-xs text-zinc-400">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white font-mono">{product.rating}</span>
                <span>({product.reviewsCount} customer ratings)</span>
              </div>

              {/* Tab Selector: Overview vs Sample Preview */}
              <div className="flex items-center gap-2 mt-6 border-b border-white/10 pb-3">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'details'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Overview & Modules</span>
                </button>
                <button
                  onClick={() => setActiveTab('sample')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'sample'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Sample Excerpt</span>
                </button>
              </div>

              {/* Tab 1: Detailed Overview */}
              {activeTab === 'details' && (
                <div className="mt-4 space-y-5 text-left animate-in fade-in duration-150">
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights list */}
                  <div>
                    <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-2.5">
                      Key Highlights & Features
                    </h4>
                    <ul className="space-y-2">
                      {product.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What is inside accordion/cards */}
                  <div>
                    <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-2.5">
                      What is Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.whatsInside.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-zinc-950/60 border border-white/5 space-y-1">
                          <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-rose-400 shrink-0" />
                            <span>{item.title}</span>
                          </div>
                          <p className="text-[11px] text-zinc-400 leading-normal">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Sample Reader */}
              {activeTab === 'sample' && (
                <div className="mt-4 space-y-4 text-left animate-in fade-in duration-150">
                  <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-3 font-serif">
                    {product.sampleChapters.map((chap, i) => (
                      <div key={i} className="space-y-2 pb-3 last:pb-0 border-b last:border-0 border-white/5">
                        <div className="text-xs font-mono font-bold tracking-wider text-rose-400 uppercase">
                          {chap.title}
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                          "{chap.excerpt}"
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500 font-sans">
                    * Full version includes all complete chapters, databases, templates, and video walkthroughs.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Contiguous Purchase Module */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">One-time payment:</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                      {formatPrice(product.priceUSD, currency)}
                    </span>
                    <span className="text-sm font-mono text-zinc-500 line-through">
                      {formatPrice(product.originalPriceUSD, currency)}
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs text-emerald-400 font-medium">
                  Instant Email + Dashboard Delivery
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    inCart
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span>{inCart ? 'Added to Cart' : 'Add to Cart'}</span>
                </button>

                <button
                  onClick={() => onInstantBuy(product)}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 shadow-xl shadow-rose-950/40 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Instant Buy & Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
