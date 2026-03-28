import type { BusinessBadge } from '@/types/directory'

interface FeaturedBadgeProps {
  badge: BusinessBadge | undefined
  className?: string
}

const badgeConfig: Record<BusinessBadge, { bg: string; text: string; label: string }> = {
  Featured: {
    bg: 'bg-clay',
    text: 'text-ivory',
    label: 'Featured',
  },
  Verified: {
    bg: 'bg-sage',
    text: 'text-ivory',
    label: 'Verified',
  },
  Sponsored: {
    bg: 'bg-bronze',
    text: 'text-ivory',
    label: 'Sponsored',
  },
  Premium: {
    bg: 'bg-espresso',
    text: 'text-clay',
    label: 'Premium',
  },
}

export default function FeaturedBadge({ badge, className = '' }: FeaturedBadgeProps) {
  if (!badge) return null

  const config = badgeConfig[badge]

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-medium tracking-[0.12em] uppercase ${config.bg} ${config.text} ${className}`}
    >
      {config.label}
    </span>
  )
}
