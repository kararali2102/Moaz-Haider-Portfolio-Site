'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [cmsOpen, setCmsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'On-Page Optimization', href: '/services/on-page-optimization' },
    { name: 'Off-Page & Link Building', href: '/services/link-building' },
    { name: 'SEO Audit', href: '/services/seo-audit' },
    { name: 'Keyword Research', href: '/services/keyword-research' },
    { name: 'Competitor Analysis', href: '/services/competitor-analysis' },
    { name: 'Local SEO', href: '/services/local-seo' },
  ]

  const cmsPlatforms = [
    { name: 'WordPress', href: '/cms/wordpress' },
    { name: 'Shopify', href: '/cms/shopify' },
    { name: 'Wix', href: '/cms/wix' },
    { name: 'Squarespace', href: '/cms/squarespace' },
    { name: 'Webflow', href: '/cms/webflow' },
    { name: 'Custom CMS', href: '/cms/custom' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-surface-darker/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-800/50' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold font-heading"
            >
              <span className="text-gradient">Moaz Haider</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-semibold"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-semibold flex items-center">
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-surface-dark rounded-xl shadow-2xl border border-gray-200 dark:border-border-dark overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-surface-darker hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CMS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCmsOpen(true)}
              onMouseLeave={() => setCmsOpen(false)}
            >
              <button className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-semibold flex items-center">
                CMS
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    cmsOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {cmsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-surface-dark rounded-xl shadow-2xl border border-gray-200 dark:border-border-dark overflow-hidden"
                  >
                    {cmsPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="block px-4 py-3 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-surface-darker hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {platform.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-semibold"
            >
              About
            </Link>

            <Link
              href="/case-studies"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-semibold"
            >
              Case Studies
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Right Side: Theme Toggle + CTA */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact" className="btn-primary hidden lg:inline-block">
                Get Free SEO Audit
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-300 hover:text-primary-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
