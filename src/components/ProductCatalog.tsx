import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Star, ShoppingBag, Eye, Check, X } from 'lucide-react';
import { Product, Category, Currency } from '../types';
import { ProductCover } from './ProductCover';
import { formatPrice } from '../utils/formatters';

interface ProductCatalogProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
  currency: Currency;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  cartProductIds,
  currency,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Products' },
    { key: 'notion', label: 'Notion Systems' },
    { key: 'ebooks', label: 'Ebooks' },
    { key: 'guides', label: 'Guides & Kits' },
    { key: 'prompts', label: 'AI Prompts' },
    { key: 'design', label: 'UI Kits' },
    { key: 'bundles', label: 'Bundles' },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesSearch =
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
        if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // default featured
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-left space-y-3 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-rose-400 tracking-wider uppercase font-semibold">
          <span>Curated Digital Assets</span>
          <span className="text-zinc-600">/</span>
          <span>Instant Download</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Our products
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Every asset is a meticulously crafted digital file you receive instantly after checkout.
          Duplicate templates, read PDFs, or copy system prompts with lifetime updates included.
        </p>
      </div>

      {/* Controls Bar: Search, Category Filters, Sort */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-white/10">
        {/* Category Pills (Functional Tabs) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.key
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-900/30'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort Area */}
        <div className="flex items-center gap-2.5">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-lg pl-9 pr-8 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative shrink-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-zinc-900/90 border border-white/10 rounded-lg px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-rose-500 cursor-pointer appearance-none pr-8"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center rounded-2xl border border-dashed border-white/10 bg-zinc-900/40">
          <p className="text-zinc-400 text-sm">No products matched your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-2 text-xs font-semibold text-rose-400 bg-rose-500/10 rounded-lg hover:bg-rose-500/20 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => {
            const inCart = cartProductIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/60 border border-white/10 p-5 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Visual Cover Area */}
                <div
                  className="cursor-pointer mb-5"
                  onClick={() => onSelectProduct(product)}
                >
                  <ProductCover product={product} size="md" />
                </div>

                {/* Metadata & Title */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Quiet Metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5">
                      <span className="font-mono text-rose-400">{product.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{product.format}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-display text-lg font-bold text-white group-hover:text-rose-300 transition-colors cursor-pointer"
                    >
                      {product.title}
                    </h3>

                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Rating & Pricing Row */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-white font-mono tabular-nums">{product.rating}</span>
                      <span className="text-zinc-500">({product.reviewsCount})</span>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-bold font-mono text-white tabular-nums">
                        {formatPrice(product.priceUSD, currency)}
                      </div>
                      <div className="text-[11px] text-zinc-500 line-through font-mono tabular-nums">
                        {formatPrice(product.originalPriceUSD, currency)}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: Preview + Add to Cart */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-zinc-300 bg-zinc-800/80 hover:bg-zinc-700 hover:text-white border border-white/10 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>

                    <button
                      onClick={() => onAddToCart(product)}
                      className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                        inCart
                          ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-950/40'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Cart</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
