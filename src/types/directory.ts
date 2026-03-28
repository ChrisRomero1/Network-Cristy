export type BusinessBadge = 'Featured' | 'Verified' | 'Sponsored' | 'Premium'

export type BusinessCategory =
  | 'Food & Dining'
  | 'Retail & Shopping'
  | 'Health & Wellness'
  | 'Arts & Creative'
  | 'Professional Services'
  | 'Tech & Innovation'
  | 'Home & Living'
  | 'Events & Entertainment'

export interface BusinessListing {
  id: string
  name: string
  category: BusinessCategory
  city: string
  description: string
  tags: string[]
  badge?: BusinessBadge
  featured?: boolean
  verified?: boolean
  sponsored?: boolean
  image?: string
  website?: string
  phone?: string
  services?: string[]
}
