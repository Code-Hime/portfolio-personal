import type { Interest, NavLink, Profile, Project, Skill } from '~/types'

export const PROFILE: Profile = {
  name: 'Lauren Doss',
  title: 'Portfolio',
  description: 'Senior Full Stack Developer',
  email: 'lauren@doss.codes',
  location: 'Dallas, TX',
  pronouns: 'She/Her',
  pet: 'Mako',
}

export const SOCIAL_LINKS = {
  github: 'https://github.com/Code-Hime',
  linkedin: 'https://www.linkedin.com/in/lauren-grills-76484893/',
  figma: 'https://www.figma.com/@himecchi',
  twitter: 'https://twitter.com/code_hime',
  discord: 'https://discordapp.com/users/himecchi',
  steam: 'https://steamcommunity.com/id/pinkrangerhime/',
  spotify: 'https://open.spotify.com/user/ieatbrainz?si=af0b87f0700849e9',
} as const

export const SKILLS: readonly Skill[] = [
  { name: 'Vue', icon: 'fa-brands fa-vuejs', level: 90, category: 'frontend' },
  { name: 'TS', icon: 'ts-mark', level: 90, category: 'frontend' },
  { name: 'HTML+CSS', icon: 'fa-brands fa-html5', level: 80, category: 'frontend' },
  { name: 'C#', icon: 'fa-solid fa-code', level: 90, category: 'backend' },
  { name: 'Figma', icon: 'fa-brands fa-figma', level: 50, category: 'design' },
]

export const NAV_LINKS: readonly NavLink[] = [
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Say Hello' },
]

export const INTERESTS: readonly Interest[] = [
  { prependIcon: 'fa-solid fa-cookie-bite', label: 'Cooking & Baking', appendIcon: 'fa-solid fa-bread-slice' },
  { prependIcon: 'fa-solid fa-gamepad', label: 'Virtual & Tabletop Games', appendIcon: 'fa-brands fa-d-and-d' },
  { prependIcon: 'fa-solid fa-book', label: 'Sci-Fi & Fantasy', appendIcon: 'fa-solid fa-hat-wizard' },
  { prependIcon: 'fa-solid fa-pen-ruler', label: 'Drawing & Crafting', appendIcon: 'fa-solid fa-hammer' },
]

export const ABOUT_DESCRIPTORS = ['a Creative', 'a Thoughtful', 'an Adaptable', 'a Passionate'] as const
export const ABOUT_ROLES = ['Developer', 'Designer', 'Problem Solver', 'Puzzle Master', 'Lvl 100 Mob Boss'] as const

export const DESIGN_EMBEDS: readonly string[] = [
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1PKTNtvVZ7BgIBSSqB74II%2FOverlayPrototyping%3Ftype%3Ddesign%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A32%26node-id%3D2-32%26mode%3Ddesign',
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fvg9C4VDXa1wcaV7cxWeAM8%2FAtoZGeriCare%3Fnode-id%3D1-2%26starting-point-node-id%3D1%253A2%26mode%3Ddesign',
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2LJ08mcJOdrUsmxx0t7LE9%2FThemeSwitching%3Ftype%3Ddesign%26node-id%3D2-25%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A25%26mode%3Ddesign',
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQVyY2eTlVpQKcG5GYgw4RN%2FProgressive-Design%3Ftype%3Ddesign%26node-id%3D5-2177%26scaling%3Dmin-zoom%26page-id%3D3%253A364%26starting-point-node-id%3D5%253A2177%26mode%3Ddesign',
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJ3wSo6cWxY7odwkjQMb7hY%2FDesign-System%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DAvyM7HDKXiPNqHaV-1',
]

export const PROJECTS: readonly Project[] = [
  {
    projectName: 'Quick Neon Signs',
    imageUrl: '/quickneondesigner.png',
    imageAltText: "Screenshot of the custom neon sign designer from QuickNeonSigns.com. Left screen shows preview for neon sign selections with glowing pink sci-fi font that says 'HIRE ME!'",
    descText: 'Web page built with HTML, CSS, and JavaScript that allows customers of a neon sign shop design their own custom signs with ability to preview the text, font, color, and size live.',
    roleText: 'Designer & Developer',
  },
  {
    projectName: 'Bardic Works App',
    imageUrl: '/bard-old-inspire.png',
    imageAltText: "Screenshot of a web app with purple background and yellow letters 'Bardic Works'. There is a container in the center of the page that has two tabs, 'Inspire' and 'Insult'. The 'Inspire' tab is active and displays text saying 'Inspire your comrades or yourself with Bardic Inspiration!'. Beneath the text there are two buttons stacked - a secondary 'Options' button and a primary 'Inspire Me!' button.",
    descText: 'Personal tool app created using Vue, TypeScript, and SCSS to provide everything a successful Bard would need during their adventures in Dungeons and Dragons. I originally built this tool during the pandemic in Vue 2, the new (Vue 3) version of this app with extended features is currently in the design iteration phase, so check back later!',
    roleText: 'Designer & Developer',
  },
]
