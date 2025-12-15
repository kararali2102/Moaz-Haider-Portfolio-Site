'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CompetitorAnalysisPage() {
  const problems = [
    {
      title: 'Competitors Always Rank Higher',
      description: 'No matter what you do, the same competitors always outrank you and you don\'t know why or how to close the gap.',
    },
    {
      title: 'No Competitive Intelligence',
      description: 'You don\'t know what keywords competitors target, what content they create, or what backlinks they have.',
    },
    {
      title: 'Can\'t Differentiate Your Business',
      description: 'Without understanding competitor positioning, you struggle to differentiate your kitchen remodeling services.',
    },
    {
      title: 'Wasting Resources on Wrong Tactics',
      description: 'Investing in SEO strategies that don\'t work while competitors focus on what actually drives results.',
    },
    {
      title: 'Losing Market Share',
      description: 'Competitors capture more leads, dominate local pack rankings, and own page 1 results for valuable keywords.',
    },
    {
      title: 'No Benchmark for Success',
      description: 'Can\'t measure your SEO performance because you don\'t know how you compare to competitors.',
    },
    {
      title: 'Missing Competitive Opportunities',
      description: 'Not identifying gaps where competitors are weak—easy opportunities to capture market share.',
    },
  ]

  const included = [
    'Top 5 competitor identification and selection',
    'Comprehensive keyword gap analysis',
    'Backlink profile comparison',
    'Content strategy analysis',
    'On-page SEO evaluation',
    'Technical SEO comparison',
    'Local SEO competitive analysis',
    'Review profile comparison',
    'Social media presence assessment',
    'Website traffic estimation',
    'Conversion element analysis',
    'SERP feature analysis (featured snippets, local pack)',
    'Brand positioning evaluation',
    'Competitive advantage identification',
    'Opportunity cost analysis',
    'Strategic action plan to outrank competitors',
  ]

  const faqs = [
    {
      question: 'What is competitor analysis for kitchen remodeling businesses?',
      answer: 'Competitor analysis is a comprehensive evaluation of the top kitchen remodeling businesses ranking in your market. I analyze what keywords they target, what content they create, where their backlinks come from, how they optimize pages, and what makes them rank—then create a strategy to outperform them.',
    },
    {
      question: 'How do you choose which competitors to analyze?',
      answer: 'I identify competitors who rank for your target keywords, appear in local pack results, and compete for the same customers. This includes direct competitors (other kitchen remodelers) and indirect competitors (home improvement sites, platforms like Houzz). I typically analyze your top 3-5 competitors for comprehensive insights.',
    },
    {
      question: 'What can I learn from competitor analysis?',
      answer: 'You learn what keywords drive their traffic, what content topics work, where they get backlinks, how they structure websites, what technical advantages they have, how they position services, and most importantly—where they\'re weak and you can gain advantage.',
    },
    {
      question: 'Will you show me their exact strategies?',
      answer: 'Yes! The analysis reveals their complete SEO strategy: keyword targeting, content calendar patterns, link building sources, on-page optimization tactics, schema implementation, local SEO approach, and conversion strategies. You see exactly what works and can adapt it to your business.',
    },
    {
      question: 'How is this different from doing a Google search?',
      answer: 'Manual searches show surface results. I use professional tools (Ahrefs, SEMrush) to uncover hidden data: all ranking keywords, complete backlink profiles, traffic estimates, content performance, technical implementation, and historical ranking changes. This provides actionable intelligence you can\'t get from basic searches.',
    },
    {
      question: 'What if I don\'t know who my competitors are?',
      answer: 'No problem! Part of the analysis is competitor identification. I research which kitchen remodeling businesses rank for your target keywords in your service area, who appears in local pack results, and who captures market share. Then I analyze the most relevant competitors.',
    },
    {
      question: 'Will this help me outrank established competitors?',
      answer: 'Absolutely! The analysis reveals competitive gaps—keywords they miss, content opportunities, weak backlink profiles, technical issues, and positioning weaknesses. By exploiting these gaps systematically, you can outrank even long-established competitors.',
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
            name: 'Competitor Analysis for Kitchen Remodeling Businesses',
            description: 'Professional competitor analysis services for kitchen remodeling businesses',
            url: 'https://moazhaider.com/services/competitor-analysis',
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
                  name: 'Competitor Analysis',
                  item: 'https://moazhaider.com/services/competitor-analysis',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'Competitor Analysis for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Discover what competitors do to rank higher and build a strategy to dominate your market.',
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
              <span className="text-gray-900 dark:text-white font-medium">Competitor Analysis</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              Competitor Analysis for <span className="text-gradient">Kitchen Remodeling Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Discover exactly what competitors do to rank higher, identify their weaknesses, and build a strategic plan 
              to dominate your market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Competitor Analysis
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
                What is <span className="text-gradient">Competitor Analysis?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Competitor analysis is a comprehensive evaluation of the top kitchen remodeling businesses ranking in your market. It 
                  reverse-engineers their SEO success by analyzing keywords they target, content they create, backlinks they earn, technical 
                  optimizations they implement, and strategies they use to dominate search results.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  For kitchen remodeling businesses, competitor analysis reveals why certain companies consistently appear in local pack 
                  results, rank on page 1 for valuable keywords, and capture the majority of organic leads. More importantly, it identifies 
                  their weaknesses—gaps in content, missed keywords, weak backlinks, and opportunities where you can gain competitive advantage.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  You receive a detailed competitive intelligence report showing exactly what your competitors do, how they do it, where 
                  they're vulnerable, and a strategic roadmap to outrank them systematically. This transforms your SEO from guesswork into 
                  a data-driven competitive strategy.
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
              Why Kitchen Remodelers <span className="text-gradient">Need Competitor Analysis</span>
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
                How I <span className="text-gradient">Analyze Your Competitors</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: 'Comprehensive Keyword Gap Analysis',
                  description: 'Using Ahrefs, I compare your keyword rankings to competitors, revealing hundreds of keywords they rank for that you don\'t. This identifies quick wins (keywords you can target immediately) and long-term opportunities (competitive terms requiring sustained effort).',
                },
                {
                  title: 'Backlink Profile Comparison',
                  description: 'I analyze competitor backlink profiles: how many links they have, where links come from (local news, industry blogs, directories), link quality, and acquisition patterns. This reveals link building opportunities and gaps in your own backlink strategy.',
                },
                {
                  title: 'Content Strategy Reverse Engineering',
                  description: 'I examine competitor content: what topics they cover, content depth and quality, publishing frequency, content types (guides, case studies, blog posts), and which content drives the most traffic. This creates a roadmap for content that outperforms theirs.',
                },
                {
                  title: 'Technical & On-Page Evaluation',
                  description: 'I assess competitor technical SEO and on-page optimization: site speed, mobile experience, schema implementation, internal linking, title optimization, and content structure. This reveals technical advantages they have and opportunities where you can surpass them.',
                },
                {
                  title: 'Local SEO Competitive Analysis',
                  description: 'I compare Google Business Profiles, local citations, review profiles, local content, and location page strategies. This identifies why competitors appear in local pack results and what you need to do to outrank them for local searches.',
                },
                {
                  title: 'Strategic Action Plan Creation',
                  description: 'Every analysis concludes with a prioritized action plan: which competitor strategies to adopt, which weaknesses to exploit, and which opportunities to pursue first. You get a clear roadmap to systematically dominate your competitive landscape.',
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
                What's Included in <span className="text-gradient">Competitor Analysis</span>
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
                How Competitor Analysis Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Competitor analysis is the <strong>strategic intelligence</strong> that informs every SEO decision:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">Keyword Research</strong> identifies gaps by comparing your keywords to competitors
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Content SEO</strong> creates content that outperforms competitor content
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Link Building</strong> targets backlink sources that work for competitors
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Technical SEO</strong> implements optimizations competitors use successfully
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-8 border border-primary-400/30">
                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                  Related Services That Work Together:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'SEO Audit', slug: 'seo-audit' },
                    { name: 'Keyword Research', slug: 'keyword-research' },
                    { name: 'Link Building', slug: 'link-building' },
                    { name: 'Content SEO', slug: 'content-seo' },
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
              Outrank Your Competitors Today
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get comprehensive competitor analysis that reveals exactly how to dominate your kitchen remodeling market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Competitor Analysis
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
