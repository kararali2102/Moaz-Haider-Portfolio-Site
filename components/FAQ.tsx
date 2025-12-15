'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long until I see results from SEO?',
      answer: 'Most kitchen remodeling businesses start seeing initial improvements within 30-60 days, including better rankings for long-tail keywords and increased organic traffic. More competitive terms typically take 3-6 months to show significant movement. The timeline depends on your current site condition, competition level, and the keywords we\'re targeting.',
    },
    {
      question: 'Do you guarantee #1 rankings on Google?',
      answer: 'No ethical SEO professional can guarantee specific rankings, as Google\'s algorithm is constantly evolving and many factors are outside our control. However, I do guarantee to implement proven white-hat strategies that consistently improve rankings, traffic, and most importantly—qualified leads for your kitchen remodeling business.',
    },
    {
      question: 'What makes your approach different from other SEO agencies?',
      answer: 'Three key differences: 1) You work directly with me—no account managers or juniors handling your account. 2) I specialize exclusively in kitchen remodeling SEO, so I deeply understand your industry, customers, and competition. 3) I focus on ROI and business outcomes, not just vanity metrics like rankings.',
    },
    {
      question: 'Can you work with my existing marketing team?',
      answer: 'Absolutely! I regularly collaborate with in-house marketing teams, web developers, and other agencies. I integrate seamlessly with your existing processes and can provide training, guidance, or handle everything independently—whatever works best for your business.',
    },
    {
      question: 'Do I need new content or can you optimize my existing pages?',
      answer: 'Both! I start by optimizing your existing project pages, galleries, and service content to maximize their potential. Then we strategically create new content to target additional keywords and attract more qualified leads. Many kitchen remodeling businesses have great visual content that just needs proper SEO optimization.',
    },
    {
      question: 'How do you measure success?',
      answer: 'Success is measured by meaningful business metrics: organic traffic growth, keyword rankings for high-intent terms, lead quality and quantity, phone calls and form submissions, and ultimately ROI. I provide transparent monthly reports showing exactly how SEO is impacting your bottom line.',
    },
    {
      question: 'What CMS platforms do you work with?',
      answer: 'I work with all major CMS platforms including WordPress, Shopify, Wix, Squarespace, Webflow, and custom-built websites. My SEO strategies are platform-agnostic, though I\'ll make specific recommendations based on your platform\'s strengths and limitations.',
    },
    {
      question: 'Do you offer local SEO for multiple locations?',
      answer: 'Yes! Multi-location local SEO is one of my specialties. Whether you have 2 showrooms or 20 service areas, I develop scalable strategies for Google Business Profile optimization, local citations, location-specific content, and service area targeting to dominate each market.',
    },
  ]

  // JSON-LD for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section ref={ref} className="section-padding bg-gray-50 dark:bg-background-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about kitchen remodeling SEO services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-background-light dark:hover:bg-surface-darker/50 transition-colors duration-200"
                  aria-expanded={activeIndex === index}
                >
                  <span className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Still have questions? Let's talk about your kitchen remodeling SEO needs.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              Schedule a Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
