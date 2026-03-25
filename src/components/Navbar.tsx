import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Spaces', 'Events', 'Community', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-clay/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-clay rounded-sm flex items-center justify-center">
            <span className="text-ivory font-display font-bold text-sm leading-none">C</span>
          </div>
          <span className={`font-display font-semibold text-lg tracking-tight transition-colors ${scrolled ? 'text-espresso' : 'text-ivory'}`}>
            Collective
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-clay ${
                scrolled ? 'text-charcoal' : 'text-ivory/90'
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-clay text-ivory text-sm font-medium rounded-sm hover:bg-terracotta transition-colors"
          >
            Inquire About Space
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-charcoal' : 'text-ivory'}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-ivory/98 backdrop-blur-md border-b border-clay/10 px-6 pb-6 pt-2"
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-charcoal font-medium border-b border-cream text-sm"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block text-center px-5 py-3 bg-clay text-ivory text-sm font-medium rounded-sm"
            >
              Inquire About Space
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
