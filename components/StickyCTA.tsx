'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA bar after scrolling past hero section (approximately 800px)
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-primary-600 dark:bg-primary-700 shadow-2xl"
        >
          <div className="container-custom py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold text-lg">
                  Ready to Dominate Local Kitchen Remodeling Search?
                </p>
                <p className="text-primary-100 text-sm">
                  Get your free SEO audit and discover untapped opportunities
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors duration-200 whitespace-nowrap"
                >
                  📞 Call Now
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-800 dark:bg-primary-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-900 dark:hover:bg-primary-950 transition-colors duration-200 whitespace-nowrap"
                >
                  Get Free Audit
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
