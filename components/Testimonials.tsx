'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote: "Moaz transformed our online presence completely. We went from barely ranking to dominating page 1 for all our target keywords. Our lead quality has never been better.",
      author: "Michael Chen",
      role: "Owner",
      company: "Elite Kitchen Designs",
      rating: 5,
      result: "+280% Organic Traffic",
    },
    {
      quote: "What sets Moaz apart is his deep understanding of the kitchen remodeling industry. He doesn't just do SEO—he understands our customers and what they're searching for.",
      author: "Jennifer Rodriguez",
      role: "Marketing Director",
      company: "Premier Renovations",
      rating: 5,
      result: "+350% Lead Generation",
    },
    {
      quote: "The ROI from Moaz's SEO services has been incredible. We've cut our paid advertising spend in half because organic leads now make up the majority of our pipeline.",
      author: "David Thompson",
      role: "CEO",
      company: "Modern Kitchen Co.",
      rating: 5,
      result: "5× ROI Achieved",
    },
    {
      quote: "Working directly with Moaz made all the difference. No account managers, no runaround—just expert guidance and transparent communication every step of the way.",
      author: "Lisa Anderson",
      role: "Owner",
      company: "Luxury Kitchen Studio",
      rating: 5,
      result: "95% Retention Rate",
    },
  ]

  const metrics = [
    { value: '5.0', label: 'Average Rating', icon: '⭐' },
    { value: '95%', label: 'Client Retention', icon: '🤝' },
    { value: '200%', label: 'Avg Traffic Growth', icon: '📈' },
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
            What <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Real results from real kitchen remodeling businesses
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800 border border-dark-700 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-2">{metric.icon}</div>
              <div className="text-4xl font-bold font-heading text-gradient mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-8 md:p-12 border border-primary-500/20">
            {/* Active Testimonial */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Result Badge */}
              <div className="flex justify-center mb-6">
                <span className="bg-primary-500/20 border border-primary-500/50 text-primary-400 px-6 py-2 rounded-full font-semibold">
                  {testimonials[activeIndex].result}
                </span>
              </div>

              {/* Author */}
              <div className="text-center">
                <p className="text-white font-bold text-lg">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-gray-400">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </p>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-full p-3 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-full p-3 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
