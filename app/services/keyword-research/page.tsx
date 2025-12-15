'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function KeywordResearchPage() {
  const problems = [
    {
      title: 'Targeting Wrong Keywords',
      description: 'You\'re optimizing for generic terms with massive competition instead of valuable keywords homeowners actually search.',
    },
    {
      title: 'Traffic But No Conversions',
      description: 'Your site gets traffic from informational searches, not commercial intent keywords from homeowners ready to hire.',
    },
    {
      title: 'Competing With Big Brands',
      description: 'Targeting impossible keywords dominated by Home Depot, Lowe\'s, and HGTV instead of realistic opportunities.',
    },
    {
      title: 'No Local Keyword Strategy',
      description: 'Missing location-specific keywords that drive qualified leads in your service area.',
    },
    {
      title: 'Guessing Instead of Data',
      description: 'Choosing keywords based on assumptions rather than actual search volume, competition, and buyer intent data.',
    },
    {
      title: 'Ignoring Long-Tail Opportunities',
      description: 'Focusing only on broad keywords while missing valuable long-tail searches with higher conversion rates.',
    },
    {
      title: 'No Keyword Mapping Strategy',
      description: 'Don\'t know which keywords to target on which pages, creating keyword cannibalization and missed opportunities.',
    },
  ]

  const included = [
    'Comprehensive keyword research (500+ keywords analyzed)',
    'Commercial intent keyword identification',
    'Local keyword research (city + service combinations)',
    'Long-tail keyword opportunities',
    'Keyword difficulty and competition analysis',
    'Search volume and trend analysis',
    'Competitor keyword gap analysis',
    'Question-based keywords for content',
    'Seasonal keyword identification',
    'Product/service-specific keywords',
    'Buyer journey keyword mapping',
    'Keyword prioritization matrix',
    'Page-by-page keyword assignments',
    'Monthly keyword tracking setup',
    'Opportunity cost analysis',
    'Custom keyword strategy document',
  ]

  const faqs = [
    {
      question: 'What is keyword research for kitchen remodeling businesses?',
      answer: 'Keyword research identifies the exact search terms homeowners use when looking for kitchen remodeling services. For kitchen remodelers, this includes commercial keywords ("kitchen remodeling contractor [city]"), informational keywords ("cost of kitchen remodel"), and long-tail variations that signal high buying intent.',
    },
    {
      question: 'How many keywords should I target?',
      answer: 'Quality over quantity. I typically identify 50-100 primary target keywords and 200-500 supporting keywords. Each page targets 1 primary keyword plus 3-5 supporting terms. The goal is comprehensive topic coverage with clear keyword assignments to avoid cannibalization.',
    },
    {
      question: 'What makes a good keyword for kitchen remodelers?',
      answer: 'Good keywords balance search volume, competition, commercial intent, and relevance. "Kitchen remodeling [your city]" is valuable—decent volume, local intent, buyers ready to hire. "Kitchen remodeling ideas" has huge volume but informational intent—visitors not ready to buy.',
    },
    {
      question: 'How do you identify local keywords?',
      answer: 'I research city names, neighborhoods, zip codes, and regional phrases people use in your service area. Then combine these with service terms: "kitchen remodeling [neighborhood]," "custom cabinets [city]," "countertop installation near [landmark]." This captures local search traffic.',
    },
    {
      question: 'Do you provide keyword tracking setup?',
      answer: 'Yes! After keyword research, I set up rank tracking for all primary keywords so you can monitor progress monthly. You\'ll see exactly which keywords you\'re ranking for, where you\'re improving, and which opportunities need more optimization.',
    },
    {
      question: 'How is this different from using Google Keyword Planner?',
      answer: 'Google Keyword Planner shows volume but lacks competition nuance, buyer intent analysis, and competitor intelligence. I use Ahrefs, SEMrush, and manual analysis to assess true difficulty, identify gaps competitors miss, and understand search intent—providing actionable recommendations, not just data.',
    },
    {
      question: 'Will keyword research help if I already have a website?',
      answer: 'Absolutely! Most kitchen remodeling websites target wrong keywords. Research reveals quick wins (keywords you\'re close to ranking for), content gaps (valuable keywords you\'re not targeting), and optimization opportunities (pages targeting wrong terms). This creates a roadmap for improvement.',
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
            name: 'Keyword Research for Kitchen Remodeling Businesses',
            description: 'Professional keyword research services for kitchen remodeling businesses',
            url: 'https://moazhaider.com/services/keyword-research',
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
                  name: 'Keyword Research',
                  item: 'https://moazhaider.com/services/keyword-research',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'Keyword Research for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Discover high-value keywords that drive qualified leads for kitchen remodeling businesses.',
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
              <span className="text-gray-900 dark:text-white font-medium">Keyword Research</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              Keyword Research for <span className="text-gradient">Kitchen Remodeling Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Discover the exact keywords homeowners search to find kitchen remodelers, prioritize high-value opportunities, 
              and dominate search results that drive revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Keyword Research
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
                What is <span className="text-gradient">Keyword Research?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Keyword research identifies the exact search terms homeowners use when looking for kitchen remodeling services. It 
                  reveals what people type into Google, how often they search, how difficult it is to rank, and most importantly—which 
                  keywords indicate genuine buying intent versus casual browsing.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  For kitchen remodeling businesses, strategic keyword research means the difference between ranking for "kitchen ideas" 
                  (millions of searches, zero conversions) and "kitchen remodeling contractor [your city]" (fewer searches, but every 
                  visitor is a qualified lead ready to request a quote).
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Effective keyword research creates a complete roadmap: which keywords to target on service pages, which topics to cover 
                  in blog posts, which location pages to create, and which long-tail opportunities deliver quick wins with minimal competition.
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
              Common Keyword Problems <span className="text-gradient">Kitchen Remodelers Face</span>
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
                How I <span className="text-gradient">Conduct Keyword Research</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: 'Commercial Intent Identification',
                  description: 'I separate high-intent commercial keywords from informational ones. "Kitchen remodeling contractor [city]" indicates buying intent; "kitchen remodeling ideas" doesn\'t. I prioritize keywords where searchers are ready to hire, not just browse.',
                },
                {
                  title: 'Local Keyword Research',
                  description: 'I research city names, neighborhoods, and local phrases in your service area, combining them with services: "kitchen remodeling [city]," "custom cabinets [neighborhood]," "countertop installation [zip code]." This captures valuable local search traffic.',
                },
                {
                  title: 'Competitor Keyword Gap Analysis',
                  description: 'Using Ahrefs, I identify keywords competitors rank for that you don\'t—revealing content gaps and opportunities. If competitors rank for "kitchen island cost" but you don\'t have that content, that\'s a quick win opportunity.',
                },
                {
                  title: 'Long-Tail Opportunity Discovery',
                  description: 'I find low-competition, high-intent long-tail keywords: "kitchen remodeling small space," "modern farmhouse kitchen contractor [city]," "quartz countertop installation price." These convert better and rank faster than broad terms.',
                },
                {
                  title: 'Search Intent Matching',
                  description: 'I analyze search results to understand intent: Are searchers looking for services, information, comparisons, or reviews? Then map keywords to appropriate page types—commercial intent to service pages, informational to blog posts.',
                },
                {
                  title: 'Strategic Keyword Mapping',
                  description: 'I assign specific keywords to specific pages: homepage targets brand + city, service pages target [service] + [city], blog posts target informational keywords. This prevents cannibalization and maximizes ranking potential across your site.',
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
                What's Included in <span className="text-gradient">Keyword Research</span>
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
                How Keyword Research Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Keyword research is the <strong>strategic foundation</strong> that guides all SEO efforts:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">On-Page SEO</strong> optimizes pages for keywords identified in research
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Content SEO</strong> creates content targeting keywords from the research
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Local SEO</strong> targets location-based keywords for your service area
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Competitor Analysis</strong> reveals keyword gaps and opportunities
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
                    { name: 'SEO Audit', slug: 'seo-audit' },
                    { name: 'Competitor Analysis', slug: 'competitor-analysis' },
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
              Discover Your High-Value Keywords Today
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get comprehensive keyword research that reveals exactly which search terms will drive qualified leads for your kitchen remodeling business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Keyword Research
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
