'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function GlobalReach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeRegion, setActiveRegion] = useState<string | null>('United States')

  const stats = [
    { value: '120+', label: 'Countries Served' },
    { value: '2000+', label: 'Cities Covered' },
    { value: '24/7', label: 'Support Available' },
    { value: '10,000+', label: 'Pages Optimized' },
  ]

  const regions = [
    {
      country: 'United States',
      cities: [
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
        'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
      ],
    },
    {
      country: 'Canada',
      cities: [
        'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton',
        'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener'
      ],
    },
    {
      country: 'United Kingdom',
      cities: [
        'London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow',
        'Liverpool', 'Newcastle', 'Sheffield', 'Bristol', 'Edinburgh'
      ],
    },
    {
      country: 'Australia',
      cities: [
        'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide',
        'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong', 'Hobart'
      ],
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-background-darker">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Serving Kitchen Remodelers <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="section-subtitle">
            Expert kitchen remodeling SEO services available in major cities across the globe
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-heading text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary-light dark:text-text-secondary-dark">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Regions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-8 overflow-hidden"
        >
          <h3 className="text-2xl font-bold font-heading mb-6 text-center text-white">
            Select Your Region
          </h3>

          {/* Country Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {regions.map((region, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveRegion(region.country)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeRegion === region.country
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                    : 'bg-surface-light dark:bg-surface-darker text-text-secondary-light dark:text-text-secondary-dark hover:bg-surface-dark dark:hover:bg-surface-dark'
                }`}
              >
                {region.country}
              </motion.button>
            ))}
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {regions
              .find(r => r.country === activeRegion)
              ?.cities.map((city, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-dark-700 hover:bg-dark-600 border border-dark-600 hover:border-primary-500/50 rounded-lg p-3 text-center transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium">
                    {city}
                  </span>
                </motion.div>
              ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            Don't see your city? I serve kitchen remodeling businesses in 2000+ cities globally.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
