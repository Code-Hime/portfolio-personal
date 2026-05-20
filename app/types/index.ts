// Global type definitions

export interface Project {
  projectName: string
  descText: string
  imageUrl: string
  imageAltText: string
  roleText: string
}

export interface Interest {
  prependIcon: string
  label: string
  appendIcon?: string
}

export interface NavLink {
  to: string
  label: string
}

export type StickerShape = 'heart' | 'star' | 'burst' | 'hexagon' | 'squircle' | 'circle'

export interface Skill {
  name: string
  icon: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'tools'
}

export interface Profile {
  name: string
  title: string
  description: string
  email: string
  location: string
  pronouns: string
  pet: string
}
