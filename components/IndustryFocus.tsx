'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function IndustryFocus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const businessTypes = [
    {
      title: 'Kitchen Remodeling Companies',
      description: 'Full-service remodeling firms specializing in complete kitchen transformations',
      icon: '🏗️',
    },
    {
      title: 'Design-Build Firms',
      description: 'Integrated design and construction services for custom kitchen projects',
      icon: '✏️',
    },
    {
      title: 'Custom Cabinetry Companies',
      description: 'Specialists in custom kitchen cabinets and millwork',
      icon: '🪵',
    },
    {
      title: 'Kitchen Showrooms',
      description: 'Retail showrooms featuring kitchen displays and consultations',
      icon: '🏪',
    },
  ]

  const benefits = [
    'Increased calls and quote requests from qualified homeowners',
    'Higher showroom foot traffic and consultation bookings',
    'High-intent leads actively searching for kitchen remodeling',
    'National visibility for brand authority',
    'Local dominance in your service areas',
    'Year-round lead generation, not seasonal',
  ]

  return (
    <section ref={ref} className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Who <span className="text-gradient">I Help</span>
          </h2>
          <p className="section-subtitle">
            Specialized SEO services exclusively for kitchen remodeling businesses
          </p>
        </motion.div>

        {/* Business Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {businessTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-gradient text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-2 text-white">
                {type.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-8 md:p-12 border border-primary-500/20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold font-heading mb-4 text-white">
                What You'll <span className="text-gradient">Achieve</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                My specialized approach to kitchen remodeling SEO delivers tangible business outcomes 
                that directly impact your bottom line.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-block"
              >
                Get a Free Kitchen Remodeling SEO Audit
              </motion.a>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.05 }}
                  className="flex items-start space-x-3 bg-dark-800/50 backdrop-blur rounded-lg p-4"
                >
                  <svg className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
