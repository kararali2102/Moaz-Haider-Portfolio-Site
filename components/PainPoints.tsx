'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function PainPoints() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const painPoints = [
    {
      title: 'Scaling SEO Without Complexity',
      description: 'Growing kitchen remodeling businesses struggle with optimizing hundreds of pages across multiple locations.',
      solutions: [
        'Mass page optimization for project galleries',
        'Multi-location SEO strategy',
        'Automated technical SEO monitoring',
        'Scalable content templates',
      ],
      gradient: 'from-primary-500/20 to-primary-700/20',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Identifying What\'s Holding Back Rankings',
      description: 'Technical issues, poor site structure, and hidden problems prevent kitchen remodelers from ranking.',
      solutions: [
        'Comprehensive technical SEO audit',
        'Site architecture analysis',
        'Core Web Vitals optimization',
        'Indexation and crawlability fixes',
      ],
      gradient: 'from-accent-500/20 to-accent-700/20',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Creating Content That Attracts Clients',
      description: 'Generic content doesn\'t rank or convert. You need strategic content that speaks to homeowners.',
      solutions: [
        'High-intent keyword targeting',
        'Project page optimization',
        'Blog content strategy',
        'Gallery and portfolio SEO',
      ],
      gradient: 'from-blue-500/20 to-blue-700/20',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50 dark:bg-background-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Stop Struggling With SEO <span className="text-gradient">That Doesn't Deliver Results</span>
          </h2>
          <p className="section-subtitle">
            I solve the most common challenges kitchen remodeling businesses face with SEO
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative bg-gradient-to-br ${point.gradient} rounded-2xl p-8 border border-border-light dark:border-border-dark hover:border-primary-500/50 transition-all duration-300 overflow-hidden group bg-surface-light dark:bg-surface-dark`}
            >
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>

                <h3 className="text-2xl font-bold font-heading mb-3 text-text-primary-light dark:text-text-primary-dark">
                  {point.title}
                </h3>

                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed">
                  {point.description}
                </p>

                <div className="space-y-3 mb-6">
                  {point.solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">{solution}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/50"
                >
                  Get Started Today
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
