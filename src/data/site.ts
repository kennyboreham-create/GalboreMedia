export interface Service {
  title: string
  description: string
  icon: string
}

export interface Project {
  title: string
  client: string
  category: string
  year: string
}

export interface Stat {
  value: string
  label: string
}

export const services: Service[] = [
  {
    title: 'Film & Motion',
    description:
      'Cinematic brand films, documentaries, and motion graphics shot and edited in-house.',
    icon: 'film',
  },
  {
    title: 'Brand & Identity',
    description:
      'Naming, visual systems, and guidelines that make a brand instantly recognizable.',
    icon: 'brand',
  },
  {
    title: 'Digital & Web',
    description:
      'Fast, accessible websites and campaigns engineered to convert and delight.',
    icon: 'web',
  },
  {
    title: 'Social & Content',
    description:
      'Always-on content programs that keep audiences engaged across every platform.',
    icon: 'social',
  },
]

export const projects: Project[] = [
  { title: 'Northwind Launch', client: 'Northwind', category: 'Film', year: '2026' },
  { title: 'Lumen Rebrand', client: 'Lumen Labs', category: 'Brand', year: '2025' },
  { title: 'Tidal Commerce', client: 'Tidal', category: 'Web', year: '2025' },
  { title: 'Ember Festival', client: 'Ember', category: 'Social', year: '2024' },
  { title: 'Atlas Docuseries', client: 'Atlas', category: 'Film', year: '2024' },
  { title: 'Kestrel Identity', client: 'Kestrel', category: 'Brand', year: '2023' },
]

export const stats: Stat[] = [
  { value: '12+', label: 'Years crafting stories' },
  { value: '240', label: 'Projects shipped' },
  { value: '38', label: 'Industry awards' },
  { value: '4.9', label: 'Average client rating' },
]
