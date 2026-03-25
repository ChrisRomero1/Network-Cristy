import { Link } from 'react-router-dom'
import { Globe, Share2, Link2, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-ivory/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 bg-clay rounded-sm flex items-center justify-center">
                <span className="text-ivory font-display font-bold text-sm leading-none">C</span>
              </div>
              <span className="font-display font-semibold text-xl text-ivory tracking-tight">Collective</span>
            </Link>
            <p className="text-ivory/40 text-sm leading-relaxed max-w-xs font-light mb-6">
              A multi-space community for artists, entrepreneurs, and builders at the heart of Chattanooga, Tennessee.
            </p>
            <div className="flex items-center gap-2 text-ivory/40 text-sm mb-3">
              <MapPin size={13} className="text-clay flex-shrink-0" />
              <span>Chattanooga, Tennessee</span>
            </div>
            <div className="flex items-center gap-2 text-ivory/40 text-sm">
              <Mail size={13} className="text-clay flex-shrink-0" />
              <a href="mailto:hello@collective.com" className="hover:text-clay transition-colors">hello@collective.com</a>
            </div>
          </div>

          {[
            { heading: 'Explore', links: [{ label: 'About', href: '/about' }, { label: 'Spaces', href: '/spaces' }, { label: 'Events', href: '/events' }, { label: 'Community', href: '/community' }] },
            { heading: 'Get Involved', links: [{ label: 'Inquire About Space', href: '/contact' }, { label: 'Host an Event', href: '/contact' }, { label: 'Join the Community', href: '/contact' }, { label: 'Get Updates', href: '/contact' }] },
            { heading: 'Company', links: [{ label: 'Contact', href: '/contact' }, { label: 'Press', href: '/contact' }, { label: 'Partners', href: '/contact' }] },
          ].map((col) => (
            <div key={col.heading}>
              <h4 className="text-ivory/60 text-xs tracking-[0.2em] uppercase font-medium mb-5">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-ivory/35 text-sm hover:text-clay transition-colors font-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-ivory/8 gap-4">
          <p className="text-ivory/25 text-xs">© 2025 Collective Chattanooga. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-ivory/30 hover:text-clay transition-colors"><Globe size={15} /></a>
            <a href="#" className="text-ivory/30 hover:text-clay transition-colors"><Share2 size={15} /></a>
            <a href="#" className="text-ivory/30 hover:text-clay transition-colors"><Link2 size={15} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
