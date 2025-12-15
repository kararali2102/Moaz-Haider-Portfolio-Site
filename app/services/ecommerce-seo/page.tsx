'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EcommerceSEOPage() {
  const problems = [
    {
      title: 'Poor Product Page Rankings',
      description: 'Your cabinet hardware, countertop materials, and fixture product pages aren\'t showing up when homeowners search for them.',
    },
    {
      title: 'Low Conversion Rates',
      description: 'Traffic isn\'t converting because product pages lack optimization, trust signals, and proper call-to-actions.',
    },
    {
      title: 'Weak Category Structure',
      description: 'Disorganized product categories confuse both customers and search engines, hurting discoverability.',
    },
    {
      title: 'Missing Product Schema Markup',
      description: 'Without proper structured data, your products don\'t appear in rich results with pricing, reviews, and availability.',
    },
    {
      title: 'Duplicate Product Content',
      description: 'Manufacturer descriptions used across multiple sites create duplicate content issues that hurt rankings.',
    },
    {
      title: 'Poor Mobile Shopping Experience',
      description: 'Clunky mobile product pages drive away 70%+ of potential customers browsing on smartphones.',
    },
    {
      title: 'Ineffective Internal Linking',
      description: 'Products aren\'t properly linked to related items, cross-sells, or relevant content, reducing sales opportunities.',
    },
  ]

  const included = [
    'Complete e-commerce SEO audit of product catalog',
    'Product page optimization (titles, descriptions, images, CTAs)',
    'Category page structure and optimization',
    'Product schema markup implementation (price, reviews, availability)',
    'Unique product description writing',
    'Internal linking strategy for cross-sells and upsells',
    'Faceted navigation optimization',
    'Shopping feed optimization (Google Merchant Center)',
    'Review schema integration',
    'Site speed optimization for product pages',
    'Mobile e-commerce UX optimization',
    'Product image optimization and alt text',
    'Breadcrumb implementation',
    'Out-of-stock and discontinued product handling',
    'Collection and category page SEO',
    'Conversion rate optimization recommendations',
  ]

  const faqs = [
    {
      question: 'What is e-commerce SEO for kitchen remodeling businesses?',
      answer: 'E-commerce SEO optimizes online stores selling kitchen remodeling products—cabinets, countertops, fixtures, hardware, and materials. It focuses on ranking product pages, optimizing category structure, implementing product schema, and converting traffic into sales through strategic optimization.',
    },
    {
      question: 'How long does e-commerce SEO take to increase online sales?',
      answer: 'Most clients see initial traffic improvements within 2-3 months and meaningful sales increases within 4-6 months. Quick wins like product schema and on-page optimization show faster results, while category authority and link building take longer but deliver sustained growth.',
    },
    {
      question: 'Will e-commerce SEO work with my Shopify/WooCommerce store?',
      answer: 'Absolutely! I specialize in all major e-commerce platforms: Shopify, WooCommerce, BigCommerce, Magento, and custom builds. Each platform has unique SEO considerations, and I optimize accordingly to maximize your product visibility.',
    },
    {
      question: 'Do you write unique product descriptions?',
      answer: 'Yes! Unique, conversion-focused product descriptions are essential for e-commerce SEO. I rewrite manufacturer descriptions to be unique, keyword-optimized, and persuasive, helping you rank better and convert more visitors into buyers.',
    },
    {
      question: 'How do you handle out-of-stock or seasonal products?',
      answer: 'I implement proper handling for out-of-stock items: maintain the page with "out of stock" schema markup, suggest alternatives, and preserve SEO value. For seasonal products, I optimize availability windows and implement strategic redirects or collection pages.',
    },
    {
      question: 'What\'s the difference between e-commerce SEO and regular SEO?',
      answer: 'E-commerce SEO focuses specifically on product discovery, conversion optimization, and sales funnel optimization. It includes product schema, shopping feed optimization, faceted navigation, and conversion-focused content—all tailored for online stores rather than service-based websites.',
    },
    {
      question: 'Can e-commerce SEO help my local showroom too?',
      answer: 'Definitely! I integrate local SEO elements: location pages, "buy online, pick up in-store" optimization, local inventory ads, and showroom visit driving strategies. Your e-commerce SEO and local presence work together to drive both online and in-person sales.',
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
            name: 'E-commerce SEO for Kitchen Remodeling Product Stores',
            description: 'Specialized e-commerce SEO services for kitchen remodeling businesses selling products online',
            url: 'https://moazhaider.com/services/ecommerce-seo',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Services',
                  item: 'https://moazhaider.com/services',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'E-commerce SEO',
                  item: 'https://moazhaider.com/services/ecommerce-seo',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'E-commerce SEO for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Drive online sales with specialized e-commerce SEO for kitchen remodeling product stores.',
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-surface-darker dark:via-background-dark dark:to-surface-darker overflow-hidden pt-32 pb-20">
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
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <Link href="/services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white font-medium">E-commerce SEO</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              E-commerce SEO for <span className="text-gradient">Kitchen Remodeling Product Stores</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Drive qualified traffic and online sales with specialized e-commerce SEO for kitchen cabinets, countertops, 
              fixtures, hardware, and remodeling products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get a Free E-commerce Audit
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

      {/* What This Service Is */}
      <section className="section-padding bg-white dark:bg-background-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">
                What is <span className="text-gradient">E-commerce SEO?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  E-commerce SEO for kitchen remodeling businesses focuses on optimizing online stores that sell products—cabinets, 
                  countertops, backsplash tiles, fixtures, hardware, and remodeling materials. Unlike service-based SEO, e-commerce 
                  SEO targets product discovery, shopping behavior, and conversion optimization.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  For kitchen remodeling product stores, e-commerce SEO involves optimizing hundreds or thousands of product pages, 
                  implementing product schema markup for rich results, creating logical category structures, and building internal 
                  linking systems that guide customers to related products and accessories.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Done correctly, e-commerce SEO drives homeowners actively searching for specific products directly to your store, 
                  increases average order values through strategic cross-selling, and builds sustainable revenue streams from organic 
                  search traffic.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
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
              Common E-commerce Problems <span className="text-gradient">Kitchen Product Stores Face</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg border border-gray-200 dark:border-border-dark"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading mb-2 text-gray-900 dark:text-white">
                      {problem.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Solve These Problems */}
      <section className="section-padding bg-white dark:bg-background-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="section-title">
                How I <span className="text-gradient">Solve These Problems</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: 'Comprehensive E-commerce Audit',
                  description: 'I analyze your entire product catalog, category structure, internal linking, schema implementation, and conversion funnel. This reveals exactly what\'s preventing products from ranking and converting, from technical issues to content gaps.',
                },
                {
                  title: 'Strategic Product Optimization',
                  description: 'Each product page gets optimized with unique descriptions, keyword-rich titles, compelling CTAs, and conversion-focused layouts. I focus on high-value products first, then systematically optimize your entire catalog for maximum ROI.',
                },
                {
                  title: 'Category Architecture Restructuring',
                  description: 'I build logical, SEO-friendly category structures that help both customers and search engines navigate your products. Clear hierarchies, optimized category pages, and proper internal linking boost discoverability and rankings.',
                },
                {
                  title: 'Product Schema Implementation',
                  description: 'I implement comprehensive product structured data including price, availability, reviews, ratings, and images. This enables rich results in search, increasing click-through rates and qualified traffic to your kitchen remodeling products.',
                },
                {
                  title: 'Unique Content Creation',
                  description: 'Generic manufacturer descriptions hurt rankings. I write unique, keyword-optimized, conversion-focused product descriptions that differentiate your store, improve search rankings, and persuade customers to buy.',
                },
                {
                  title: 'Conversion Rate Optimization',
                  description: 'Traffic without sales is worthless. I optimize product pages for conversions with strategic CTAs, trust signals, comparison features, and mobile-first design that turns browsers into buyers.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-surface-dark rounded-xl p-8 border border-gray-200 dark:border-border-dark"
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

      {/* What's Included */}
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
                What's Included in <span className="text-gradient">E-commerce SEO</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-surface-dark rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-border-dark"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How This Fits Into SEO System */}
      <section className="section-padding bg-white dark:bg-background-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">
                How E-commerce SEO Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  E-commerce SEO works best when integrated with your complete kitchen remodeling marketing strategy:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">Content SEO</strong> drives blog traffic that links to relevant products, warming up leads before purchase
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Local SEO</strong> attracts nearby customers who prefer to see products in your showroom
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Technical SEO</strong> ensures fast, mobile-optimized shopping experiences that convert
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Link Building</strong> establishes authority that helps product pages rank competitively
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-8 border border-primary-400/30">
                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                  Related Services That Work Together:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'On-Page SEO', slug: 'on-page-seo' },
                    { name: 'Content SEO', slug: 'content-seo' },
                    { name: 'Technical SEO', slug: 'technical-seo' },
                    { name: 'Link Building', slug: 'link-building' },
                  ].map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-border-dark hover:border-primary-400 dark:hover:border-primary-500 transition-colors text-gray-900 dark:text-white font-medium"
                    >
                      {service.name}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg border border-gray-200 dark:border-border-dark"
                >
                  <h3 className="text-lg font-bold font-heading mb-3 text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500/20 via-gray-50 to-accent-500/20 dark:from-primary-500/10 dark:via-background-dark dark:to-accent-500/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-gray-900 dark:text-white">
              Start Driving More Online Product Sales
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get a comprehensive e-commerce SEO audit and discover exactly how to increase your kitchen remodeling product sales through search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your Free E-commerce Audit
              </motion.a>
              <motion.a
                href="tel:+923024698992"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Speak With an SEO Specialist
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
