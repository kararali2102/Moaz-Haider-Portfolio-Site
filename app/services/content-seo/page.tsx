'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContentSEOPage() {
  const problems = [
    {
      title: 'Thin, Generic Content',
      description: 'Your website has minimal content that doesn\'t differentiate you from competitors or answer homeowner questions.',
    },
    {
      title: 'No Content Strategy',
      description: 'You\'re creating content randomly without a strategic plan, keyword research, or clear conversion goals.',
    },
    {
      title: 'Content Doesn\'t Rank',
      description: 'You publish blog posts but they never appear on page 1, wasting time and effort with no ROI.',
    },
    {
      title: 'Missing Target Keywords',
      description: 'Your content isn\'t optimized for the valuable keywords homeowners actually search when looking for kitchen remodelers.',
    },
    {
      title: 'Poor Content Structure',
      description: 'Content lacks proper headings, internal links, and SEO best practices that help both users and search engines.',
    },
    {
      title: 'No Topical Authority',
      description: 'Sparse content on key topics prevents Google from seeing you as an authoritative kitchen remodeling resource.',
    },
    {
      title: 'Content Doesn\'t Convert',
      description: 'Traffic arrives but bounces immediately because content lacks strategic CTAs and conversion pathways.',
    },
  ]

  const included = [
    'Comprehensive content audit of existing pages and posts',
    'Keyword research and content gap analysis',
    'Strategic content calendar creation',
    'Topic cluster development and pillar page strategy',
    'SEO-optimized blog post writing (kitchen remodeling-specific)',
    'Service page content optimization',
    'FAQ page creation and optimization',
    'Project description and portfolio content writing',
    'Content structure optimization (headings, internal links)',
    'Featured snippet optimization',
    'Content refresh and update of existing pages',
    'Conversion-focused CTAs and lead magnets',
    'Image optimization and alt text writing',
    'Content performance tracking and reporting',
    'Competitor content analysis',
    'Editorial guidelines and style guide creation',
  ]

  const faqs = [
    {
      question: 'What is content SEO for kitchen remodeling businesses?',
      answer: 'Content SEO creates high-quality, keyword-optimized content that ranks in search engines and attracts homeowners looking for kitchen remodeling services. It includes blog posts, service pages, FAQs, guides, and portfolio descriptions strategically designed to build authority and generate leads.',
    },
    {
      question: 'How long does content SEO take to show results?',
      answer: 'New content typically starts ranking within 3-6 months, with faster results for low-competition keywords. Consistent publishing (2-4 quality posts per month) compounds over time, building topical authority and driving increasing traffic. Most clients see meaningful traffic growth within 6 months.',
    },
    {
      question: 'Do you write the content or just provide strategy?',
      answer: 'I offer both! I can provide detailed content briefs and optimization strategies for your team, or I can write complete, SEO-optimized content specifically for kitchen remodeling businesses. Most clients prefer full content writing to ensure quality and consistency.',
    },
    {
      question: 'What topics should kitchen remodelers write about?',
      answer: 'I identify high-value topics through keyword research: kitchen design trends, material comparisons, cost guides, project timelines, DIY vs. professional advice, local design inspiration, and problem-solving content. Topics target different stages of the buyer journey from research to decision-making.',
    },
    {
      question: 'How do you ensure content ranks on page 1?',
      answer: 'I combine keyword research, competitor analysis, search intent matching, comprehensive topic coverage, proper SEO optimization, strategic internal linking, and E-E-A-T signals (expertise, experience, authority, trust). Not all content ranks immediately, but strategic optimization dramatically improves success rates.',
    },
    {
      question: 'Will content SEO help my service pages rank?',
      answer: 'Absolutely! Strategic blog content builds topical authority and creates internal linking opportunities to your service pages. This "content hub" approach strengthens your entire site, helping service pages rank for competitive commercial keywords.',
    },
    {
      question: 'How much content do I need to publish?',
      answer: 'Quality over quantity wins. I recommend 2-4 comprehensive, well-researched posts per month rather than daily thin content. Consistent publishing over 6-12 months builds significant authority. For competitive markets, more aggressive content production accelerates results.',
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
            name: 'Content SEO for Kitchen Remodeling Businesses',
            description: 'Strategic content SEO services for kitchen remodeling businesses',
            url: 'https://moazhaider.com/services/content-seo',
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
                  name: 'Content SEO',
                  item: 'https://moazhaider.com/services/content-seo',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'Content SEO for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Build authority and generate leads with strategic content SEO for kitchen remodeling businesses.',
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
              <span className="text-gray-900 dark:text-white font-medium">Content SEO</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              Content SEO for <span className="text-gradient">Kitchen Remodeling Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Build topical authority, attract qualified homeowners, and dominate search results with strategic, 
              conversion-focused content for kitchen remodelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get a Content Strategy
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
                What is <span className="text-gradient">Content SEO?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Content SEO for kitchen remodeling businesses is the strategic creation and optimization of content that ranks in search 
                  engines, attracts qualified homeowners, and guides them toward hiring you. It's not just blogging—it's building comprehensive 
                  topical authority that establishes you as the go-to expert in your market.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  For kitchen remodelers, content SEO involves creating service page content, educational blog posts, project descriptions, 
                  FAQs, design guides, cost breakdowns, and comparison articles—all optimized for keywords homeowners actually search. Each 
                  piece strategically targets different stages of the buyer journey.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Done correctly, content SEO positions you as a trusted authority, answers homeowner questions before competitors do, 
                  captures early-stage researchers, and nurtures them into qualified leads ready to request quotes for their kitchen remodels.
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
              Common Content Problems <span className="text-gradient">Kitchen Remodelers Face</span>
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
                  title: 'Strategic Content Audit & Gap Analysis',
                  description: 'I analyze your existing content, identify gaps in topic coverage, and uncover opportunities where competitors rank but you don\'t. This reveals exactly what content to create for maximum SEO impact and lead generation.',
                },
                {
                  title: 'Keyword-Driven Content Strategy',
                  description: 'Using comprehensive keyword research, I build a data-driven content calendar targeting high-value topics at every stage of the buyer journey—from early research ("kitchen remodeling cost") to decision-making ("best kitchen remodelers near me").',
                },
                {
                  title: 'Topic Cluster Architecture',
                  description: 'I create pillar pages and supporting content clusters that establish deep topical authority. For example, a comprehensive "Kitchen Remodeling Guide" pillar page supported by detailed posts on budgeting, materials, design styles, and contractor selection.',
                },
                {
                  title: 'SEO-Optimized Content Writing',
                  description: 'Every piece of content is written specifically for kitchen remodeling businesses with natural keyword integration, proper heading structure, strategic internal linking, and conversion-focused CTAs that guide readers to request quotes.',
                },
                {
                  title: 'Featured Snippet Optimization',
                  description: 'I structure content to win featured snippets—the "position zero" results above organic listings. This dramatically increases visibility and positions you as the definitive answer to homeowner questions.',
                },
                {
                  title: 'Content Refresh & Performance Optimization',
                  description: 'Existing content gets regularly updated with fresh information, new keywords, improved structure, and better internal linking. This resurrects old posts, improves rankings, and maximizes ROI from content investments.',
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
                What's Included in <span className="text-gradient">Content SEO</span>
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
                How Content SEO Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Content SEO is the <strong>growth engine</strong> of your kitchen remodeling SEO strategy:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">On-Page SEO</strong> optimizes how content is structured and tagged for search engines
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Technical SEO</strong> ensures content is crawlable, fast-loading, and mobile-friendly
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Link Building</strong> becomes easier when you have valuable content that attracts natural backlinks
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Local SEO</strong> gets amplified with location-specific content that ranks for "near me" searches
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-8 border border-primary-400/30">
                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                  Related Services That Work Together:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Keyword Research', slug: 'keyword-research' },
                    { name: 'On-Page SEO', slug: 'on-page-seo' },
                    { name: 'Link Building', slug: 'link-building' },
                    { name: 'Technical SEO', slug: 'technical-seo' },
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
              Build Your Content Authority Today
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get a custom content strategy that positions your kitchen remodeling business as the go-to authority in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your Content Strategy
              </motion.a>
              <motion.a
                href="tel:+923024698992"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Speak With a Content Specialist
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
