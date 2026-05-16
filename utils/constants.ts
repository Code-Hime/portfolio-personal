// Application constants
export const APP_CONFIG = {
  name: 'Lauren Doss',
  title: 'Portfolio',
  description: 'Full Stack Developer & Designer',
  email: 'lauren@doss.codes',
  location: 'Dallas, TX',
  pronouns: 'She/Her',
  pet: 'Mako'
} as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/Code-Hime',
  linkedin: 'https://www.linkedin.com/in/lauren-grills-76484893/',
  figma: 'https://www.figma.com/@himecchi',
  twitter: 'https://twitter.com/code_hime',
  discord: 'https://discordapp.com/users/himecchi',
  steam: 'https://steamcommunity.com/id/pinkrangerhime/',
  spotify: 'https://open.spotify.com/user/ieatbrainz?si=af0b87f0700849e9'
} as const

export const SKILLS = [
  { name: 'Vue', level: 90, category: 'frontend' as const },
  { name: 'HTML + CSS', level: 80, category: 'frontend' as const },
  { name: 'TypeScript', level: 90, category: 'frontend' as const },
  { name: 'JavaScript', level: 90, category: 'frontend' as const },
  { name: 'C#', level: 90, category: 'backend' as const },
  { name: 'Figma', level: 50, category: 'design' as const }
] as const
