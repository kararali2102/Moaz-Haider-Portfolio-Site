'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      number: '01',
      title: 'Discovery & SEO Audit',
      timeframe: 'Week 1-2',
      description: 'Comprehensive analysis of your current website, competitors, and opportunities.',
      tasks: [
        'Technical SEO audit',
        'Competitor analysis',
        'Keyword research',
        'Current rankings assessment',
      ],
    },
    {
      number: '02',
      title: 'Custom Strategy & Planning',
      timeframe: 'Week 2-3',
      description: 'Develop a tailored SEO roadmap aligned with your business goals.',
      tasks: [
        'Strategic planning session',
        'Priority identification',
        'Timeline & milestones',
        'KPI definition',
      ],
    },
    {
      number: '03',
      title: 'Technical Optimization',
      timeframe: 'Week 3-5',
      description: 'Fix technical issues and optimize site infrastructure for search engines.',
      tasks: [
        'Site speed optimization',
        'Schema markup implementation',
        'Indexation fixes',
        'Core Web Vitals improvements',
      ],
    },
    {
      number: '04',
      title: 'On-Page Optimization',
      timeframe: 'Week 4-6',
      description: 'Optimize existing pages for target keywords and search intent.',
      tasks: [
        'Title & meta optimization',
        'Header structure refinement',
        'Content enhancement',
        'Image optimization',
      ],
    },
    {
      number: '05',
      title: 'Content Creation & Optimization',
      timeframe: 'Week 5-7',
      description: 'Create and optimize content that attracts and converts your ideal clients.',
      tasks: [
        'Blog content creation',
        'Project page optimization',
        'Gallery SEO',
        'Service page enhancement',
      ],
    },
    {
      number: '06',
      title: 'Link Building & Authority',
      timeframe: 'Week 6-8',
      description: 'Build high-quality backlinks from relevant, authoritative sources.',
      tasks: [
        'Digital PR outreach',
        'Guest posting strategy',
        'Local citations',
        'Industry partnerships',
      ],
    },
    {
      number: '07',
      title: 'Monitoring & Reporting',
      timeframe: 'Ongoing',
      description: 'Track progress, analyze results, and continuously optimize for better performance.',
      tasks: [
        'Rank tracking',
        'Traffic analysis',
        'Conversion monitoring',
        'Monthly reporting',
      ],
    },
  ]

  return (
    <section ref={ref} id="process" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            How I Deliver <span className="text-gradient">Kitchen Remodeling SEO Success</span>
          </h2>
          <p className="section-subtitle">
            A proven 7-step process designed to maximize your rankings, traffic, and leads
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl font-bold font-heading text-gradient opacity-50">
                        {step.number}
                      </span>
                      <span className="text-sm text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
                        {step.timeframe}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-heading mb-3 text-white group-hover:text-gradient transition-all">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="w-12 h-12 bg-primary-500 rounded-full border-4 border-dark-950 flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/50"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? '' : 'lg:col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Start Your SEO Journey Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
