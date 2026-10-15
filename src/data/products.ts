import { Product, FAQItem, Review } from '../types';

export const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1, prefix: true },
  EUR: { symbol: '€', rate: 0.92, prefix: false },
  MAD: { symbol: 'MAD ', rate: 10.0, prefix: true }, // Moroccan Dirham rate
};

export const PRODUCTS: Product[] = [
  {
    id: 'solo-creator-os',
    title: 'Solo Creator OS',
    slug: 'solo-creator-os',
    subtitle: 'The all-in-one Notion operating system for high-output digital creators and solopreneurs.',
    description: 'Stop juggling 12 different disconnected apps. Solo Creator OS integrates your content pipeline, digital product roadmap, client CRM, revenue tracking, and daily focus dashboard into one seamless workspace.',
    category: 'notion',
    categoryLabel: 'Notion System',
    priceUSD: 39,
    originalPriceUSD: 79,
    rating: 4.96,
    reviewsCount: 342,
    badge: 'Bestseller',
    format: 'Notion Workspace + Setup Video',
    fileType: 'notion',
    fileSize: 'Instant Duplicate (14 MB assets)',
    pagesOrItems: '18 Interconnected Databases',
    highlights: [
      'Multi-platform Content Editorial Calendar (X, IG, YouTube, LinkedIn)',
      'Digital Product Launch Sprint & Milestone Tracker',
      'Client Pipeline CRM with automated status stages',
      'Revenue & Recurring Income Dashboard',
      'Includes 35-minute video walkthrough & setup tutorial'
    ],
    whatsInside: [
      { title: 'Core Command Hub', description: 'Your daily focus zone: priority matrix, tasks due today, active sprints, and weekly reflections.' },
      { title: 'Content Engine 2.0', description: 'Idea repository, research vault, drafting workspace, script templates, and publishing schedule.' },
      { title: 'Product Launch Framework', description: 'Pre-launch validation checklist, email sequence builder, launch calendar, and sales counter.' },
      { title: 'Finance & Invoicing Tracker', description: 'Log gross revenue, track digital storefront fees, monitor MRR, and project annual growth.' }
    ],
    sampleChapters: [
      {
        title: 'System Architecture & Quick Start',
        excerpt: 'The Solo Creator OS is built around 3 core pillars: Capture, Synthesis, and Distribution. Unlike rigid setups that require manual tagging for every small note, our relational architecture connects your daily brain-dumps directly into content drafts and launch sprints automatically.'
      },
      {
        title: 'The 7-Day Sprint Routine',
        excerpt: 'Every Monday morning, your Weekly Review board resets. Drag pending tasks from your Backlog into the Active Sprint column. The built-in velocity formula will calculate your output capacity so you never overcommit.'
      }
    ],
    coverTheme: {
      gradientFrom: '#1e1b4b',
      gradientTo: '#0f172a',
      accentColor: '#818cf8',
      tagline: 'All-In-One Notion Hub',
      iconType: 'layout'
    },
    sampleFileName: 'Sherenza-Solo-Creator-OS-Guide.md',
    sampleDownloadText: `# Sherenza: Solo Creator OS — Quickstart & Access Guide

Thank you for your purchase! Here is your exclusive access information.

## 🔗 Your Notion Template Link:
https://notion.so/sherenza-templates/solo-creator-os-v3-duplicate

### How to install:
1. Click the link above.
2. In the top right corner, click **"Duplicate"** to copy the workspace to your private Notion account.
3. Watch the included 15-minute video walkthrough embedded on the homepage.

---
## What is included in this bundle:
- 18 Interlinked Relational Databases
- Content Planner (Cross-Platform)
- Solopreneur Financial Dashboard
- Product Launch Blueprint & Checklist
- Client CRM & Contract Templates

Need support? Contact us at support@sherenza.store
`
  },
  {
    id: 'digital-empire-blueprint',
    title: 'Digital Empire Blueprint',
    slug: 'digital-empire-blueprint',
    subtitle: 'From zero audience to $10,000/month selling high-margin digital products.',
    description: 'A 158-page tactical playbook breaking down how to validate, build, price, and launch digital products without paying for ads or having thousands of followers.',
    category: 'ebooks',
    categoryLabel: 'Ebook & Guide',
    priceUSD: 29,
    originalPriceUSD: 59,
    rating: 4.92,
    reviewsCount: 218,
    badge: 'Popular',
    format: 'PDF Ebook (158 Pages) + Audio Summary',
    fileType: 'pdf',
    fileSize: '42 MB (High-Res PDF + MP3)',
    pagesOrItems: '158 Pages · 12 Chapters',
    highlights: [
      'The 4-hour product validation framework (avoid building what nobody buys)',
      'Pricing psychology: why $39 converts better than $19',
      'The 7-day email launch sequence with copy-paste templates',
      'How to build organic traffic on X, LinkedIn, and TikTok',
      'Complete case study: $48,000 in 90 days with 1 guide'
    ],
    whatsInside: [
      { title: 'Chapter 1: The Zero-Friction Product Selection', description: 'Pinpoint skills people already ask you about and turn them into lucrative digital assets.' },
      { title: 'Chapter 2: Rapid Prototyping & Packaging', description: 'Design high-converting covers, mockups, and bonus structures without hiring expensive designers.' },
      { title: 'Chapter 3: The High-Converting Landing Page Architecture', description: 'The exact 8-section layout that turns casual visitors into immediate buyers.' },
      { title: 'Chapter 4: The Organic Launch Flywheel', description: 'How to build anticipation, run beta presales, and execute a flawless launch week.' }
    ],
    sampleChapters: [
      {
        title: 'Excerpt: The Myth of Needing 100k Followers',
        excerpt: 'Most aspiring digital product creators spend years trying to build a massive follower count before ever launching a single offer. This is backwards. You do not need 50,000 followers. What you need is 500 people who view you as the definitive guide to solving one specific, painful problem.'
      },
      {
        title: 'Excerpt: The 4-Tier Pricing Grid',
        excerpt: 'When pricing digital assets, never sell an isolated file. Frame it as a system. Tier 1 ($29) provides the core book. Tier 2 ($49) includes the working templates. Tier 3 ($99) bundles video walkthroughs and community access. Notice how 60% of buyers naturally gravitate to Tier 2.'
      }
    ],
    coverTheme: {
      gradientFrom: '#4c0519',
      gradientTo: '#1e1b4b',
      accentColor: '#f43f5e',
      tagline: 'Tactical Playbook (158 Pages)',
      iconType: 'book'
    },
    sampleFileName: 'Sherenza-Digital-Empire-Blueprint-Preview.pdf',
    sampleDownloadText: `# Sherenza — Digital Empire Blueprint (Full Ebook Download)

Welcome to the Digital Empire Blueprint!

## Table of Contents:
1. The Digital Arbitrage Mindset
2. The 3-Question Product Validation Matrix
3. Packaging for Perceived Value (Mockups & Scarcity)
4. Writing High-Converting Sales Pages
5. The 7-Day Pre-Launch Email Sequence
6. Organic Distribution on Social Platforms
7. Building an Automated Post-Purchase Upsell Funnel

Your bonus workbook and audio summaries are included in your downloads folder.
`
  },
  {
    id: 'master-ai-prompt-vault',
    title: 'Master AI Prompt Vault',
    slug: 'master-ai-prompt-vault',
    subtitle: '3,200+ battle-tested prompts for copywriting, marketing, coding, and sales funnels.',
    description: 'Stop getting generic AI outputs. This curated library provides role-tested system prompts, meta-prompts, and chained workflows that turn AI into your senior copywriter, product strategist, and marketing analyst.',
    category: 'prompts',
    categoryLabel: 'AI Prompts Vault',
    priceUSD: 24,
    originalPriceUSD: 49,
    rating: 4.98,
    reviewsCount: 512,
    badge: 'Trending',
    format: 'Notion Database + CSV + Markdown',
    fileType: 'bundle',
    fileSize: '8.4 MB (Data files)',
    pagesOrItems: '3,200+ Categorized Prompts',
    highlights: [
      'Copywriting frameworks: AIDA, PAS, StoryBrand, and hook variations',
      'Full SEO content generation pipelines with anti-detection voice tuning',
      'Cold email outreach templates with 40%+ reply rates',
      'Product launch copy: landing pages, ads, and email sequences',
      'Filterable Notion database with variable tags {{product}}, {{audience}}'
    ],
    whatsInside: [
      { title: 'Copywriting & Content Engine', description: '900+ prompts for newsletters, viral tweets, LinkedIn carousels, and YouTube video scripts.' },
      { title: 'Sales Funnels & Conversion', description: '650+ prompts for high-converting sales letters, VSL scripts, and objection handling.' },
      { title: 'Code & Technical Automation', description: '550+ prompts for React components, Tailwind styling, regex, and Python scrapers.' },
      { title: 'Business Strategy & Finance', description: '400+ prompts for competitor teardowns, positioning audits, and product pricing models.' }
    ],
    sampleChapters: [
      {
        title: 'Master Prompt: The High-Converting Landing Page Auditor',
        excerpt: 'Act as a world-class conversion rate optimization specialist. I will provide you with the copy of my landing page. Analyze it across 5 dimensions: (1) Headline clarity within 3 seconds, (2) Problem agitation depth, (3) Perceived effort vs reward ratio, (4) Trust proof density, and (5) CTA friction points.'
      },
      {
        title: 'Master Prompt: The 10x Viral Hook Machine',
        excerpt: 'Generate 15 contrasting hook angles for the topic {{Topic}}. Include 3 contrarian statements, 3 data-driven surprises, 3 story openers, 3 curiosity gaps, and 3 high-stakes questions.'
      }
    ],
    coverTheme: {
      gradientFrom: '#3b0764',
      gradientTo: '#172554',
      accentColor: '#c084fc',
      tagline: '3,200+ Tested Prompts',
      iconType: 'sparkles'
    },
    sampleFileName: 'Sherenza-AI-Prompt-Vault-Package.zip',
    sampleDownloadText: `# Sherenza: Master AI Prompt Vault (2026 Edition)

Welcome to the definitive collection of 3,200+ engineered AI prompts.

## Files included:
1. Notion Database URL: https://notion.so/sherenza-prompts/master-vault-2026
2. Prompts-Export.csv (Spreadsheet version with all categories)
3. Prompts-Markdown-Reference.md (Offline reference)

Quick Tip: Replace {{placeholders}} with your exact target audience and product for 10x output specificity.
`
  },
  {
    id: 'minimalist-ui-design-kit',
    title: 'Minimalist UI Design Kit',
    slug: 'minimalist-ui-design-kit',
    subtitle: '450+ production-ready Figma components, layouts, and design tokens for web apps.',
    description: 'Designed for engineers and indie founders who want to build stunning, modern SaaS apps and websites without spending weeks designing from scratch. Auto-layout 5.0, dark & light mode, and modern tokens.',
    category: 'design',
    categoryLabel: 'UI Kit & Figma',
    priceUSD: 45,
    originalPriceUSD: 89,
    rating: 4.94,
    reviewsCount: 167,
    badge: 'Creator Pick',
    format: 'Figma File (.fig) + React Component Tokens',
    fileType: 'figma',
    fileSize: '68 MB (.fig + asset pack)',
    pagesOrItems: '450+ Components · 32 Page Screens',
    highlights: [
      'Full Dark & Light mode color variable tokens',
      '450+ components: Navbars, Hero grids, Tables, Cards, Modals, Forms',
      'Built using 100% Figma Auto Layout 5.0 with responsive constraints',
      'Includes Tailwind CSS configuration snippet with matching tokens',
      'Commercial license for unlimited personal and client projects'
    ],
    whatsInside: [
      { title: 'Design Foundation', description: '8pt spatial grid system, curated typography pairings, WCAG-tested color scales, and icon glyphs.' },
      { title: 'Application Layouts', description: 'Complete pre-built screens for SaaS dashboards, checkout drawers, analytics, and settings.' },
      { title: 'Interactive States', description: 'Default, hover, active, disabled, focused, and loading states for all buttons and inputs.' },
      { title: 'Marketing Templates', description: 'High-converting hero sections, pricing tiers, testimonial sliders, and FAQ accordions.' }
    ],
    sampleChapters: [
      {
        title: 'Design Philosophy: Zero Fluff, Maximum Clarity',
        excerpt: 'Every component in this kit adheres to high readability, 4.5:1 contrast standards, and single-elevation depth. No blurry over-saturated glows or decorative badges that confuse end-users.'
      }
    ],
    coverTheme: {
      gradientFrom: '#064e3b',
      gradientTo: '#0f172a',
      accentColor: '#34d399',
      tagline: 'Figma 5.0 + Tailwind Tokens',
      iconType: 'figma'
    },
    sampleFileName: 'Sherenza-Minimalist-UI-Kit.fig',
    sampleDownloadText: `# Sherenza — Minimalist UI Design Kit

Thank you for your purchase!

## Figma File Download & Community Access:
Figma Project Link: https://figma.com/@sherenza/minimalist-ui-system
Downloadable .fig archive included in your receipt.

Tokens summary:
- Primary Neutral: #0c0d12
- Elevated Surface: #151722
- Accent Coral: #f43f5e
- Accent Emerald: #10b981
`
  },
  {
    id: 'viral-creator-hook-vault',
    title: 'Viral Hook & Storytelling Playbook',
    slug: 'viral-creator-hook-vault',
    subtitle: '500+ viral hooks, short-form video retention scripts, and psychological storytelling templates.',
    description: 'Master the art of grabbing attention in the first 2 seconds. Tested across 10M+ views on Instagram Reels, TikTok, and YouTube Shorts to increase watch time and convert viewers into loyal newsletter subscribers.',
    category: 'ebooks',
    categoryLabel: 'Creator Playbook',
    priceUSD: 19,
    originalPriceUSD: 39,
    rating: 4.89,
    reviewsCount: 189,
    badge: 'Best Value',
    format: 'PDF Guide + Notion Hook Database',
    fileType: 'pdf',
    fileSize: '22 MB',
    pagesOrItems: '500+ Viral Hooks · 65 Pages',
    highlights: [
      'The 2-Second Visual & Verbal Hook Matrix',
      'The "Open Loop" Retention Framework that keeps viewers watching',
      '50 Call-To-Action formulas that generate link clicks and DMs',
      'Editable Notion Swipe File with filterable categories',
      'Breakdown of 25 viral case studies with exact script annotations'
    ],
    whatsInside: [
      { title: 'The Hook Anatomy', description: 'Why 90% of videos fail in second one and how to reframe your first sentence for instant curiosity.' },
      { title: 'The 500 Hook Swipe File', description: 'Categorized by niche: business, fitness, lifestyle, software, finance, and productivity.' },
      { title: 'Video Pacing & Editing Checklist', description: 'Cut lists, sound effects timing, B-roll transitions, and text overlay placement rules.' }
    ],
    sampleChapters: [
      {
        title: 'The Curiosity Gap Formula',
        excerpt: 'A weak hook states facts. A viral hook creates an itch that only watching the full video can scratch. Compare: "Here is how I organize my notes" vs "I deleted 4,000 files from my computer and my revenue doubled in 30 days. Here is the single system I kept."'
      }
    ],
    coverTheme: {
      gradientFrom: '#831843',
      gradientTo: '#1e1b4b',
      accentColor: '#f472b6',
      tagline: '500+ Hooks & Video Scripts',
      iconType: 'book'
    },
    sampleFileName: 'Sherenza-Viral-Hook-Vault.pdf',
    sampleDownloadText: `# Sherenza — Viral Hook & Storytelling Playbook

Your copy is ready!
Access your PDF and Notion swipe database here:
- Notion database: https://notion.so/sherenza-hooks/swipe-file
- PDF guide attached to this download.

Enjoy your content creation journey!
`
  },
  {
    id: 'freelance-client-pipeline-vault',
    title: 'Client Acquisition & Contract Vault',
    slug: 'freelance-client-pipeline-vault',
    subtitle: 'Cold outreach scripts, pricing calculators, client contracts, and onboarding checklists.',
    description: 'Everything a freelancer, consultant, or agency owner needs to sign high-paying clients, protect their work with ironclad legal templates, and deliver a 5-star onboarding experience.',
    category: 'guides',
    categoryLabel: 'Freelance & Agency',
    priceUSD: 34,
    originalPriceUSD: 69,
    rating: 4.95,
    reviewsCount: 143,
    badge: 'Essential',
    format: 'Notion Hub + DOCX Legal Contracts + Sheets',
    fileType: 'zip',
    fileSize: '31 MB (ZIP bundle)',
    pagesOrItems: '14 Templates · 6 Legal Contracts',
    highlights: [
      'Lawyer-vetted Master Services Agreement (MSA) and Statement of Work (SOW)',
      'Cold email outreach templates with real 38% response rates',
      'Value-based pricing proposal template that won $15k+ deals',
      'Client onboarding Notion portal with interactive questionnaire',
      'Scope creep prevention clauses and kill-fee agreements'
    ],
    whatsInside: [
      { title: 'Legal Protection Kit', description: 'Full service contracts, NDAs, intellectual property transfer forms, and retainer agreements.' },
      { title: 'Sales & Proposal System', description: 'Interactive proposal deck with slide-by-slide copy guidelines and interactive pricing table.' },
      { title: 'Client Onboarding Portal', description: 'Turnkey Notion dashboard for client communication, asset collection, and milestone tracking.' }
    ],
    sampleChapters: [
      {
        title: 'The Value-Pricing Pitch',
        excerpt: 'Never quote an hourly rate. An hourly rate incentivizes working slowly and invites micromanagement. Frame your fee around the expected business outcome: if your redesign helps them close $100k in new accounts, a $12k project fee is an obvious investment.'
      }
    ],
    coverTheme: {
      gradientFrom: '#14532d',
      gradientTo: '#0f172a',
      accentColor: '#4ade80',
      tagline: 'Contracts + Pitch Decks',
      iconType: 'package'
    },
    sampleFileName: 'Sherenza-Client-Acquisition-Vault.zip',
    sampleDownloadText: `# Sherenza — Client Acquisition & Contract Vault

Your client growth kit is ready for deployment.

Contents:
1. Legal_Master_Service_Agreement.docx
2. Value_Based_Proposal_Deck.key / .pptx
3. Cold_Outreach_Script_Vault.md
4. Client_Onboarding_Notion_Portal.url
`
  },
  {
    id: 'sherenza-all-access-bundle',
    title: 'Sherenza All-Access Bundle',
    slug: 'sherenza-all-access-bundle',
    subtitle: 'Get every current and future Sherenza digital product in one heavily discounted master collection.',
    description: 'Includes the Solo Creator OS, Digital Empire Blueprint, Master AI Prompt Vault, Minimalist UI Design Kit, Viral Hook Vault, and Client Acquisition Vault. Save over 65% plus receive lifetime product updates.',
    category: 'bundles',
    categoryLabel: 'Master Bundle',
    priceUSD: 79,
    originalPriceUSD: 245,
    rating: 4.99,
    reviewsCount: 680,
    badge: 'Ultimate Value — Save 65%',
    format: 'All 6 Master Products + Lifetime Updates',
    fileType: 'bundle',
    fileSize: '185 MB Total Bundle',
    pagesOrItems: 'Complete 6-Pack + All Future Drops',
    highlights: [
      'Instant access to all 6 premium digital products in the store',
      'Free lifetime updates whenever templates or prompt vaults are revised',
      'Exclusive private Discord community invite for creators',
      'Direct email access to the creator team for implementation questions',
      'Unconditional 14-day 100% money-back satisfaction guarantee'
    ],
    whatsInside: [
      { title: 'Solo Creator OS (Notion)', description: 'The complete command center for managing ideas, content, revenue, and clients.' },
      { title: 'Digital Empire Blueprint (PDF)', description: 'The 158-page playbook to build, price, and sell high-margin digital products.' },
      { title: 'Master AI Prompt Vault (3,200+)', description: 'The comprehensive prompt database for marketing, copywriting, and development.' },
      { title: 'Minimalist UI Design Kit (Figma)', description: '450+ auto-layout components and design tokens for web and mobile.' },
      { title: 'Viral Hook & Storytelling Playbook', description: '500+ viral video retention scripts and psychological hooks.' },
      { title: 'Client Acquisition & Contract Vault', description: 'Lawyer-vetted contracts, proposals, and cold pitch scripts.' }
    ],
    sampleChapters: [
      {
        title: 'Master Bundle Welcome & Strategic Roadmap',
        excerpt: 'Welcome to the Sherenza family! Having this entire library gives you an unfair advantage: you have the mindset and roadmap (Digital Empire), the daily execution system (Solo Creator OS), the marketing speed (Prompt Vault & Hooks), and the client tools (Contracts & UI Kit) all operating in harmony.'
      }
    ],
    coverTheme: {
      gradientFrom: '#831843',
      gradientTo: '#312e81',
      accentColor: '#f43f5e',
      tagline: 'Complete 6-Product Master Pack',
      iconType: 'package'
    },
    sampleFileName: 'Sherenza-Master-All-Access-Pack.zip',
    sampleDownloadText: `# Sherenza — All-Access Master Bundle 🚀

Congratulations on securing the Sherenza All-Access Bundle!

## Your Complete Package:
1. Solo Creator OS: https://notion.so/sherenza-templates/solo-creator-os-v3-duplicate
2. Digital Empire Blueprint (158 Pages PDF included)
3. Master AI Prompt Vault (3,200+ Prompts in Notion + CSV)
4. Minimalist UI Design Kit (.fig + Tokens)
5. Viral Hook Playbook (PDF + Database)
6. Client Acquisition Vault (Contracts & Proposals)
7. VIP Creator Discord Invite: https://discord.gg/sherenza-creators

Lifetime License: Active
Support: support@sherenza.store
`
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Karim Bennani',
    handle: '@karimb_tech',
    role: 'SaaS Founder & Creator',
    avatarText: 'KB',
    rating: 5,
    content: 'Solo Creator OS completely replaced my Notion chaos. I used to spend 45 minutes every morning just finding my tasks. Now I open this dashboard and know exactly what to ship. The design is cleaner than anything I have seen.',
    productTitle: 'Solo Creator OS',
    date: '2 days ago',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Sarah Jenkins',
    handle: '@sarahj_design',
    role: 'Product Designer',
    avatarText: 'SJ',
    rating: 5,
    content: 'The Minimalist UI kit alone saved our startup 3 weeks of design back-and-forth. The auto-layout implementation is flawless and the dark mode tokens are dialed in to perfection.',
    productTitle: 'Minimalist UI Design Kit',
    date: '5 days ago',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Amine El Idrissi',
    handle: '@amine_digital',
    role: 'Growth Marketer',
    avatarText: 'AE',
    rating: 5,
    content: 'Swbto b chkal nqi bzaf w khdam fl phone o l-pc b tayara! The AI prompt vault is actually engineered properly, not just lazy one-line prompts. Made back the bundle investment in 48 hours.',
    productTitle: 'Master AI Prompt Vault',
    date: '1 week ago',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Elena Rostova',
    handle: '@elena_solopreneur',
    role: 'Digital Publisher',
    avatarText: 'ER',
    rating: 5,
    content: 'I followed the Digital Empire Blueprint to launch my first mini-guide. Made $3,400 in the first week. The pricing breakdown and email launch scripts are worth 10x the price.',
    productTitle: 'Digital Empire Blueprint',
    date: '2 weeks ago',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Delivery',
    question: 'How and when will I receive my files?',
    answer: 'Instantly! Immediately after your secure checkout, you are redirected to your private download dashboard with direct download links and Notion duplicate buttons. You also receive an instant email confirmation with permanent lifetime access links.'
  },
  {
    category: 'Formats',
    question: 'Do I need paid software or subscriptions to use these?',
    answer: 'No paid software is required. Notion templates work on the 100% free personal tier of Notion. Ebooks are standard high-resolution PDFs viewable on any phone, tablet, or PC. Figma kits can be opened in the free tier of Figma.'
  },
  {
    category: 'Updates',
    question: 'Do I get future updates for free?',
    answer: 'Yes! All Sherenza digital products come with free lifetime updates. Whenever we add new prompts, optimize Notion databases, or add chapters, you will receive an email notification with the updated download link at zero extra cost.'
  },
  {
    category: 'Refunds',
    question: 'What is your refund and satisfaction policy?',
    answer: 'We stand 100% behind the craftsmanship of our digital products. If you review the material and feel it did not deliver immense value, simply send us an email within 14 days and we will issue a full, prompt refund.'
  },
  {
    category: 'Commercial',
    question: 'Can I use these templates for client work?',
    answer: 'Yes. Our UI kits, legal contracts, and prompt workflows include a commercial license allowing you to use them in client deliverables and commercial software. You simply cannot resell the raw templates as competing digital products.'
  }
];
