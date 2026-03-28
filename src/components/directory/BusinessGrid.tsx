import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2 } from 'lucide-react'
import type { BusinessListing } from '@/types/directory'
import BusinessCard from './BusinessCard'

interface BusinessGridProps {
  listings: BusinessListing[]
  onSelectListing: (id: string) => void
}

function SponsoredSlot({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col items-center justify-center rounded-sm border border-dashed p-8 text-center"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-card-alt)' }}
    >
      <div
        className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] tracking-[0.18em] uppercase font-medium mb-4"
        style={{
          backgroundColor: 'rgba(176,125,78,0.12)',
          color: '#B07D4E',
          border: '1px solid rgba(176,125,78,0.2)',
        }}
      >
        Sponsored Placement
      </div>
      <p className="text-sm font-light mb-2" style={{ color: 'var(--color-text-muted)' }}>
        Premium visibility for your business
      </p>
      <p className="text-xs mb-5" style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}>
        Slot #{index + 1} · Seen by Chattanooga's creative community
      </p>
      <a
        href="mailto:hello@collectivechattanooga.com?subject=Sponsored Placement Inquiry"
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs font-medium transition-colors"
        style={{
          backgroundColor: 'rgba(176,125,78,0.1)',
          color: '#B07D4E',
          border: '1px solid rgba(176,125,78,0.25)',
        }}
      >
        Inquire About This Spot
      </a>
    </motion.div>
  )
}

function EmptyState({ hasFilters }: { hasFilters: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="col-span-full flex flex-col items-center justify-center py-28 text-center"
    >
      <div
        className="inline-flex p-5 rounded-full mb-6"
        style={{ backgroundColor: 'var(--color-card-alt)' }}
      >
        <Building2 size={28} style={{ color: 'var(--color-text-muted)', opacity: 0.4 }} />
      </div>
      <h3 className="font-display text-2xl text-espresso mb-3">
        {hasFilters ? 'No results found' : 'No businesses yet'}
      </h3>
      <p className="text-sm font-light max-w-sm" style={{ color: 'var(--color-text-muted)' }}>
        {hasFilters
          ? 'Try adjusting your search or selecting a different category.'
          : 'The directory is growing. Check back soon for new listings.'}
      </p>
    </motion.div>
  )
}

function FeaturedRow({
  listings,
  onSelectListing,
}: {
  listings: BusinessListing[]
  onSelectListing: (id: string) => void
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (listings.length === 0) return null

  return (
    <div className="mb-12">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="h-px flex-1 max-w-[2rem]" style={{ backgroundColor: '#C4845A', opacity: 0.5 }} />
        <span className="text-clay text-xs tracking-[0.22em] uppercase font-medium">
          Featured Businesses
        </span>
        <span className="h-px flex-1" style={{ backgroundColor: 'var(--color-border)' }} />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {listings.map((listing, i) => (
          <BusinessCard
            key={listing.id}
            listing={listing}
            onClick={onSelectListing}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

export default function BusinessGrid({ listings, onSelectListing }: BusinessGridProps) {
  const featuredListings = listings.filter((l) => l.featured || l.badge === 'Premium')
  const regularListings = listings.filter((l) => !l.featured && l.badge !== 'Premium')

  const hasFilters = listings.length < 22 // rough check — real check passed from parent context
  const hasAny = listings.length > 0

  // Build the regular grid with sponsored slot injections every 6 cards
  const gridItems: Array<{ type: 'card'; listing: BusinessListing; cardIndex: number } | { type: 'sponsored'; slotIndex: number }> = []
  let sponsoredCount = 0

  regularListings.forEach((listing, i) => {
    // Inject sponsored slot before every 6th card (positions 5, 11, 17...)
    if (i > 0 && i % 6 === 0) {
      gridItems.push({ type: 'sponsored', slotIndex: sponsoredCount++ })
    }
    gridItems.push({ type: 'card', listing, cardIndex: i })
  })

  return (
    <div>
      {hasAny ? (
        <>
          {/* Featured row — only shown when there are featured listings in the current filter */}
          {featuredListings.length > 0 && (
            <FeaturedRow listings={featuredListings} onSelectListing={onSelectListing} />
          )}

          {/* Regular grid */}
          {regularListings.length > 0 && (
            <>
              {featuredListings.length > 0 && (
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px flex-1" style={{ backgroundColor: 'var(--color-border)' }} />
                  <span className="text-xs tracking-[0.18em] uppercase font-medium" style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}>
                    All Listings
                  </span>
                  <span className="h-px flex-1" style={{ backgroundColor: 'var(--color-border)' }} />
                </div>
              )}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {gridItems.map((item) =>
                  item.type === 'card' ? (
                    <BusinessCard
                      key={item.listing.id}
                      listing={item.listing}
                      onClick={onSelectListing}
                      index={item.cardIndex}
                    />
                  ) : (
                    <SponsoredSlot key={`sponsored-${item.slotIndex}`} index={item.slotIndex} />
                  )
                )}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="grid">
          <EmptyState hasFilters={hasFilters} />
        </div>
      )}
    </div>
  )
}
