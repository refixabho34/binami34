import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Globe, Sparkles } from 'lucide-react';
import { Currency } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onFeaturedClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  currency,
  onCurrencyChange,
  onFeaturedClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0d12]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-xl md:text-2xl font-display font-bold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          <span>Sherenza<span className="text-rose-500">.</span></span>
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5 hidden sm:inline-block">
            Digital Store
          </span>
        </a>

        {/* Zone 2: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onFeaturedClick}
            className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 transition-colors text-sm font-medium whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Bundle</span>
          </button>
        </nav>

        {/* Zone 3: Actions (Currency + Cart + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Currency Switcher */}
          <div className="relative flex items-center bg-zinc-900/80 border border-white/10 rounded-lg p-1 text-xs">
            <Globe className="w-3.5 h-3.5 text-zinc-400 ml-1.5 mr-1 hidden sm:block" />
            {(['USD', 'EUR', 'MAD'] as Currency[]).map((cur) => (
              <button
                key={cur}
                onClick={() => onCurrencyChange(cur)}
                className={`px-2 py-1 rounded font-mono font-medium transition-colors ${
                  currency === cur
                    ? 'bg-rose-500/20 text-rose-300 font-bold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title={`Switch currency to ${cur}`}
              >
                {cur}
              </button>
            ))}
          </div>

          {/* Cart Button with Count Badge */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white hover:border-white/20 hover:bg-zinc-800 transition-all duration-150 group"
            aria-label="View shopping cart"
          >
            <ShoppingBag className="w-4 h-4 text-zinc-300 group-hover:text-rose-400 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center shadow-lg shadow-rose-500/40 animate-in zoom-in-75 duration-150">
                {cartCount}
              </span>
            )}
          </button>

          {/* Buy Now / Quick Catalog CTA (Desktop) */}
          <a
            href="#products"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 rounded-lg shadow-md shadow-rose-900/30 transition-all whitespace-nowrap"
          >
            Browse Products
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden rounded-lg text-zinc-400 hover:text-white bg-zinc-900/60 border border-white/10"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0e1017] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onFeaturedClick();
              }}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 text-left"
            >
              <Sparkles className="w-4 h-4" />
              <span>Sherenza Master Bundle (65% Off)</span>
            </button>
            <div className="pt-2">
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 rounded-lg text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500"
              >
                Browse All Products
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
