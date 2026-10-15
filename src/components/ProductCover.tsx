import React from 'react';
import { Product } from '../types';
import { BookOpen, Layout, Sparkles, Figma, Package, CheckCircle2 } from 'lucide-react';

interface ProductCoverProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showBadge?: boolean;
}

export const ProductCover: React.FC<ProductCoverProps> = ({
  product,
  size = 'md',
  className = '',
  showBadge = true,
}) => {
  const { coverTheme } = product;

  // Icon mapping
  const renderIcon = () => {
    const iconClass = "w-4 h-4 md:w-5 md:h-5 text-white/90";
    switch (coverTheme.iconType) {
      case 'book': return <BookOpen className={iconClass} />;
      case 'layout': return <Layout className={iconClass} />;
      case 'sparkles': return <Sparkles className={iconClass} />;
      case 'figma': return <Figma className={iconClass} />;
      case 'package': return <Package className={iconClass} />;
      default: return <BookOpen className={iconClass} />;
    }
  };

  const isHero = size === 'hero';
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <div
      className={`relative select-none overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:scale-[1.02] ${
        isHero
          ? 'aspect-[3/4] w-full max-w-[340px] md:max-w-[380px]'
          : isLarge
          ? 'aspect-[3/4] w-full'
          : isSmall
          ? 'aspect-[4/3] w-24'
          : 'aspect-[4/3] sm:aspect-[3/4] w-full'
      } ${className}`}
      style={{
        background: `linear-gradient(145deg, ${coverTheme.gradientFrom} 0%, #0d0f18 60%, ${coverTheme.gradientTo} 100%)`,
      }}
    >
      {/* Subtle realistic lighting gleam / diagonal gradient sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none" />
      
      {/* Spine shadow for realistic book / editorial depth on left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none z-10" />
      <div className="absolute left-3 md:left-4 top-0 bottom-0 w-[1px] bg-white/10 pointer-events-none z-10" />

      {/* Decorative geometric subtle background rings */}
      <div 
        className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-white/5 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${coverTheme.accentColor}15 0%, transparent 70%)` }}
      />
      <div 
        className="absolute -right-6 -bottom-10 w-40 h-40 rounded-full border border-white/5 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${coverTheme.accentColor}10 0%, transparent 60%)` }}
      />

      {/* Content layout */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-5 md:p-6 text-left">
        {/* Top bar with category stamp & format tag */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: coverTheme.accentColor }} />
            <span className="text-[10px] md:text-[11px] font-semibold tracking-wider uppercase text-zinc-300">
              {product.categoryLabel}
            </span>
          </div>

          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md">
            {renderIcon()}
          </div>
        </div>

        {/* Center Title and Visual Lockup */}
        <div className="my-auto py-2">
          <div className="inline-block text-[10px] tracking-widest font-mono text-zinc-400 uppercase mb-1">
            Sherenza Digital
          </div>
          <h3 
            className={`font-display font-bold text-white tracking-tight leading-[1.15] drop-shadow-md ${
              isHero ? 'text-2xl sm:text-3xl' : isLarge ? 'text-xl sm:text-2xl' : isSmall ? 'text-xs' : 'text-lg sm:text-xl'
            }`}
          >
            {product.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-zinc-300/80 mt-1.5 line-clamp-2 leading-relaxed">
            {coverTheme.tagline}
          </p>
        </div>

        {/* Bottom Bar: Format specification & Seal */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-zinc-400">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-zinc-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">{product.pagesOrItems}</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
            VERIFIED ASSET
          </span>
        </div>
      </div>

      {/* Floating Bestseller / New pill badge if available and enabled */}
      {showBadge && product.badge && (
        <div className="absolute top-3 right-3 z-20">
          <span 
            className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-md shadow-lg backdrop-blur-md border border-white/20 text-white"
            style={{
              backgroundColor: `${coverTheme.accentColor}cc`,
            }}
          >
            {product.badge}
          </span>
        </div>
      )}
    </div>
  );
};
