'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const comparisons = [
    {
      feature: 'Tailor-Made Strategy',
      moaz: true,
      agency: false,
    },
    {
      feature: 'Direct Specialist Access',
      moaz: true,
      agency: false,
    },
    {
      feature: 'Kitchen Remodeling Expertise',
      moaz: true,
      agency: false,
    },
    {
      feature: 'Transparent Pricing & Reporting',
      moaz: true,
      agency: false,
    },
    {
      feature: 'ROI-Focused Approach',
      moaz: true,
      agency: false,
    },
    {
      feature: 'Long-Term SEO Success',
      moaz: true,
      agency: false,
    },
    {
      feature: 'Works as Extension of Your Team',
      moaz: true,
      agency: false,
    },
    {
      feature: 'Results-Driven, Not Hours-Driven',
      moaz: true,
      agency: false,
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-background-light dark:bg-background-darker">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Moaz Haider vs <span className="text-gradient">Typical SEO Agencies</span>
          </h2>
          <p className="section-subtitle">
            See the difference personalized, expert SEO makes for your kitchen remodeling business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-dark-900 border-b border-dark-700">
              <div className="p-4 md:p-6"></div>
              <div className="p-4 md:p-6 text-center border-x border-dark-700">
                <div className="font-bold font-heading text-lg md:text-xl text-gradient">
                  Moaz Haider
                </div>
              </div>
              <div className="p-4 md:p-6 text-center">
                <div className="font-bold font-heading text-lg md:text-xl text-gray-400">
                  Typical Agency
                </div>
              </div>
            </div>

            {/* Table Body */}
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className={`grid grid-cols-3 ${
                  index !== comparisons.length - 1 ? 'border-b border-dark-700' : ''
                } hover:bg-dark-700/50 transition-colors duration-200`}
              >
                <div className="p-4 md:p-6">
                  <span className="text-gray-300 text-sm md:text-base font-medium">
                    {comparison.feature}
                  </span>
                </div>

                <div className="p-4 md:p-6 flex items-center justify-center border-x border-dark-700">
                  {comparison.moaz ? (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </div>

                <div className="p-4 md:p-6 flex items-center justify-center">
                  {comparison.agency ? (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center text-gray-500 text-sm mt-6"
          >
            * Based on feedback from kitchen remodelers who switched from other SEO agencies
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
