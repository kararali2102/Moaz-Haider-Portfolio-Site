'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme | null
    
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
      document.body.className = savedTheme === 'dark' 
        ? 'font-sans antialiased bg-background-dark text-text-primary-dark transition-colors duration-300'
        : 'font-sans antialiased bg-background-light text-text-primary-light transition-colors duration-300'
    } else {
      // Use prefers-color-scheme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = prefersDark ? 'dark' : 'light'
      setTheme(initialTheme)
      document.documentElement.classList.toggle('dark', initialTheme === 'dark')
      document.body.className = initialTheme === 'dark'
        ? 'font-sans antialiased bg-background-dark text-text-primary-dark transition-colors duration-300'
        : 'font-sans antialiased bg-background-light text-text-primary-light transition-colors duration-300'
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    document.body.className = newTheme === 'dark'
      ? 'font-sans antialiased bg-background-dark text-text-primary-dark transition-colors duration-300'
      : 'font-sans antialiased bg-background-light text-text-primary-light transition-colors duration-300'
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
