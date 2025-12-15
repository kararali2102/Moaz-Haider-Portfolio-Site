'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OnPageSEOPage() {
  const problems = [
    {
      title: 'Poor Title Tags & Meta Descriptions',
      description: 'Generic, keyword-stuffed, or missing title tags fail to attract clicks and signal relevance to search engines.',
    },
    {
      title: 'Weak Content Optimization',
      description: 'Thin content without proper keyword targeting, headings structure, or semantic relevance limits ranking potential.',
    },
    {
      title: 'Missing or Incorrect Header Tags',
      description: 'Improper H1-H6 hierarchy confuses search engines about content structure and topic relevance.',
    },
    {
      title: 'No Internal Linking Strategy',
      description: 'Isolated pages without strategic internal links waste link equity and hurt site-wide authority distribution.',
    },
    {
      title: 'Unoptimized Images',
      description: 'Project photos lack descriptive alt text, proper file names, and optimization, missing valuable ranking opportunities.',
    },
    {
      title: 'Poor URL Structure',
      description: 'Messy URLs with random characters and no keywords hurt both user experience and search visibility.',
    },
    {
      title: 'Missing Schema Markup',
      description: 'Pages lack structured data that enables rich results, reducing click-through rates from search.',
    },
  ]

  const included = [
    'Complete on-page SEO audit of all important pages',
    'Title tag optimization for CTR and rankings',
    'Meta description writing that drives clicks',
    'H1-H6 heading structure optimization',
    'Keyword research and strategic placement',
    'Content optimization and semantic SEO',
    'Internal linking strategy and implementation',
    'Image optimization (file names, alt text, compression)',
    'URL structure optimization',
    'Schema markup implementation',
    'Featured snippet optimization',
    'User intent matching and content alignment',
    'LSI keyword integration',
    'Content length and depth optimization',
    'Call-to-action optimization',
    'Page speed optimization recommendations',
  ]

  const faqs = [
    {
      question: 'What is on-page SEO for kitchen remodeling websites?',
      answer: 'On-page SEO optimizes individual pages—service pages, blog posts, portfolio pages—to rank higher in search. For kitchen remodelers, this includes optimizing title tags, meta descriptions, headings, content, images, and internal links to target valuable keywords like "kitchen remodeling [city]" and "custom cabinets."',
    },
    {
      question: 'How long does on-page SEO take to show results?',
      answer: 'On-page optimization shows results quickly—typically within 2-4 weeks once Google recrawls optimized pages. Pages already indexed can rank higher almost immediately. New pages may take 1-3 months. On-page SEO delivers the fastest SEO wins.',
    },
    {
      question: 'What\'s the difference between on-page and technical SEO?',
      answer: 'On-page SEO focuses on content and HTML elements visible to users: titles, headings, body content, images, and internal links. Technical SEO focuses on backend infrastructure: site speed, crawlability, mobile responsiveness, and code optimization. Both are essential.',
    },
    {
      question: 'Will on-page SEO help my service pages rank?',
      answer: 'Absolutely! Service pages are prime candidates for on-page optimization. I optimize each service page—cabinet installation, countertop replacement, kitchen design—with unique content, targeted keywords, proper headings, and strategic CTAs that rank and convert.',
    },
    {
      question: 'Do you write new content or just optimize existing content?',
      answer: 'Both! I audit existing content and optimize what\'s salvageable: improving titles, headings, keyword targeting, and structure. For thin or missing content, I write comprehensive, SEO-optimized pages that comprehensively cover topics and target valuable keywords.',
    },
    {
      question: 'How do you optimize images for SEO?',
      answer: 'I rename image files with descriptive, keyword-rich names (kitchen-remodel-marble-countertops.jpg), write detailed alt text for accessibility and SEO, compress images for fast loading, implement lazy loading, and use next-gen formats (WebP). This helps images rank in Google Images and improves page speed.',
    },
    {
      question: 'What keywords should my pages target?',
      answer: 'I conduct thorough keyword research to identify high-value opportunities: commercial keywords ("kitchen remodeling contractor [city]"), informational keywords ("cost of kitchen remodel"), and long-tail variations. Each page targets a primary keyword plus supporting terms based on search volume and competition.',
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
            name: 'On-Page SEO for Kitchen Remodeling Websites',
            description: 'Professional on-page SEO services for kitchen remodeling businesses',
            url: 'https://moazhaider.com/services/on-page-seo',
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
                  name: 'On-Page SEO',
                  item: 'https://moazhaider.com/services/on-page-seo',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'On-Page SEO for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Optimize every page element to maximize rankings and conversions for kitchen remodeling businesses.',
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
              <span className="text-gray-900 dark:text-white font-medium">On-Page SEO</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              On-Page SEO for <span className="text-gradient">Kitchen Remodeling Websites</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Optimize every page element—titles, content, headings, images, and internal links—to maximize rankings 
              and conversions for kitchen remodelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get an On-Page SEO Audit
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
                What is <span className="text-gradient">On-Page SEO?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  On-page SEO optimizes individual pages on your kitchen remodeling website to rank higher in search engines and attract 
                  qualified traffic. It focuses on content, HTML elements, and user experience factors that you directly control—from title 
                  tags to image optimization to internal linking.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  For kitchen remodeling businesses, on-page SEO ensures every service page, portfolio page, and blog post is strategically 
                  optimized for target keywords, properly structured for search engines, and designed to convert visitors into leads. It's 
                  about making each page work as hard as possible to rank and generate business.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Done correctly, on-page SEO helps your pages rank for competitive keywords like "kitchen remodeling [city]," appear in 
                  featured snippets, and guide visitors toward requesting quotes—all while providing excellent user experience that Google rewards.
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
              Common On-Page SEO Problems <span className="text-gradient">Kitchen Remodelers Face</span>
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
                  title: 'Comprehensive Page-by-Page Audit',
                  description: 'I analyze every important page on your kitchen remodeling website: service pages, location pages, portfolio pages, and blog posts. This reveals optimization opportunities, keyword gaps, technical issues, and content weaknesses holding back rankings.',
                },
                {
                  title: 'Strategic Title & Meta Description Optimization',
                  description: 'I craft compelling title tags that balance keyword targeting with click-worthy copy, and meta descriptions that drive clicks from search results. Each element is unique, optimized for target keywords, and designed to stand out in SERPs.',
                },
                {
                  title: 'Content Structure & Semantic Optimization',
                  description: 'I optimize content with proper H1-H6 heading hierarchy, strategic keyword placement, LSI keyword integration, and comprehensive topic coverage. This signals topical relevance to Google while improving user experience and readability.',
                },
                {
                  title: 'Strategic Internal Linking System',
                  description: 'I build a logical internal linking architecture that distributes link equity, guides visitors through conversion funnels, and helps search engines understand site structure. Strategic links between service pages, blog posts, and conversion pages boost rankings site-wide.',
                },
                {
                  title: 'Image Optimization & Alt Text',
                  description: 'Every project photo gets optimized: descriptive file names, keyword-rich alt text, proper compression, and next-gen formats. This improves page speed, helps images rank in Google Images, and makes your site accessible.',
                },
                {
                  title: 'Schema Markup Implementation',
                  description: 'I implement relevant structured data on every page: LocalBusiness, Service, Review, Project, and FAQ schema. This enables rich results in search, increasing visibility and click-through rates from qualified homeowners.',
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
                What's Included in <span className="text-gradient">On-Page SEO</span>
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
                How On-Page SEO Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  On-page SEO is the <strong>optimization layer</strong> that maximizes the value of every other SEO effort:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">Technical SEO</strong> provides the foundation; on-page optimization builds on it
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Content SEO</strong> creates valuable content; on-page SEO structures and optimizes it
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Link Building</strong> earns authority; on-page SEO ensures that authority flows effectively
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Local SEO</strong> targets geographic keywords; on-page optimization makes pages rank for them
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-8 border border-primary-400/30">
                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                  Related Services That Work Together:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Content SEO', slug: 'content-seo' },
                    { name: 'Technical SEO', slug: 'technical-seo' },
                    { name: 'Keyword Research', slug: 'keyword-research' },
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
              Optimize Your Pages Today
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get a comprehensive on-page SEO audit and discover exactly how to optimize every page for maximum rankings and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your On-Page SEO Audit
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
