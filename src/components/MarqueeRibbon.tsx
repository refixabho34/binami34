import React from 'react';
import { Sparkles } from 'lucide-react';

interface MarqueeRibbonProps {
  onCategoryClick?: (category: string) => void;
}

export const MarqueeRibbon: React.FC<MarqueeRibbonProps> = ({ onCategoryClick }) => {
  const items = [
    'Notion Operating Systems',
    'Ebooks & Guides',
    'Prompt Engineering Vaults',
    'Figma UI Systems',
    'Viral Hook Vaults',
    'Client Pitch Kits',
    'Solopreneur Planners',
    'Checklists & Workbooks',
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-rose-500/20 bg-gradient-to-r from-rose-950/40 via-zinc-900 to-rose-950/40 py-3.5 select-none">
      {/* Gradient edges for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0c0d12] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0c0d12] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs md:text-sm font-medium tracking-wider uppercase text-rose-200/90">
        {[...items, ...items].map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-6 cursor-pointer hover:text-white transition-colors"
            onClick={() => {
              if (onCategoryClick) {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="font-display italic lowercase text-base tracking-normal text-rose-400 font-semibold">
              ✦
            </span>
            <span className="font-semibold tracking-wide">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
