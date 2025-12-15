'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TechnicalSEOPage() {
  const problems = [
    {
      title: 'Slow Page Loading Speed',
      description: 'Large portfolio images and unoptimized code slow your site, frustrating visitors and hurting rankings.',
    },
    {
      title: 'Mobile Usability Issues',
      description: 'Your site doesn\'t work properly on phones where 70%+ of homeowners search for kitchen remodelers.',
    },
    {
      title: 'Crawl Errors & Indexation Problems',
      description: 'Google can\'t properly crawl your project pages, leaving valuable content invisible in search results.',
    },
    {
      title: 'Duplicate Content Issues',
      description: 'Multiple URLs showing the same content confuse search engines and dilute your ranking potential.',
    },
    {
      title: 'Missing or Incorrect Schema Markup',
      description: 'Without proper structured data, your business doesn\'t appear in rich results and local packs.',
    },
    {
      title: 'Poor Core Web Vitals',
      description: 'Google\'s user experience metrics are failing, directly impacting your ability to rank competitively.',
    },
    {
      title: 'Broken Links & 404 Errors',
      description: 'Dead links create poor user experience and waste the SEO value of internal and external links.',
    },
  ]

  const included = [
    'Complete technical SEO audit with priority recommendations',
    'Site speed optimization (images, code, caching, CDN)',
    'Mobile responsiveness testing and fixes',
    'Core Web Vitals optimization (LCP, FID, CLS)',
    'XML sitemap creation and optimization',
    'Robots.txt optimization for proper crawling',
    'Schema markup implementation (LocalBusiness, Service, Review, FAQPage)',
    'Canonical tag implementation to fix duplicate content',
    'Internal linking structure optimization',
    'SSL certificate verification and HTTPS migration support',
    'Broken link identification and fixing',
    'Crawl error resolution in Google Search Console',
    '301 redirect mapping for site migrations',
    'Hreflang implementation (if serving multiple countries)',
    'JavaScript rendering optimization',
    'Log file analysis for enterprise sites',
  ]

  const faqs = [
    {
      question: 'What is technical SEO and why does it matter for kitchen remodeling websites?',
      answer: 'Technical SEO ensures search engines can properly crawl, understand, and index your website. For kitchen remodeling businesses, this means your project galleries, service pages, and location pages are all discoverable in search. Without solid technical SEO, even great content won\'t rank.',
    },
    {
      question: 'How long does technical SEO take to show results?',
      answer: 'Most technical fixes show impact within 2-4 weeks once Google recrawls your site. Critical issues like crawl errors and site speed improvements can show faster results. I prioritize fixes based on impact and implement quick wins first while tackling complex issues.',
    },
    {
      question: 'Will technical SEO help my site load faster?',
      answer: 'Yes! Site speed is a core component of technical SEO. I optimize images (especially project photos), implement caching, minify code, leverage CDNs, and address all Core Web Vitals metrics. Faster sites rank better and convert more visitors.',
    },
    {
      question: 'What\'s the difference between technical SEO and on-page SEO?',
      answer: 'Technical SEO focuses on backend infrastructure—how search engines access and understand your site. On-page SEO focuses on content optimization—what your pages say. Both are essential. Technical SEO lays the foundation; on-page SEO builds on top of it.',
    },
    {
      question: 'Do you fix technical SEO issues on all CMS platforms?',
      answer: 'Yes! I work with WordPress, Shopify, Wix, Squarespace, Webflow, custom builds, and more. Each platform has unique technical considerations for kitchen remodeling sites, and I have experience optimizing all of them.',
    },
    {
      question: 'What tools do you use for technical SEO?',
      answer: 'I use Screaming Frog for crawling, Google Search Console for indexation monitoring, PageSpeed Insights for performance, Chrome DevTools for diagnostics, Ahrefs for backlink/health monitoring, and various specialized tools for schema validation, mobile testing, and security audits.',
    },
    {
      question: 'Can technical SEO fix my Google Search Console errors?',
      answer: 'Absolutely. I analyze all errors in Google Search Console—crawl errors, mobile usability issues, Core Web Vitals problems, coverage issues, and security warnings. I then systematically fix each issue and request re-indexing where appropriate.',
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
            name: 'Technical SEO for Kitchen Remodeling Websites',
            description: 'Professional technical SEO services for kitchen remodeling businesses',
            url: 'https://moazhaider.com/services/technical-seo',
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
                  name: 'Technical SEO',
                  item: 'https://moazhaider.com/services/technical-seo',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'Technical SEO for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Fix crawlability issues, optimize site speed, and ensure search engines properly index your kitchen remodeling website.',
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
              <span className="text-gray-900 dark:text-white font-medium">Technical SEO</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              Technical SEO for <span className="text-gradient">Kitchen Remodeling Websites</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Fix crawlability issues, optimize site speed, implement proper schema markup, and ensure Google can properly 
              index your kitchen remodeling portfolio and service pages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get a Free Technical SEO Audit
              </motion.a>
              <motion.a
                href="tel:+923024698992"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Book a Call
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
                What is <span className="text-gradient">Technical SEO?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Technical SEO is the foundation of your kitchen remodeling website's search visibility. It ensures search engines 
                  can properly crawl, understand, and index your content. Without solid technical SEO, even the best content and most 
                  beautiful project galleries won't rank.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  For kitchen remodeling businesses, technical SEO is critical because your website likely contains hundreds of 
                  high-resolution project photos, video galleries, before/after comparisons, and portfolio pages—all of which can 
                  create technical challenges if not properly optimized.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Technical SEO impacts everything: site speed, mobile usability, Core Web Vitals, schema markup, site architecture, 
                  and crawl efficiency. When done right, it helps you rank faster, rank higher, and generate more qualified leads from 
                  homeowners searching for kitchen remodeling services.
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
              Common Technical SEO Problems <span className="text-gradient">Kitchen Remodelers Face</span>
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
                  title: 'Comprehensive Technical Audit',
                  description: 'I start with a deep technical crawl of your entire kitchen remodeling website using Screaming Frog, Google Search Console, and PageSpeed Insights. This reveals every technical issue—from broken links to slow-loading pages to crawl errors.',
                },
                {
                  title: 'Prioritized Fix Implementation',
                  description: 'Not all technical issues are equal. I prioritize fixes based on impact: critical issues that prevent indexing come first, followed by Core Web Vitals improvements, then optimization opportunities. You see quick wins while I tackle complex problems.',
                },
                {
                  title: 'Site Speed Optimization',
                  description: 'Kitchen remodeling sites are image-heavy. I optimize every project photo using next-gen formats (WebP, AVIF), implement lazy loading, leverage browser caching, minify code, and set up CDN delivery. Your site loads fast on any device.',
                },
                {
                  title: 'Mobile Optimization',
                  description: 'Over 70% of homeowners search for kitchen remodelers on mobile devices. I ensure your site is fully responsive, passes Google\'s mobile-friendly test, and delivers excellent mobile Core Web Vitals scores.',
                },
                {
                  title: 'Schema Markup Implementation',
                  description: 'I implement structured data for LocalBusiness, Service pages, Reviews, Projects, and FAQs. This helps your kitchen remodeling business appear in rich results, local packs, and knowledge panels.',
                },
                {
                  title: 'Ongoing Monitoring & Maintenance',
                  description: 'Technical SEO isn\'t one-and-done. I continuously monitor Google Search Console, track Core Web Vitals, identify new crawl errors, and ensure your site stays technically sound as it grows.',
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
                What's Included in <span className="text-gradient">Technical SEO</span>
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
                How Technical SEO Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Technical SEO is the <strong>foundation</strong> of your entire kitchen remodeling SEO strategy. Without it, 
                  nothing else works effectively:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">On-Page SEO</strong> requires proper HTML structure, fast loading, and mobile responsiveness
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Content SEO</strong> needs crawlable pages and proper internal linking to distribute authority
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Local SEO</strong> depends on schema markup and mobile optimization for local pack rankings
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Link Building</strong> wastes valuable backlinks if they point to slow or broken pages
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
                    { name: 'Local SEO', slug: 'local-seo' },
                    { name: 'Content SEO', slug: 'content-seo' },
                    { name: 'SEO Audit', slug: 'seo-audit' },
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
              Fix Your Technical SEO Issues Today
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get a comprehensive technical SEO audit and discover exactly what's holding your kitchen remodeling website back from ranking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your Free Technical SEO Audit
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
