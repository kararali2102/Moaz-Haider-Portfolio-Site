'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LocalSEOPage() {
  const problems = [
    {
      title: 'Not Showing in Google Local Pack',
      description: 'Your competitors appear in the map results when homeowners search "kitchen remodeling near me"—but you don\'t.',
    },
    {
      title: 'Incomplete Google Business Profile',
      description: 'Missing photos, sparse descriptions, and no reviews make your business look unprofessional compared to competitors.',
    },
    {
      title: 'Inconsistent Business Citations',
      description: 'Your NAP (Name, Address, Phone) information varies across directories, confusing Google and hurting local rankings.',
    },
    {
      title: 'Poor Service Area Targeting',
      description: 'You serve multiple cities but your website doesn\'t effectively target each location\'s search traffic.',
    },
    {
      title: 'No Reviews or Review Strategy',
      description: 'Lack of customer reviews damages trust and prevents you from ranking in local search results.',
    },
    {
      title: 'Weak Local Content',
      description: 'Generic content that doesn\'t mention specific neighborhoods, landmarks, or local kitchen design trends.',
    },
    {
      title: 'Missing LocalBusiness Schema',
      description: 'Without proper structured data, Google can\'t fully understand your business for local search.',
    },
  ]

  const included = [
    'Google Business Profile optimization (complete profile, categories, attributes)',
    'GBP posting strategy for ongoing engagement',
    'Professional business description with keyword optimization',
    'Photo optimization (before/after projects, team, office)',
    'Review generation strategy and response templates',
    'Local citation building on 50+ high-authority directories',
    'NAP consistency audit and correction',
    'Service area page creation and optimization',
    'Neighborhood and city-specific content development',
    'LocalBusiness schema markup implementation',
    'Local link building from chambers, associations, and local press',
    'Competitor local SEO analysis',
    'Local keyword research and mapping',
    'Bing Places and Apple Maps optimization',
    'Online reputation management strategy',
    'Local search ranking tracking',
  ]

  const faqs = [
    {
      question: 'What is local SEO and why is it critical for kitchen remodeling businesses?',
      answer: 'Local SEO optimizes your online presence for location-based searches like "kitchen remodeling near me" or "kitchen contractors in [city]". It\'s critical because most homeowners hire local contractors, and 76% of people who search on their smartphone for something nearby visit a business within 24 hours.',
    },
    {
      question: 'How long does it take to see local SEO results?',
      answer: 'Google Business Profile optimizations can show results within 2-4 weeks. Full local SEO campaigns (citations, reviews, content) typically show significant improvement in 3-6 months. The timeframe depends on your market competition and current local presence.',
    },
    {
      question: 'Do I need separate pages for each city I serve?',
      answer: 'Yes, if you want to rank well in multiple cities. I create optimized service area pages for each major city you serve, with unique content about local projects, testimonials, and area-specific information. This signals relevance to Google for each location.',
    },
    {
      question: 'How do you get more customer reviews?',
      answer: 'I create a systematic review generation process: automated email sequences post-project, direct review request links, follow-up strategies, and response templates. I help you ethically gather reviews on Google, Facebook, Houzz, and industry platforms.',
    },
    {
      question: 'What are local citations and why do they matter?',
      answer: 'Citations are online mentions of your business name, address, and phone number on directories like Yelp, Angi, Houzz, Yellow Pages, etc. Consistent citations build trust with Google and help you rank in local search. I build citations on 50+ relevant platforms.',
    },
    {
      question: 'Can local SEO work if I serve multiple states?',
      answer: 'Absolutely! I create location-specific pages and content for each market you serve. The strategy scales—whether you\'re targeting one city or 50. Each location gets optimized individually while maintaining brand consistency.',
    },
    {
      question: 'What\'s the difference between local SEO and regular SEO?',
      answer: 'Local SEO focuses specifically on ranking for location-based searches and appearing in Google\'s Local Pack (map results). Regular SEO targets broader informational searches. For kitchen remodeling contractors, local SEO often drives the most valuable leads.',
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
            name: 'Local SEO for Kitchen Remodeling Businesses',
            description: 'Dominate local search results for kitchen remodeling services',
            url: 'https://moazhaider.com/services/local-seo',
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
                  name: 'Local SEO',
                  item: 'https://moazhaider.com/services/local-seo',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'Local SEO for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Dominate local search results for kitchen remodeling services in your service areas.',
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
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <Link href="/services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white font-medium">Local SEO</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              Local SEO for <span className="text-gradient">Kitchen Remodeling Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Dominate local search results, appear in Google's Local Pack, and generate qualified leads from homeowners 
              searching for kitchen remodeling services in your area.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get a Free Local SEO Audit
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
                What is <span className="text-gradient">Local SEO?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Local SEO optimizes your online presence to attract customers from location-based searches. When homeowners search 
                  "kitchen remodeling near me" or "kitchen contractors in [city]", local SEO determines whether you appear—and where 
                  you rank—in those critical results.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  For kitchen remodeling businesses, local SEO is the most valuable SEO investment you can make. Why? Because homeowners 
                  hire local contractors. They're not searching for kitchen remodelers across the country—they're searching specifically 
                  in their city, and they're ready to request quotes.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Local SEO encompasses Google Business Profile optimization, local citations, reviews, service area pages, local link 
                  building, and appearing in Google's Local Pack (the map results). It transforms your website into a local lead generation 
                  machine.
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
              Common Local SEO Problems <span className="text-gradient">Kitchen Remodelers Face</span>
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
                  title: 'Complete Google Business Profile Optimization',
                  description: 'I fully optimize your GBP with compelling descriptions, proper categories, attributes, service areas, business hours, high-quality photos (projects, team, office), and regular posts. This is the foundation of local visibility.',
                },
                {
                  title: 'Strategic Review Generation',
                  description: 'I create a systematic process to generate authentic customer reviews on Google, Facebook, Houzz, and industry platforms. More reviews = higher rankings + more trust. I provide response templates and reputation management strategies.',
                },
                {
                  title: 'Local Citation Building',
                  description: 'I build and optimize your business presence on 50+ relevant directories (Angi, Yelp, Houzz, HomeAdvisor, Yellow Pages, etc.) with consistent NAP information. This builds local authority and trust signals.',
                },
                {
                  title: 'Service Area Page Creation',
                  description: 'For every city you serve, I create dedicated, optimized service area pages with unique content about local projects, testimonials, area-specific design trends, and local landmarks. These pages target "[city] kitchen remodeling" searches.',
                },
                {
                  title: 'LocalBusiness Schema Implementation',
                  description: 'I implement structured data that tells Google exactly what your business is, where you operate, your hours, services, and reviews. This helps you appear in rich results and knowledge panels.',
                },
                {
                  title: 'Local Link Building',
                  description: 'I earn backlinks from local chambers of commerce, business associations, home design blogs, local press, and community organizations. Local backlinks signal geographic relevance to Google.',
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
                What's Included in <span className="text-gradient">Local SEO</span>
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
                How Local SEO Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Local SEO is often the <strong>highest-ROI</strong> component of your kitchen remodeling SEO strategy because it 
                  targets bottom-of-funnel, high-intent searches:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">Technical SEO</strong> ensures your location pages load fast and are mobile-friendly
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">On-Page SEO</strong> optimizes service area pages for local keywords
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Content SEO</strong> creates local guides and area-specific resources
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Link Building</strong> focuses on local backlinks that signal geographic relevance
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
              Ready to Dominate Local Search?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get a free local SEO audit and discover how to outrank competitors in your service areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your Free Local SEO Audit
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
