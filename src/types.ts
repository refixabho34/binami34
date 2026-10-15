export type Category = 'all' | 'notion' | 'ebooks' | 'guides' | 'prompts' | 'design' | 'bundles';

export type Currency = 'USD' | 'EUR' | 'MAD';

export interface ProductItemContent {
  title: string;
  description: string;
}

export interface SampleChapter {
  title: string;
  excerpt: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  category: Category;
  categoryLabel: string;
  priceUSD: number;
  originalPriceUSD: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  format: string;
  fileType: 'notion' | 'pdf' | 'figma' | 'zip' | 'bundle';
  fileSize: string;
  pagesOrItems: string;
  highlights: string[];
  whatsInside: ProductItemContent[];
  sampleChapters: SampleChapter[];
  coverTheme: {
    gradientFrom: string;
    gradientTo: string;
    accentColor: string;
    tagline: string;
    iconType: 'book' | 'layout' | 'sparkles' | 'figma' | 'package';
  };
  sampleDownloadText: string;
  sampleFileName: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  handle: string;
  role: string;
  avatarText: string;
  rating: number;
  content: string;
  productTitle: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
