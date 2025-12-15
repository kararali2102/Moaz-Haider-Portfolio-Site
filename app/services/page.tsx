'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      name: 'Technical SEO',
      slug: 'technical-seo',
      description: 'Fix crawlability issues, optimize site speed, and ensure search engines can properly index your kitchen remodeling portfolio and service pages.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: 'Local SEO',
      slug: 'local-seo',
      description: 'Dominate local search results for "kitchen remodeling near me" and service area searches. Optimize Google Business Profile and local citations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: 'E-commerce SEO',
      slug: 'ecommerce-seo',
      description: 'Optimize your kitchen products, cabinet sales, and material e-commerce store for maximum visibility and conversions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: 'Content SEO',
      slug: 'content-seo',
      description: 'Create topically authoritative content that answers homeowner questions and establishes your kitchen remodeling expertise.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      name: 'Link Building',
      slug: 'link-building',
      description: 'Earn high-quality backlinks from home design publications, industry associations, and local partnerships to build authority.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      name: 'On-Page SEO',
      slug: 'on-page-seo',
      description: 'Optimize title tags, meta descriptions, headers, and content structure for maximum relevance and click-through rates.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: 'Off-Page SEO',
      slug: 'off-page-seo',
      description: 'Build brand mentions, social signals, and external authority to strengthen your kitchen remodeling business reputation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      name: 'SEO Audit',
      slug: 'seo-audit',
      description: 'Comprehensive analysis of your kitchen remodeling website to identify opportunities and technical issues holding back rankings.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      name: 'Keyword Research',
      slug: 'keyword-research',
      description: 'Discover high-intent keywords that homeowners use when searching for kitchen remodeling services in your market.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      name: 'Competitor Analysis',
      slug: 'competitor-analysis',
      description: 'Analyze what\'s working for top-ranking kitchen remodeling competitors and find gaps you can exploit to outrank them.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  const cmsPlatforms = [
    {
      name: 'WordPress SEO',
      description: 'Most kitchen remodeling businesses use WordPress. I optimize Yoast/RankMath, fix plugin conflicts, and enhance Core Web Vitals.',
      challenges: ['Slow page speed from heavy themes', 'Plugin conflicts affecting crawlability', 'Duplicate content from categories/tags'],
    },
    {
      name: 'Shopify SEO',
      description: 'Selling kitchen products or cabinets online? I optimize product pages, collections, and solve Shopify\'s unique SEO limitations.',
      challenges: ['Limited URL structure control', 'Duplicate content issues', 'Theme performance optimization'],
    },
    {
      name: 'Wix SEO',
      description: 'Wix has improved, but requires expert optimization. I maximize Wix SEO tools and overcome platform limitations.',
      challenges: ['JavaScript rendering issues', 'Limited schema markup control', 'Mobile optimization challenges'],
    },
    {
      name: 'Squarespace SEO',
      description: 'Beautiful templates that need SEO fine-tuning. I optimize Squarespace sites for better kitchen remodeling visibility.',
      challenges: ['Template-based limitations', 'URL structure optimization', 'Advanced schema implementation'],
    },
    {
      name: 'Webflow SEO',
      description: 'Webflow offers excellent SEO potential. I leverage its clean code and flexibility for maximum rankings.',
      challenges: ['CMS collection optimization', 'Dynamic content structure', 'Site speed at scale'],
    },
    {
      name: 'Magento SEO',
      description: 'Enterprise e-commerce for large kitchen product catalogs. I handle complex technical SEO and product optimization.',
      challenges: ['Complex URL structures', 'Faceted navigation issues', 'Large-scale indexation management'],
    },
    {
      name: 'Drupal SEO',
      description: 'Powerful CMS requiring technical expertise. I optimize Drupal sites for kitchen remodeling businesses.',
      challenges: ['Module conflicts', 'Complex taxonomy structures', 'Performance optimization'],
    },
    {
      name: 'Joomla SEO',
      description: 'Less common but capable platform. I optimize Joomla sites for better kitchen remodeling search visibility.',
      challenges: ['Extension management', 'URL optimization', 'Modern SEO feature implementation'],
    },
  ]

  const processSteps = [
    {
      week: 'Week 1-2',
      title: 'Discovery & Strategic Foundation',
      tasks: [
        'Deep dive into your kitchen remodeling business goals',
        'Comprehensive technical SEO audit',
        'Competitor analysis and gap identification',
        'Keyword research and intent mapping',
        'Strategic roadmap creation',
      ],
    },
    {
      week: 'Week 3-4',
      title: 'Technical & On-Page Optimization',
      tasks: [
        'Fix critical technical SEO issues',
        'Optimize site architecture and internal linking',
        'On-page optimization (titles, metas, headers)',
        'Schema markup implementation',
        'Core Web Vitals improvements',
      ],
    },
    {
      week: 'Week 5-8',
      title: 'Content & Authority Building',
      tasks: [
        'Create topically authoritative content',
        'Optimize existing project pages',
        'Build semantic content clusters',
        'Initiate white-hat link building',
        'Local SEO optimization',
      ],
    },
    {
      week: 'Month 3+',
      title: 'Scale & Dominate',
      tasks: [
        'Expand to additional service area keywords',
        'Continuous content optimization',
        'Authority building acceleration',
        'Conversion rate optimization',
        'Competitive monitoring and adaptation',
      ],
    },
  ]

  const tools = [
    {
      category: 'Analytics & Tracking',
      tools: ['Google Search Console', 'Google Analytics 4', 'Looker Studio', 'Position tracking tools'],
    },
    {
      category: 'Technical SEO',
      tools: ['Screaming Frog', 'PageSpeed Insights', 'GTmetrix', 'Chrome DevTools'],
    },
    {
      category: 'Research & Analysis',
      tools: ['Ahrefs', 'SEMrush', 'Keyword clustering tools', 'Entity analysis tools'],
    },
    {
      category: 'Optimization',
      tools: ['Schema markup generators', 'Image optimization tools', 'HTML validators', 'Mobile testing tools'],
    },
  ]

  const rankingFactors = [
    {
      factor: 'Topical Authority',
      description: 'Comprehensive coverage of kitchen remodeling topics establishes you as the go-to expert in your niche.',
    },
    {
      factor: 'Entity Relationships',
      description: 'Google understands semantic connections between kitchen remodeling concepts, services, and materials.',
    },
    {
      factor: 'Search Intent Satisfaction',
      description: 'Your content must match what homeowners actually want when searching for kitchen renovation information.',
    },
    {
      factor: 'Core Web Vitals',
      description: 'Fast loading, stable, and responsive websites rank better and convert more visitors into leads.',
    },
    {
      factor: 'Content Depth & Structure',
      description: 'Well-organized, comprehensive content with proper heading hierarchy signals quality to Google.',
    },
    {
      factor: 'Internal Linking',
      description: 'Strategic internal links distribute authority and help Google understand your site structure.',
    },
    {
      factor: 'Brand & Trust Signals',
      description: 'Reviews, citations, mentions, and backlinks from trusted sources build brand authority.',
    },
    {
      factor: 'Helpful Content System',
      description: 'Content created for people (not just search engines) that demonstrates real expertise.',
    },
  ]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Kitchen Remodeling SEO Services',
            description: 'Comprehensive SEO services designed exclusively for kitchen remodeling businesses, contractors, and designers.',
            url: 'https://moazhaider.com/services',
            provider: {
              '@type': 'ProfessionalService',
              name: 'Moaz Haider - Kitchen Remodeling SEO Services',
              description: 'Specialized SEO services for kitchen remodeling businesses',
              areaServed: 'Worldwide',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Kitchen Remodeling SEO Services',
                itemListElement: services.map((service, index) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    description: service.description,
                  },
                })),
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-surface-darker dark:via-background-dark dark:to-surface-darker overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-400/30 rounded-full px-5 py-2.5 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-800 dark:text-primary-300">
                Complete SEO Service Suite
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              Kitchen Remodeling <span className="text-gradient">SEO Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed font-medium">
              Specialized SEO services built exclusively for kitchen remodeling contractors, designers, and renovation companies. 
              No generic packages—just strategic, niche-focused optimization that drives qualified leads.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your Free Kitchen Remodeling SEO Audit
              </motion.a>
              <motion.a
                href="tel:+923024698992"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Book a Strategy Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-background-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Complete <span className="text-gradient">SEO Service Suite</span>
            </h2>
            <p className="section-subtitle">
              Every service is tailored specifically for kitchen remodeling businesses, 
              ensuring maximum relevance and ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="card-gradient group block h-full"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-gray-50 dark:bg-background-darker">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="section-title">
                What Makes <span className="text-gradient">My Approach Different</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: '100% Niche Focus',
                  description: 'I work exclusively with kitchen remodeling businesses. This means I understand your industry, customers, and competition better than any generalist SEO agency.',
                },
                {
                  title: 'No Generic Packages',
                  description: 'Every strategy is custom-built for your specific market, service area, and business goals. No cookie-cutter solutions or one-size-fits-all approaches.',
                },
                {
                  title: 'Semantic SEO & Topical Authority',
                  description: 'I don\'t just target keywords—I build comprehensive topical authority that positions you as the expert resource in kitchen remodeling SEO.',
                },
                {
                  title: 'Conversion-Focused Optimization',
                  description: 'Rankings mean nothing without leads. Every optimization is designed to attract high-intent homeowners ready to invest in kitchen renovations.',
                },
                {
                  title: 'Long-Term Sustainable Rankings',
                  description: 'White-hat strategies that build lasting authority. No black-hat tactics that risk penalties. Your rankings are built to last years, not months.',
                },
                {
                  title: 'Transparent Reporting',
                  description: 'Monthly reports showing exactly what I\'m doing, what\'s working, and how your investment translates into leads and revenue.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-border-dark"
                >
                  <h3 className="text-xl font-bold font-heading mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CMS Expertise Section */}
      <section className="section-padding bg-white dark:bg-background-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              SEO for Kitchen Remodeling Websites <span className="text-gradient">on Any CMS</span>
            </h2>
            <p className="section-subtitle">
              Expert optimization for all major content management systems and e-commerce platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cmsPlatforms.map((cms, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-border-dark hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300"
              >
                <h3 className="text-lg font-bold font-heading mb-3 text-gray-900 dark:text-white">
                  {cms.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {cms.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Common Challenges:
                  </p>
                  {cms.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{challenge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-background-darker">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              How I Deliver <span className="text-gradient">SEO Success</span>
            </h2>
            <p className="section-subtitle">
              A proven timeline for transforming your kitchen remodeling website into a lead-generating machine
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-border-dark"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
                        {step.week}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="section-padding bg-white dark:bg-background-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Professional <span className="text-gradient">SEO Tools & Technology</span>
            </h2>
            <p className="section-subtitle">
              Industry-leading tools and platforms to deliver measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-border-dark"
              >
                <h3 className="text-lg font-bold font-heading mb-4 text-gray-900 dark:text-white">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{tool}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking Factors */}
      <section className="section-padding bg-gray-50 dark:bg-background-darker">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Google Ranking Factors <span className="text-gradient">That Matter in 2025</span>
            </h2>
            <p className="section-subtitle">
              Modern SEO is about more than just keywords—it's about comprehensive optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {rankingFactors.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg border border-gray-200 dark:border-border-dark"
              >
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900 dark:text-white">
                  {item.factor}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding bg-white dark:bg-background-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="section-title">
                Why Kitchen Remodelers <span className="text-gradient">Choose Me</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-12 border border-primary-400/30"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    ),
                    title: 'Kitchen Remodeling SEO Specialist',
                    description: 'Not a generalist—I focus exclusively on kitchen remodeling businesses.',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                    title: 'Transparent Monthly Reporting',
                    description: 'See exactly what I\'m doing and how it impacts your leads and revenue.',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'ROI-Driven Strategy',
                    description: 'Every optimization is designed to generate qualified leads and increase revenue.',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ),
                    title: 'No Long-Term Contracts',
                    description: 'Month-to-month engagement. Stay because you see results, not because you\'re locked in.',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    ),
                    title: 'Direct Access to Expert',
                    description: 'Work directly with me—no account managers or junior staff.',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    title: 'Fast Implementation',
                    description: 'No bureaucracy or delays. I move quickly to capitalize on opportunities.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary-600 dark:text-primary-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="section-padding bg-gray-50 dark:bg-background-darker">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="section-title">
                Why SEO Matters for <span className="text-gradient">Your Kitchen Remodeling Business</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'High-Intent Kitchen Remodeling Searches',
                  description: 'Homeowners searching for "kitchen remodeling near me" or "kitchen renovation cost" are actively planning projects. These are your ideal customers at the perfect moment.',
                },
                {
                  title: 'Competitive Local Markets',
                  description: 'Kitchen remodeling is highly competitive. Without strong SEO, you\'re invisible to homeowners searching online—and they\'re hiring your competitors instead.',
                },
                {
                  title: 'High-Ticket Project Value',
                  description: 'Kitchen remodeling projects average $25,000-$75,000+. A single SEO-generated lead can deliver massive ROI compared to paid advertising.',
                },
                {
                  title: 'Long-Term Growth Asset',
                  description: 'Unlike paid ads that stop when you stop paying, SEO builds cumulative authority. Your rankings compound over time, generating consistent leads month after month.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-border-dark"
                >
                  <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-500/20 via-gray-50 to-accent-500/20 dark:from-primary-500/10 dark:via-background-dark dark:to-accent-500/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 text-gray-900 dark:text-white">
              Ready to Dominate Kitchen Remodeling Search?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Let's build a customized SEO strategy that turns your website into a 24/7 lead generation machine. 
              Get your free audit and discover untapped opportunities today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your Free Kitchen Remodeling SEO Audit
              </motion.a>
              <motion.a
                href="tel:+923024698992"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Talk to a Kitchen Remodeling SEO Expert
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
