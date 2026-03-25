import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ThemeSwitch } from '@/components/ui/theme-switch-button'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Spaces', href: '/spaces' },
  { label: 'Community', href: '/community' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const lightMode = isHome && !scrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || !isHome
          ? 'backdrop-blur-md shadow-sm border-b border-clay/10'
          : 'bg-transparent'
      )}
      style={scrolled || !isHome ? { backgroundColor: 'var(--color-nav-bg)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-clay rounded-sm flex items-center justify-center">
            <span className="text-ivory font-display font-bold text-sm leading-none">C</span>
          </div>
          <span className={cn('font-display font-semibold text-lg tracking-tight transition-colors', lightMode ? 'text-ivory' : 'text-heading dark:text-ivory')}>
            Collective
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-clay',
                lightMode ? 'text-ivory/85' : 'text-charcoal',
                location.pathname === link.href && 'text-clay'
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeSwitch />
          <Link
            to="/contact"
            className="ml-2 px-5 py-2 bg-clay text-ivory text-sm font-medium rounded-sm hover:bg-terracotta transition-colors"
          >
            Inquire About Space
          </Link>
        </nav>

        <button
          className={cn('md:hidden transition-colors', lightMode ? 'text-ivory' : 'text-charcoal')}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden backdrop-blur-md border-b border-clay/10 px-6 pb-6 pt-2"
            style={{ backgroundColor: 'var(--color-nav-bg)' }}
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-charcoal font-medium border-b border-cream text-sm hover:text-clay transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeSwitch className="mt-4 mx-auto" />
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 block text-center px-5 py-3 bg-clay text-ivory text-sm font-medium rounded-sm hover:bg-terracotta transition-colors"
            >
              Inquire About Space
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
