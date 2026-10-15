import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Mail, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              Message Received!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
              Chokran! Our team answers all inquiries within 2 hours. A confirmation has been sent to your email.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors"
            >
              Back to Store
            </button>
          </div>
        ) : (
          <div className="space-y-5 text-left">
            <div>
              <div className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold">
                Get In Touch
              </div>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Contact Sherenza Support
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Have a question about a product, custom bundle, or need download assistance? We are here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Yassine"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>support@sherenza.store</span>
              </div>
              <span>Response time: &lt; 2 hrs</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
