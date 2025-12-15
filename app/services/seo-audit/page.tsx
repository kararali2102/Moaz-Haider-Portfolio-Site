'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SEOAuditPage() {
  const problems = [
    {
      title: 'No Visibility Into SEO Issues',
      description: 'You know rankings are poor but don\'t understand why—what technical issues, content gaps, or optimization problems exist.',
    },
    {
      title: 'Wasting Marketing Budget',
      description: 'Investing in ads because SEO isn\'t working, but without knowing what SEO problems prevent organic growth.',
    },
    {
      title: 'Losing to Competitors',
      description: 'Competitors rank higher but you don\'t know what they\'re doing differently or how to close the gap.',
    },
    {
      title: 'Recent Traffic Drop',
      description: 'Rankings and traffic suddenly declined, but you\'re unsure whether it\'s a penalty, algorithm update, or technical issue.',
    },
    {
      title: 'Never Had Professional Analysis',
      description: 'Your website was built without SEO expertise, and you\'ve never had a comprehensive audit to identify problems.',
    },
    {
      title: 'Can\'t Prioritize SEO Efforts',
      description: 'Unsure which SEO improvements to tackle first for maximum ROI—technical fixes, content, or link building.',
    },
    {
      title: 'Suspect Platform Limitations',
      description: 'Your website builder (Wix, Squarespace, etc.) might be limiting SEO, but you need expert analysis to confirm.',
    },
  ]

  const included = [
    'Complete technical SEO crawl (Screaming Frog)',
    'Google Search Console data analysis',
    'Site speed and Core Web Vitals assessment',
    'Mobile usability evaluation',
    'On-page SEO audit (titles, meta, headings, content)',
    'Keyword ranking analysis and opportunities',
    'Backlink profile evaluation',
    'Competitor SEO analysis (top 3 competitors)',
    'Local SEO audit (GBP, citations, reviews)',
    'Content gap analysis',
    'Internal linking structure review',
    'Schema markup assessment',
    'Duplicate content identification',
    'Crawl error and indexation analysis',
    'Penalty risk assessment',
    'Prioritized action plan with timelines',
    '40+ page detailed audit report',
    '60-minute strategy call to review findings',
  ]

  const faqs = [
    {
      question: 'What is an SEO audit for kitchen remodeling websites?',
      answer: 'An SEO audit is a comprehensive analysis of your website that identifies technical issues, on-page optimization problems, content gaps, backlink weaknesses, and ranking opportunities. For kitchen remodelers, I audit service pages, portfolio content, local SEO factors, and competitive positioning to create a roadmap for dominating search.',
    },
    {
      question: 'How long does an SEO audit take?',
      answer: 'A thorough SEO audit takes 5-7 business days from start to finish. This includes technical crawling, data analysis, competitor research, and report creation. You\'ll receive a detailed 40+ page report plus a 60-minute strategy call to review findings and prioritize actions.',
    },
    {
      question: 'What\'s included in the SEO audit report?',
      answer: 'The audit report includes technical SEO issues, on-page optimization analysis, keyword opportunities, backlink profile assessment, competitor comparison, content gaps, local SEO evaluation, and a prioritized action plan with estimated impact and timelines for each recommendation.',
    },
    {
      question: 'Do you fix the issues or just identify them?',
      answer: 'The audit identifies and documents all issues with clear recommendations. Implementation is separate—I offer ongoing SEO services to fix identified issues, or you can use the audit to guide your team or other contractors. Most clients prefer I implement the fixes to ensure proper execution.',
    },
    {
      question: 'Will the audit tell me why my rankings dropped?',
      answer: 'Yes! I analyze Google Search Console data, algorithm update timings, backlink profile changes, indexation issues, and technical problems to pinpoint why rankings declined. The audit includes specific recommendations to recover lost rankings.',
    },
    {
      question: 'How is this different from free online SEO tools?',
      answer: 'Free tools provide surface-level data but lack context, expertise, and actionable recommendations. My audit combines multiple professional tools, manual analysis, industry expertise specific to kitchen remodeling, competitor intelligence, and a strategic roadmap tailored to your business goals.',
    },
    {
      question: 'What if my website is on Wix, Squarespace, or Shopify?',
      answer: 'No problem! I audit websites on all platforms including WordPress, Wix, Squarespace, Shopify, Webflow, and custom builds. I identify platform-specific limitations and provide realistic recommendations that work within your platform\'s constraints.',
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
            name: 'SEO Audit for Kitchen Remodeling Websites',
            description: 'Comprehensive SEO audit services for kitchen remodeling businesses',
            url: 'https://moazhaider.com/services/seo-audit',
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
                  name: 'SEO Audit',
                  item: 'https://moazhaider.com/services/seo-audit',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'SEO Audit for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Comprehensive SEO analysis and strategic roadmap for kitchen remodeling businesses.',
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
              <span className="text-gray-900 dark:text-white font-medium">SEO Audit</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              SEO Audit for <span className="text-gradient">Kitchen Remodeling Websites</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get a comprehensive analysis of your website's SEO health with actionable recommendations to fix issues 
              and dominate search results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your SEO Audit
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
                What is an <span className="text-gradient">SEO Audit?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  An SEO audit is a comprehensive analysis of your kitchen remodeling website that identifies every issue preventing 
                  you from ranking on page 1. It covers technical infrastructure, on-page optimization, content quality, backlink 
                  profile, local SEO factors, and competitive positioning—providing a complete picture of your SEO health.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  For kitchen remodeling businesses, an SEO audit reveals why competitors rank higher, what content gaps exist in your 
                  service offerings, which technical issues prevent Google from properly indexing your project galleries, and exactly 
                  which opportunities will drive the most qualified leads when implemented.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  You receive a detailed 40+ page report with screenshots, data visualizations, and prioritized recommendations—plus a 
                  60-minute strategy call where I explain findings and help you understand exactly what to do next for maximum ROI.
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
              When Kitchen Remodelers <span className="text-gradient">Need an SEO Audit</span>
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
                How I <span className="text-gradient">Conduct an SEO Audit</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: 'Technical SEO Deep Dive',
                  description: 'Using Screaming Frog, Google Search Console, and PageSpeed Insights, I crawl your entire kitchen remodeling website to identify technical issues: crawl errors, broken links, slow pages, mobile problems, duplicate content, canonicalization issues, and schema markup gaps.',
                },
                {
                  title: 'On-Page Optimization Analysis',
                  description: 'I audit every important page—service pages, location pages, project galleries—analyzing title tags, meta descriptions, heading structure, keyword targeting, content quality, internal linking, and image optimization. This reveals exactly what needs optimization for better rankings.',
                },
                {
                  title: 'Competitive Intelligence Research',
                  description: 'I analyze your top 3 competitors who rank for your target keywords, comparing content depth, backlink profiles, technical implementation, and on-page optimization. This reveals competitive gaps and opportunities to outrank them.',
                },
                {
                  title: 'Keyword Opportunity Identification',
                  description: 'Using Ahrefs and Google Search Console data, I identify high-value keywords you\'re not ranking for but should be, plus "quick win" keywords where you\'re on page 2-3 and could reach page 1 with targeted optimization.',
                },
                {
                  title: 'Backlink Profile Assessment',
                  description: 'I analyze your backlink profile for quality, diversity, and toxic links. Compare it to competitors to understand domain authority gaps and identify link building opportunities that will move the needle for kitchen remodeling rankings.',
                },
                {
                  title: 'Prioritized Action Plan Creation',
                  description: 'Every audit concludes with a prioritized roadmap: critical fixes first (technical issues preventing indexing), then high-impact optimizations (quick wins), then long-term strategies (content, link building). You know exactly what to do and in what order.',
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
                What's Included in Your <span className="text-gradient">SEO Audit</span>
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
                How an SEO Audit Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  An SEO audit is the <strong>foundation</strong> of effective SEO strategy—it tells you where you are and creates a roadmap:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">Technical SEO</strong> fixes are prioritized based on audit findings
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">On-Page SEO</strong> optimization targets pages identified in the audit
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Content SEO</strong> fills content gaps revealed by competitive analysis
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Link Building</strong> strategy targets opportunities identified in backlink analysis
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-8 border border-primary-400/30">
                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                  Related Services That Work Together:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Technical SEO', slug: 'technical-seo' },
                    { name: 'On-Page SEO', slug: 'on-page-seo' },
                    { name: 'Competitor Analysis', slug: 'competitor-analysis' },
                    { name: 'Keyword Research', slug: 'keyword-research' },
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
              Get Your Comprehensive SEO Audit Today
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Discover exactly what's holding back your kitchen remodeling website with a detailed SEO audit and actionable roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your SEO Audit
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
