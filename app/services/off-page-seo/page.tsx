'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OffPageSEOPage() {
  const problems = [
    {
      title: 'Weak Online Reputation',
      description: 'Few online reviews, limited brand mentions, and poor reputation signals hurt both rankings and customer trust.',
    },
    {
      title: 'No Citation Consistency',
      description: 'Inconsistent business information across directories confuses Google and weakens local search visibility.',
    },
    {
      title: 'Limited Brand Visibility',
      description: 'Your kitchen remodeling business isn\'t mentioned on industry sites, local blogs, or community platforms.',
    },
    {
      title: 'Poor Social Signals',
      description: 'Minimal social media presence and engagement fail to build brand awareness or drive referral traffic.',
    },
    {
      title: 'Missing Review Strategy',
      description: 'You\'re not actively generating reviews on Google, Yelp, Houzz, and HomeAdvisor, losing to competitors with stronger reputations.',
    },
    {
      title: 'No PR or Media Mentions',
      description: 'Local press, industry publications, and bloggers don\'t mention your business, missing valuable brand exposure and backlinks.',
    },
    {
      title: 'Competitors Dominating Mentions',
      description: 'Competitors appear everywhere—in guest posts, partnerships, sponsorships—while you\'re invisible in the market.',
    },
  ]

  const included = [
    'Comprehensive off-page SEO audit',
    'Review generation strategy and implementation',
    'Google Business Profile review management',
    'Local citation building and NAP consistency',
    'Brand mention monitoring and outreach',
    'Online reputation management',
    'Digital PR and media outreach',
    'Industry directory submissions',
    'Guest posting and content partnerships',
    'Social media profile optimization',
    'Influencer and blogger outreach',
    'Local sponsorship identification',
    'Community engagement strategy',
    'Review response management',
    'Negative review mitigation',
    'Monthly off-page SEO reporting',
  ]

  const faqs = [
    {
      question: 'What is off-page SEO for kitchen remodeling businesses?',
      answer: 'Off-page SEO encompasses all activities outside your website that build authority and reputation: earning backlinks, generating reviews, building citations, getting brand mentions, and managing online reputation. For kitchen remodelers, this includes reviews on Houzz, local news mentions, guest posts, and community engagement.',
    },
    {
      question: 'How long does off-page SEO take to show results?',
      answer: 'Off-page SEO is a long-term investment. Review generation can show local ranking improvements within weeks. Citation building typically takes 1-2 months. Link building and brand authority development take 3-6 months for meaningful impact. Results compound over time as authority grows.',
    },
    {
      question: 'What\'s the difference between off-page SEO and link building?',
      answer: 'Link building is the primary component of off-page SEO, but off-page SEO also includes reviews, citations, brand mentions without links, social signals, and reputation management. Off-page SEO is broader—it\'s everything that happens outside your website to build authority.',
    },
    {
      question: 'How important are online reviews for SEO?',
      answer: 'Extremely important! Reviews are a top local ranking factor and directly influence both search visibility and conversion rates. I help you generate authentic reviews on Google, Yelp, Houzz, and HomeAdvisor, respond professionally to all reviews, and leverage positive reviews for SEO and marketing.',
    },
    {
      question: 'Do social media signals help SEO?',
      answer: 'While social signals aren\'t direct ranking factors, they amplify SEO efforts: social profiles rank in search, social content drives traffic, social engagement builds brand awareness, and social platforms help you earn backlinks and mentions. I integrate social strategy with overall off-page SEO.',
    },
    {
      question: 'Can you fix a damaged online reputation?',
      answer: 'Yes! I implement reputation repair strategies: generating new positive reviews to dilute negatives, professionally responding to criticism, removing false reviews where possible, creating positive content that ranks, and building a systematic review generation process going forward.',
    },
    {
      question: 'What platforms should kitchen remodelers focus on?',
      answer: 'Priority platforms include Google Business Profile, Houzz, Yelp, HomeAdvisor, Angi, BBB, local chamber directories, and industry associations. I also build citations on major directories like Bing Places, Apple Maps, and niche home improvement platforms.',
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
            name: 'Off-Page SEO for Kitchen Remodeling Businesses',
            description: 'Professional off-page SEO services for kitchen remodeling businesses',
            url: 'https://moazhaider.com/services/off-page-seo',
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
                  name: 'Off-Page SEO',
                  item: 'https://moazhaider.com/services/off-page-seo',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'Off-Page SEO for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Build authority and reputation with comprehensive off-page SEO for kitchen remodeling businesses.',
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
              <span className="text-gray-900 dark:text-white font-medium">Off-Page SEO</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              Off-Page SEO for <span className="text-gradient">Kitchen Remodeling Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Build brand authority, earn quality backlinks, generate reviews, and dominate your market with comprehensive 
              off-page SEO for kitchen remodelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get an Off-Page SEO Audit
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
                What is <span className="text-gradient">Off-Page SEO?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Off-page SEO encompasses all activities outside your website that build authority, reputation, and trust signals. For 
                  kitchen remodeling businesses, this includes earning backlinks, generating reviews, building citations, getting media 
                  mentions, and managing your online reputation across the web.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  While on-page and technical SEO optimize your website itself, off-page SEO establishes your authority in the broader 
                  online ecosystem. It's about what others say about your kitchen remodeling business—reviews on Houzz, mentions in local 
                  news, backlinks from industry blogs, citations in directories, and social engagement.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Strong off-page SEO signals to Google that you're a trusted, authoritative kitchen remodeling business worth ranking highly. 
                  It directly impacts local pack rankings, organic visibility, and customer trust—making it essential for competitive markets.
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
              Common Off-Page SEO Problems <span className="text-gradient">Kitchen Remodelers Face</span>
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
                  title: 'Comprehensive Off-Page Audit',
                  description: 'I analyze your complete off-page profile: backlinks, citations, reviews, brand mentions, social presence, and online reputation. This reveals exactly where you stand versus competitors and identifies high-impact opportunities to build authority.',
                },
                {
                  title: 'Strategic Review Generation System',
                  description: 'I implement automated review request workflows that generate consistent, authentic 5-star reviews on Google, Houzz, Yelp, and HomeAdvisor. Combined with professional review responses, this builds powerful reputation signals that boost both rankings and conversions.',
                },
                {
                  title: 'Citation Building & NAP Consistency',
                  description: 'I build and optimize citations across 50+ directories with perfectly consistent NAP (Name, Address, Phone) information. This strengthens local search signals and ensures Google trusts your business information across the web.',
                },
                {
                  title: 'Digital PR & Media Outreach',
                  description: 'I proactively pitch your kitchen remodeling projects, expertise, and stories to local journalists, bloggers, and industry publications. This earns high-authority editorial backlinks and brand mentions that significantly boost domain authority.',
                },
                {
                  title: 'Brand Mention Monitoring & Conversion',
                  description: 'I monitor the web for unlinked mentions of your kitchen remodeling business and reach out to convert them into backlinks. This reclaims lost link equity from existing brand mentions and strengthens your backlink profile.',
                },
                {
                  title: 'Community Engagement & Partnership Development',
                  description: 'I identify local sponsorship opportunities, industry partnerships, supplier relationships, and community engagement opportunities that earn natural, relevant backlinks while building real business relationships in your market.',
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
                What's Included in <span className="text-gradient">Off-Page SEO</span>
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
                How Off-Page SEO Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Off-page SEO is the <strong>authority amplifier</strong> that makes all other SEO efforts more effective:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">On-Page SEO</strong> optimizes content; off-page SEO builds the authority to rank it
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Link Building</strong> is the primary off-page tactic, complemented by reviews and citations
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Local SEO</strong> depends heavily on reviews, citations, and local backlinks
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Content SEO</strong> creates linkable assets that attract off-page mentions and backlinks
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-8 border border-primary-400/30">
                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                  Related Services That Work Together:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Link Building', slug: 'link-building' },
                    { name: 'Local SEO', slug: 'local-seo' },
                    { name: 'Content SEO', slug: 'content-seo' },
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
              Build Your Market Authority Today
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get a comprehensive off-page SEO audit and discover exactly how to build authority and dominate your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your Off-Page SEO Audit
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
