'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CaseStudy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const results = [
    { value: '+250%', label: 'Organic Traffic Increase' },
    { value: '+300%', label: 'Local Leads Generated' },
    { value: '100%', label: 'Showroom Visit Improvement' },
  ]

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-background-darker relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-transparent to-dark-950" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-primary-400 font-semibold text-sm">Success Story</span>
          </div>
          <h2 className="section-title">
            How We Transformed <span className="text-gradient">Modern Kitchen Co.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Case Study Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Challenge */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-heading text-text-primary-light dark:text-text-primary-dark">The Challenge</h3>
              </div>
              <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                Modern Kitchen Co., a premium remodeling business, was struggling with low online visibility. 
                Despite having stunning project work, they weren't ranking for key kitchen remodeling terms 
                and were losing leads to competitors with inferior services.
              </p>
            </div>

            {/* Strategy */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-heading text-text-primary-light dark:text-text-primary-dark">Our Strategy</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Comprehensive technical SEO audit and fixes',
                  'Local SEO optimization for 5 service areas',
                  'Gallery and project page optimization',
                  'Strategic content creation targeting high-intent keywords',
                  'White-hat link building from home design publications',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark italic mb-4">
                    "Working with Moaz completely transformed our online presence. We went from invisible to dominating 
                    our local market. The quality of leads increased dramatically, and we're now booking consultations 
                    2-3 months out."
                  </p>
                  <div>
                    <p className="font-bold text-text-primary-light dark:text-text-primary-dark">Sarah Mitchell</p>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Owner, Modern Kitchen Co.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 border border-primary-500/30">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">The Results</h3>
              </div>

              <div className="space-y-6">
                {results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="bg-surface-light/50 dark:bg-surface-darker/50 backdrop-blur rounded-xl p-6 border border-border-light dark:border-border-dark"
                  >
                    <div className="text-5xl font-bold font-heading text-gradient mb-2">
                      {result.value}
                    </div>
                    <div className="text-text-secondary-light dark:text-text-secondary-dark text-lg">{result.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark">
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4">
                  <strong className="text-text-primary-light dark:text-text-primary-dark">Timeline:</strong> Results achieved in 6 months
                </p>
                <motion.a
                  href="/case-studies"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                >
                  View Full Case Study
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
