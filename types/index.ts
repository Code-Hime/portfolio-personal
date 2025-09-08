// Global type definitions
export interface Project {
  name: string
  description: string
  imageUrl: string
  imageAltText: string
  roleText: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'tools'
}

export interface ContactInfo {
  email: string
  social: {
    github?: string
    linkedin?: string
    figma?: string
    twitter?: string
    discord?: string
    steam?: string
    spotify?: string
  }
}
