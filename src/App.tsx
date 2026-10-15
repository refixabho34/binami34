import React, { useState, useEffect } from 'react';
import { PRODUCTS, REVIEWS, FAQS } from './data/products';
import { Product, CartItem, Currency } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { HowItWorks } from './components/HowItWorks';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [checkoutProducts, setCheckoutProducts] = useState<Product[]>([]);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Master bundle featured item
  const masterBundle = PRODUCTS.find((p) => p.id === 'sherenza-all-access-bundle') || PRODUCTS[0];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        showToast(`"${product.title}" is already in your cart.`);
        return prev;
      }
      showToast(`Added "${product.title}" to cart.`);
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleInstantBuy = (product: Product) => {
    setSelectedProduct(null);
    setCheckoutProducts([product]);
    setAppliedDiscount(0);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutFromCart = (discountPercent: number) => {
    setIsCartOpen(false);
    setCheckoutProducts(cart.map((item) => item.product));
    setAppliedDiscount(discountPercent);
    setIsCheckoutOpen(true);
  };

  const handleOrderCompleted = () => {
    // Clear purchased items from cart
    setCart([]);
  };

  const cartProductIds = cart.map((i) => i.product.id);
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0c0d12] text-zinc-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/20 text-white text-xs font-semibold shadow-2xl shadow-black/80 animate-in slide-in-from-top-2 duration-200">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onCurrencyChange={(c) => setCurrency(c)}
        onFeaturedClick={() => setSelectedProduct(masterBundle)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          featuredProduct={masterBundle}
          onSelectProduct={(p) => setSelectedProduct(p)}
          currency={currency}
          onOpenCartWithProduct={(p) => {
            handleAddToCart(p);
            setIsCartOpen(true);
          }}
        />

        {/* Dynamic Infinite Marquee Ribbon */}
        <MarqueeRibbon />

        {/* Interactive Product Catalog */}
        <ProductCatalog
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
          cartProductIds={cartProductIds}
          currency={currency}
        />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Social Proof & Customer Reviews */}
        <ReviewsSection reviews={REVIEWS} />

        {/* FAQ Accordion */}
        <FAQSection faqs={FAQS} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Mobile Sticky Bar for quick cart & checkout */}
      <MobileBottomBar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onExploreBundle={() => setSelectedProduct(masterBundle)}
      />

      {/* Product Detail / Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onInstantBuy={handleInstantBuy}
        inCart={selectedProduct ? cartProductIds.includes(selectedProduct.id) : false}
        currency={currency}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCart([])}
        onCheckout={handleCheckoutFromCart}
        currency={currency}
      />

      {/* Simulated Checkout & Instant Download Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        productsToBuy={checkoutProducts}
        discountPercent={appliedDiscount}
        currency={currency}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Contact & Support Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
