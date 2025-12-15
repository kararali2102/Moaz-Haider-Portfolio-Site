'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LinkBuildingPage() {
  const problems = [
    {
      title: 'Low Domain Authority',
      description: 'Your website has few backlinks, making it nearly impossible to outrank established competitors in search results.',
    },
    {
      title: 'No Link Building Strategy',
      description: 'You\'re not actively building backlinks, relying solely on chance while competitors systematically build authority.',
    },
    {
      title: 'Poor Quality Backlinks',
      description: 'You have spammy, low-quality links from link farms and directories that hurt more than help your rankings.',
    },
    {
      title: 'Competitors Outranking You',
      description: 'Competitors with similar content and worse websites rank higher simply because they have stronger backlink profiles.',
    },
    {
      title: 'Lost Link Opportunities',
      description: 'Local press, industry publications, and partners mention you but don\'t link to your website, wasting valuable opportunities.',
    },
    {
      title: 'No Local Citations',
      description: 'Missing or incomplete listings in local directories hurt both link profile and local search visibility.',
    },
    {
      title: 'Slow Ranking Growth',
      description: 'Without quality backlinks, your rankings improve slowly despite great content and technical optimization.',
    },
  ]

  const included = [
    'Comprehensive backlink profile audit',
    'Competitor backlink analysis',
    'Link building strategy and outreach plan',
    'Guest post placement on home improvement blogs',
    'Local citation building and NAP consistency',
    'Industry directory submissions',
    'Digital PR and brand mention outreach',
    'Broken link building opportunities',
    'Resource page link acquisition',
    'Supplier and manufacturer backlinks',
    'Local partnership and sponsorship links',
    'HARO (Help A Reporter Out) responses',
    'Content collaboration with complementary businesses',
    'Disavow file creation for toxic links',
    'Monthly link building reports',
    'Link velocity monitoring and natural profile building',
  ]

  const faqs = [
    {
      question: 'What is link building for kitchen remodeling businesses?',
      answer: 'Link building is the process of earning high-quality backlinks from other websites to yours. For kitchen remodelers, this includes getting links from local news sites, home improvement blogs, supplier websites, industry directories, and local business partners. Quality backlinks signal authority to Google and dramatically improve rankings.',
    },
    {
      question: 'How long does link building take to improve rankings?',
      answer: 'Link building is a long-term strategy. Most sites see initial ranking improvements within 3-6 months of consistent link acquisition. However, building a strong backlink profile that outranks competitors typically takes 6-12 months of sustained effort. Results compound over time.',
    },
    {
      question: 'How many backlinks do I need?',
      answer: 'Quality matters far more than quantity. One link from a high-authority home improvement publication is worth more than 100 low-quality directory links. I focus on earning relevant, authoritative backlinks from sites that actually drive referral traffic and signal trust to Google.',
    },
    {
      question: 'Do you use spammy or black-hat link building tactics?',
      answer: 'Absolutely not. I only use white-hat link building methods: genuine outreach, valuable content, legitimate partnerships, and earned mentions. Spammy tactics result in Google penalties that devastate rankings. I build links that help both SEO and bring real referral traffic.',
    },
    {
      question: 'Can you remove bad backlinks pointing to my site?',
      answer: 'Yes! I audit your backlink profile, identify toxic links from spammy sites, and create a disavow file to tell Google to ignore them. Then I implement a clean link building strategy to build a healthy, authoritative backlink profile.',
    },
    {
      question: 'What\'s the difference between link building and off-page SEO?',
      answer: 'Link building is the primary component of off-page SEO, but off-page SEO also includes brand mentions, social signals, online reviews, and local citations. Link building specifically focuses on acquiring backlinks, while off-page SEO encompasses all activities that happen outside your website.',
    },
    {
      question: 'Will link building help my local rankings?',
      answer: 'Definitely! Local link building from city-specific websites, local news, chamber of commerce, local business directories, and community partnerships signals geographic relevance to Google. This boosts both local pack rankings and organic visibility for location-based searches.',
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
            name: 'Link Building for Kitchen Remodeling Businesses',
            description: 'Professional link building services for kitchen remodeling businesses',
            url: 'https://moazhaider.com/services/link-building',
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
                  name: 'Link Building',
                  item: 'https://moazhaider.com/services/link-building',
                },
              ],
            },
            mainEntity: {
              '@type': 'Service',
              serviceType: 'Link Building for Kitchen Remodeling',
              provider: {
                '@type': 'ProfessionalService',
                name: 'Moaz Haider - Kitchen Remodeling SEO',
              },
              areaServed: 'Worldwide',
              description: 'Build domain authority and improve rankings with strategic link building for kitchen remodeling businesses.',
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
              <span className="text-gray-900 dark:text-white font-medium">Link Building</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 leading-tight text-gray-900 dark:text-white">
              Link Building for <span className="text-gradient">Kitchen Remodeling Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Build domain authority, earn high-quality backlinks, and outrank competitors with strategic link acquisition 
              for kitchen remodelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get a Backlink Audit
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
                What is <span className="text-gradient">Link Building?</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Link building is the strategic process of earning high-quality backlinks from other websites to yours. For kitchen 
                  remodeling businesses, backlinks act as "votes of confidence" from other sites, signaling to Google that your website 
                  is authoritative, trustworthy, and deserves higher rankings.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Quality backlinks remain one of Google's top ranking factors. A strong backlink profile helps kitchen remodelers rank 
                  for competitive keywords, appear in local packs, and establish authority in their market. Without backlinks, even 
                  perfectly optimized websites struggle to rank against competitors with stronger link profiles.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Effective link building for kitchen remodelers involves earning links from local news sites, home improvement blogs, 
                  supplier websites, industry associations, business directories, and strategic partners—all while maintaining a natural, 
                  diverse link profile that Google rewards.
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
              Common Link Building Problems <span className="text-gradient">Kitchen Remodelers Face</span>
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
                  title: 'Comprehensive Backlink Analysis',
                  description: 'I audit your current backlink profile and analyze competitor link profiles to identify gaps, opportunities, and toxic links. This reveals exactly what types of backlinks you need to build authority and outrank competitors in your market.',
                },
                {
                  title: 'Strategic Link Acquisition Plan',
                  description: 'I develop a custom link building roadmap targeting high-value opportunities: local news placements, guest posts on home improvement blogs, supplier relationships, industry directories, and partnership opportunities specific to kitchen remodeling.',
                },
                {
                  title: 'Digital PR & Brand Mention Outreach',
                  description: 'I proactively pitch your kitchen remodeling projects, expertise, and newsworthy stories to journalists, bloggers, and industry publications. This earns high-authority editorial links that significantly boost domain authority.',
                },
                {
                  title: 'Local Citation Building',
                  description: 'I build and optimize citations across local directories, industry-specific platforms, and review sites. Consistent NAP (Name, Address, Phone) citations strengthen both link profile and local search visibility.',
                },
                {
                  title: 'Content-Driven Link Earning',
                  description: 'I create linkable assets—ultimate guides, infographics, research, calculators—that naturally attract backlinks. Combined with strategic outreach, this earns organic links from authoritative sites in the home improvement space.',
                },
                {
                  title: 'Relationship-Based Link Building',
                  description: 'I identify and nurture relationships with suppliers, manufacturers, complementary contractors, local chambers of commerce, and industry associations. These partnerships yield natural, contextually relevant backlinks that Google values.',
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
                What's Included in <span className="text-gradient">Link Building</span>
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
                How Link Building Fits Into <span className="text-gradient">Your Overall Strategy</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Link building is the <strong>authority builder</strong> in your kitchen remodeling SEO strategy:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-900 dark:text-white">Content SEO</strong> creates valuable assets that attract natural backlinks and support outreach
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Technical SEO</strong> ensures link equity flows properly throughout your site architecture
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">Local SEO</strong> gets amplified by local citations and community backlinks
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">On-Page SEO</strong> maximizes the value received from each earned backlink
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-8 border border-primary-400/30">
                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                  Related Services That Work Together:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Off-Page SEO', slug: 'off-page-seo' },
                    { name: 'Content SEO', slug: 'content-seo' },
                    { name: 'Local SEO', slug: 'local-seo' },
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
              Build Your Authority Today
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              Get a comprehensive backlink audit and discover exactly what links you need to outrank competitors in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:contact@moazhaider.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Your Backlink Audit
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
