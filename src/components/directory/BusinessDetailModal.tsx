import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Globe, Phone, ArrowRight } from 'lucide-react'
import type { BusinessListing } from '@/types/directory'
import FeaturedBadge from './FeaturedBadge'

interface BusinessDetailModalProps {
  listing: BusinessListing | null
  onClose: () => void
}

const categoryGradients: Record<string, string> = {
  'Food & Dining': 'from-terracotta/30 to-clay/15',
  'Retail & Shopping': 'from-bronze/30 to-clay/15',
  'Health & Wellness': 'from-sage/35 to-olive/15',
  'Arts & Creative': 'from-clay/30 to-terracotta/15',
  'Professional Services': 'from-espresso/20 to-charcoal/15',
  'Tech & Innovation': 'from-charcoal/20 to-espresso/15',
  'Home & Living': 'from-bronze/25 to-sage/15',
  'Events & Entertainment': 'from-terracotta/20 to-bronze/15',
}

export default function BusinessDetailModal({ listing, onClose }: BusinessDetailModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (listing) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [listing])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const isPremium = listing?.badge === 'Premium'
  const gradient = listing ? (categoryGradients[listing.category] ?? 'from-clay/20 to-bronze/10') : ''

  return (
    <AnimatePresence>
      {listing && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-espresso/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={listing.name}
            className="fixed z-50 inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center md:p-6 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full md:max-w-2xl md:mx-auto max-h-[92dvh] md:max-h-[88vh] flex flex-col rounded-t-xl md:rounded-sm overflow-hidden"
              style={{ backgroundColor: 'var(--color-bg)', boxShadow: '0 32px 80px rgba(26,20,16,0.28)' }}
            >
              {/* Header image / gradient */}
              <div className={`relative h-52 md:h-60 bg-gradient-to-br ${gradient} shrink-0`}>
                {listing.image && (
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-espresso/50 text-ivory hover:bg-espresso/80 transition-colors backdrop-blur-sm"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                {/* Sponsored label */}
                {listing.sponsored && (
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-[0.18em] uppercase font-medium text-ivory/70 bg-espresso/40 backdrop-blur-sm px-2 py-1 rounded-sm">
                      Sponsored
                    </span>
                  </div>
                )}

                {/* Name + category anchored to bottom of header */}
                <div className="absolute bottom-5 left-6 right-14">
                  {listing.badge && (
                    <div className="mb-2">
                      <FeaturedBadge badge={listing.badge} />
                    </div>
                  )}
                  <h2
                    className={`font-display leading-tight text-ivory ${
                      isPremium ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
                    }`}
                  >
                    {listing.name}
                  </h2>
                </div>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 md:p-8">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                    <span className="text-clay text-xs tracking-[0.2em] uppercase font-medium">
                      {listing.category}
                    </span>
                    <div className="flex items-center gap-1 text-charcoal/50 text-xs">
                      <MapPin size={11} />
                      <span>{listing.city}</span>
                    </div>
                  </div>

                  {/* About */}
                  <div className="mb-6">
                    <h3 className="font-display text-lg text-espresso mb-3">About</h3>
                    <p className="text-charcoal/65 leading-relaxed font-light text-sm">
                      {listing.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {listing.tags.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {listing.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-sm border text-charcoal/55 tracking-wide"
                            style={{ backgroundColor: 'var(--color-card-alt)', borderColor: 'var(--color-border)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Services */}
                  {listing.services && listing.services.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-display text-lg text-espresso mb-3">Services</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {listing.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-center gap-2 text-sm text-charcoal/65 font-light"
                          >
                            <span className="w-1 h-1 rounded-full bg-clay/60 shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Premium upsell strip */}
                  {isPremium && (
                    <div className="mb-6 p-4 rounded-sm border border-clay/20 bg-gradient-to-r from-clay/5 to-bronze/5">
                      <p className="text-xs text-clay/80 font-medium tracking-wide uppercase mb-1">
                        Premium Member
                      </p>
                      <p className="text-sm text-charcoal/55 font-light">
                        This business has been elevated as a Premium partner of the Collective Chattanooga network.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer CTAs */}
              <div
                className="shrink-0 p-6 pt-4 border-t flex flex-col sm:flex-row gap-3"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}
              >
                {listing.website && (
                  <a
                    href={listing.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-espresso text-ivory text-sm font-medium rounded-sm hover:bg-charcoal transition-colors"
                  >
                    <Globe size={14} />
                    Visit Website
                    <ArrowRight size={13} />
                  </a>
                )}
                {listing.phone && (
                  <a
                    href={`tel:${listing.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-sm border transition-colors hover:border-clay/40 hover:text-clay"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                      backgroundColor: 'var(--color-card-alt)',
                    }}
                  >
                    <Phone size={14} />
                    {listing.phone}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
