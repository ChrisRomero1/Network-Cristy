import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import type { BusinessListing } from '@/types/directory'
import FeaturedBadge from './FeaturedBadge'

interface BusinessCardProps {
  listing: BusinessListing
  onClick?: (id: string) => void
  index?: number
}

const categoryGradients: Record<string, string> = {
  'Food & Dining': 'from-terracotta/20 to-clay/10',
  'Retail & Shopping': 'from-bronze/20 to-clay/10',
  'Health & Wellness': 'from-sage/25 to-olive/10',
  'Arts & Creative': 'from-clay/20 to-terracotta/10',
  'Professional Services': 'from-espresso/15 to-charcoal/10',
  'Tech & Innovation': 'from-charcoal/15 to-espresso/10',
  'Home & Living': 'from-bronze/15 to-sage/10',
  'Events & Entertainment': 'from-terracotta/15 to-bronze/10',
}

function CategoryInitial({ category, image }: { category: string; image?: string }) {
  if (image) {
    return (
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />
    )
  }

  const gradient = categoryGradients[category] ?? 'from-clay/15 to-bronze/10'
  const initial = category.charAt(0)

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <span className="font-display text-4xl text-espresso/20 select-none">{initial}</span>
    </div>
  )
}

export default function BusinessCard({ listing, onClick, index = 0 }: BusinessCardProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const isFeatured = listing.featured || listing.badge === 'Featured' || listing.badge === 'Premium'

  const handleClick = () => {
    if (onClick) onClick(listing.id)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: Math.min(index * 0.07, 0.35), ease: [0.25, 0.1, 0.25, 1] }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${listing.name} profile`}
      className={`
        group relative flex flex-col bg-ivory rounded-sm border cursor-pointer
        transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-clay/50
        ${isFeatured
          ? 'border-clay/20 hover:border-clay/40 hover:shadow-xl shadow-sm'
          : 'border-charcoal/5 hover:border-clay/25 hover:shadow-lg'
        }
      `}
    >
      {/* Featured accent line */}
      {isFeatured && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-clay/60 via-bronze/40 to-transparent rounded-t-sm" />
      )}

      {/* Image area */}
      <div className="relative h-44 overflow-hidden rounded-t-sm bg-cream">
        <CategoryInitial category={listing.category} image={listing.image} />

        {/* Badge overlay */}
        {listing.badge && (
          <div className="absolute top-3 right-3">
            <FeaturedBadge badge={listing.badge} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category label */}
        <span className="text-clay text-[10px] tracking-[0.2em] uppercase font-medium mb-2">
          {listing.category}
        </span>

        {/* Business name */}
        <h3 className="font-display text-xl text-espresso leading-snug mb-2 group-hover:text-clay transition-colors duration-200">
          {listing.name}
        </h3>

        {/* City */}
        <div className="flex items-center gap-1 text-charcoal/50 text-xs mb-3">
          <MapPin size={11} className="shrink-0" />
          <span>{listing.city}</span>
        </div>

        {/* Description */}
        <p className="text-charcoal/60 text-sm leading-relaxed font-light line-clamp-2 mb-4 flex-1">
          {listing.description}
        </p>

        {/* Tags */}
        {listing.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {listing.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-sm bg-cream text-charcoal/55 border border-charcoal/8 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-charcoal/6">
          <span className="text-xs text-charcoal/40 font-light">
            {listing.verified ? 'Verified listing' : 'Local business'}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-clay group-hover:gap-2 transition-all duration-200">
            View Profile
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </motion.article>
  )
}
