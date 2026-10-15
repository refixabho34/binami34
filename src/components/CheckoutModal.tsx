import React, { useState } from 'react';
import { X, CheckCircle2, Download, Lock, CreditCard, Sparkles, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice, triggerDownload } from '../utils/formatters';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  productsToBuy: Product[];
  discountPercent: number;
  currency: Currency;
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  productsToBuy,
  discountPercent,
  currency,
  onOrderCompleted,
}) => {
  const [step, setStep] = useState<'checkout' | 'success'>('checkout');
  const [customerEmail, setCustomerEmail] = useState('creator@example.com');
  const [customerName, setCustomerName] = useState('Yassine Alami');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);
  const [orderId] = useState(`SHZ-${Math.floor(100000 + Math.random() * 900000)}`);

  if (!isOpen || productsToBuy.length === 0) return null;

  const subtotalUSD = productsToBuy.reduce((sum, p) => sum + p.priceUSD, 0);
  const discountUSD = subtotalUSD * (discountPercent / 100);
  const totalUSD = Math.max(0, subtotalUSD - discountUSD);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      onOrderCompleted();
    }, 1200);
  };

  const handleDownloadItem = (product: Product) => {
    triggerDownload(product.sampleFileName, product.sampleDownloadText);
    setDownloadedIds((prev) => [...prev, product.id]);
  };

  const handleDownloadAll = () => {
    productsToBuy.forEach((p) => {
      triggerDownload(p.sampleFileName, p.sampleDownloadText);
    });
    setDownloadedIds(productsToBuy.map((p) => p.id));
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200"
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

        {step === 'checkout' ? (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="text-left space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>256-Bit Encrypted Secure Checkout</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Complete Your Order
              </h3>
              <p className="text-xs text-zinc-400">
                You will receive instant download links on the next screen and via email.
              </p>
            </div>

            {/* Order Items Preview */}
            <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-white/5 space-y-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                Items ({productsToBuy.length}):
              </div>
              {productsToBuy.map((p) => (
                <div key={p.id} className="flex items-center justify-between text-xs py-1 border-b last:border-0 border-white/5">
                  <div className="truncate pr-3">
                    <span className="font-semibold text-white">{p.title}</span>
                    <span className="text-zinc-500 ml-2">({p.format})</span>
                  </div>
                  <span className="font-mono text-zinc-300 shrink-0 font-medium">
                    {formatPrice(p.priceUSD, currency)}
                  </span>
                </div>
              ))}

              <div className="pt-2 flex justify-between items-center text-sm font-bold text-white border-t border-white/10">
                <span>Total Due:</span>
                <span className="font-mono text-rose-400 text-base">
                  {formatPrice(totalUSD, currency)}
                </span>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmitOrder} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-300">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-300">Email (Files Sent Here)</label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-300">Select Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-rose-500 bg-rose-500/10 text-white'
                        : 'border-white/10 bg-zinc-950/60 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Card / CMI</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'applepay'
                        ? 'border-rose-500 bg-rose-500/10 text-white'
                        : 'border-white/10 bg-zinc-950/60 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span> Apple Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'paypal'
                        ? 'border-rose-500 bg-rose-500/10 text-white'
                        : 'border-white/10 bg-zinc-950/60 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {/* Payment Details Mock Input */}
              {paymentMethod === 'card' && (
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/5 space-y-2.5">
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Card Number: •••• •••• •••• 4242
                  </div>
                  <div className="flex gap-2 text-[11px] text-zinc-400 font-mono">
                    <span>Expires: 12/28</span>
                    <span>·</span>
                    <span>CVC: •••</span>
                    <span className="ml-auto text-emerald-400">Encrypted</span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 shadow-xl shadow-rose-950/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Authorizing & Preparing Downloads...</span>
                  </div>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Pay {formatPrice(totalUSD, currency)} & Download Files</span>
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Guaranteed delivery. Receipt sent to your email instantly.</span>
            </div>
          </div>
        ) : (
          /* SUCCESS SCREEN */
          <div className="p-6 sm:p-8 space-y-6 text-center animate-in zoom-in-95 duration-200">
            {/* Animated Celebration Icon */}
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-950/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
                Order Confirmed · #{orderId}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Your Digital Files Are Ready!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mt-2">
                We sent your receipt and lifetime access backup to <span className="text-white font-medium">{customerEmail}</span>.
              </p>
            </div>

            {/* Download Action Area */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-3 text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="text-xs font-bold text-white">Your Purchased Downloads</div>
                <button
                  onClick={handleDownloadAll}
                  className="text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download All (.zip)</span>
                </button>
              </div>

              <div className="space-y-2">
                {productsToBuy.map((product) => {
                  const hasDownloaded = downloadedIds.includes(product.id);

                  return (
                    <div
                      key={product.id}
                      className="p-3 rounded-lg bg-zinc-900/90 border border-white/5 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {product.title}
                        </div>
                        <div className="text-[11px] text-zinc-400 truncate">
                          {product.sampleFileName} ({product.fileSize})
                        </div>
                      </div>

                      <button
                        onClick={() => handleDownloadItem(product)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0 ${
                          hasDownloaded
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-rose-600 hover:bg-rose-500 text-white'
                        }`}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{hasDownloaded ? 'Downloaded' : 'Download'}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Notion Access & Next Steps */}
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200 text-left space-y-1.5">
              <div className="font-semibold flex items-center gap-1.5 text-indigo-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Step: Duplicate into your personal Notion or Figma</span>
              </div>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                Check the downloaded text files or your confirmation email for the one-click duplicate links and video walkthrough passwords.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors"
            >
              Done & Return to Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
