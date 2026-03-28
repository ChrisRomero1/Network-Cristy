import { Link } from 'react-router-dom'
import { MapPin, Mail } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Directory', to: '/directory' },
  { label: 'Community', to: '/community' },
  { label: 'Events', to: '/events' },
]

const involvedLinks = [
  { label: 'List Your Business', to: '/directory' },
  { label: 'Host an Event', to: '/events' },
  { label: 'Join the Community', to: '/community' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-ivory/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-clay rounded-sm flex items-center justify-center">
                <span className="text-ivory font-display font-bold text-sm leading-none">C</span>
              </div>
              <span className="font-display font-semibold text-xl text-ivory tracking-tight">Cristy Space</span>
            </div>
            <p className="text-ivory/40 text-sm leading-relaxed max-w-sm font-light mb-4">
              Chattanooga's curated platform for business discovery, creative community, and entrepreneurial growth.
            </p>
            <div className="flex items-center gap-2 text-ivory/40 text-sm mb-3">
              <MapPin size={13} className="text-clay flex-shrink-0" />
              <span>Chattanooga, Tennessee</span>
            </div>
            <div className="flex items-center gap-2 text-ivory/40 text-sm">
              <Mail size={13} className="text-clay flex-shrink-0" />
              <a href="mailto:hello@cristyspace.com" className="hover:text-clay transition-colors">
                hello@cristyspace.com
              </a>
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="text-ivory/70 text-xs tracking-[0.2em] uppercase font-medium mb-6">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-ivory/40 text-sm hover:text-clay transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved column */}
          <div>
            <h4 className="text-ivory/70 text-xs tracking-[0.2em] uppercase font-medium mb-6">Get Involved</h4>
            <ul className="space-y-3">
              {involvedLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-ivory/40 text-sm hover:text-clay transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-ivory/8 gap-4">
          <p className="text-ivory/25 text-xs">
            © 2025 Cristy Space. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-ivory/30 hover:text-clay transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="text-ivory/30 hover:text-clay transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" className="text-ivory/30 hover:text-clay transition-colors">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
