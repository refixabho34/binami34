import React from 'react';
import { ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface MobileBottomBarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  currency: Currency;
  onExploreBundle: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  cart,
  onOpenCart,
  currency,
  onExploreBundle,
}) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalUSD = cart.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0);

  if (totalItems === 0) {
    return (
      <aside 
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-3 left-3 right-3 z-30"
      >
        <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-900/90 border border-white/10 shadow-2xl backdrop-blur-lg">
          <button
            onClick={onExploreBundle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Master Bundle (-65%)</span>
          </button>

          <a
            href="#products"
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white"
          >
            <span>Browse All</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>
      </aside>
    );
  }

  return (
    <aside 
      aria-label="Mobile shopping cart bar"
      className="md:hidden fixed bottom-3 left-3 right-3 z-30 animate-in slide-in-from-bottom-3 duration-200"
    >
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-rose-950 via-zinc-900 to-rose-950 border border-rose-500/30 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 pl-2">
          <div className="relative">
            <ShoppingBag className="w-4 h-4 text-rose-400" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <div className="text-xs">
            <span className="text-zinc-400 font-normal">Total: </span>
            <span className="font-mono font-bold text-white">{formatPrice(totalUSD, currency)}</span>
          </div>
        </div>

        <button
          onClick={onOpenCart}
          className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 shadow-md shadow-rose-900/40 transition-colors"
        >
          View Cart & Checkout
        </button>
      </div>
    </aside>
  );
};
