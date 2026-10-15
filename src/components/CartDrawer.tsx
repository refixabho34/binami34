import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag, Sparkles } from 'lucide-react';
import { CartItem, Currency } from '../types';
import { ProductCover } from './ProductCover';
import { formatPrice } from '../utils/formatters';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onCheckout: (appliedDiscountPercent: number) => void;
  currency: Currency;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onClearCart,
  onCheckout,
  currency,
}) => {
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountError, setDiscountError] = useState('');
  const [discountSuccess, setDiscountSuccess] = useState('');

  if (!isOpen) return null;

  const subtotalUSD = cart.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0);
  const discountAmountUSD = subtotalUSD * (discountPercent / 100);
  const totalUSD = Math.max(0, subtotalUSD - discountAmountUSD);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setDiscountError('');
    setDiscountSuccess('');
    const code = discountCode.trim().toUpperCase();

    if (code === 'SHERENZA20' || code === 'CREATOR20') {
      setDiscountPercent(20);
      setDiscountSuccess('20% Creator discount applied!');
    } else if (code === 'VIP10') {
      setDiscountPercent(10);
      setDiscountSuccess('10% VIP discount applied!');
    } else {
      setDiscountError('Invalid code. Try "SHERENZA20" for 20% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e1017] border-l border-white/10 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-rose-500" />
              <h3 className="font-display text-lg font-bold text-white">Your Cart</h3>
              <span className="text-xs font-mono text-zinc-400">
                ({cart.reduce((s, i) => s + i.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-24 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-zinc-600 mx-auto" />
                <p className="text-sm text-zinc-400">Your shopping bag is empty.</p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-rose-400 bg-rose-500/10 rounded-lg hover:bg-rose-500/20 transition-colors"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 flex gap-3.5 items-center group"
                >
                  <div className="w-16 h-20 shrink-0">
                    <ProductCover product={item.product} size="sm" showBadge={false} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase text-rose-400">
                      {item.product.categoryLabel}
                    </span>
                    <h4 className="text-xs font-bold text-white truncate">
                      {item.product.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 truncate">
                      {item.product.format}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold font-mono text-white">
                        {formatPrice(item.product.priceUSD, currency)}
                      </span>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-zinc-500 hover:text-rose-400 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Footer & Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-zinc-950/80 space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo code (e.g. SHERENZA20)"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg text-xs font-semibold bg-zinc-800 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {discountSuccess && (
                  <p className="text-[11px] text-emerald-400">{discountSuccess}</p>
                )}
                {discountError && (
                  <p className="text-[11px] text-rose-400">{discountError}</p>
                )}
              </form>

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-zinc-400 pt-1 border-t border-white/5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-zinc-300">{formatPrice(subtotalUSD, currency)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({discountPercent}%)</span>
                    <span className="font-mono">-{formatPrice(discountAmountUSD, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/5">
                  <span>Total</span>
                  <span className="font-mono text-base text-rose-400">
                    {formatPrice(totalUSD, currency)}
                  </span>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => onCheckout(discountPercent)}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 shadow-xl shadow-rose-950/40 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Proceed to Instant Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant file access + 14-day refund guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
