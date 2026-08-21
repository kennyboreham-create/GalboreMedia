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
    title: 'Brand Awareness',
    description:
      'Bold identities and campaigns that make people stop, look, and remember your name.',
    icon: 'megaphone',
  },
  {
    title: 'Marketing',
    description:
      'Data-driven marketing that turns attention into customers and predictable growth.',
    icon: 'target',
  },
  {
    title: 'Websites & Apps',
    description:
      'Fast, beautiful websites and apps engineered to convert, delight, and scale.',
    icon: 'code',
  },
]

export const projects: Project[] = [
  { title: 'Northwind Launch', client: 'Northwind', category: 'Brand', year: '2026' },
  { title: 'Lumen Growth Engine', client: 'Lumen Labs', category: 'Marketing', year: '2025' },
  { title: 'Tidal Commerce App', client: 'Tidal', category: 'Web', year: '2025' },
  { title: 'Ember Rebrand', client: 'Ember', category: 'Brand', year: '2024' },
  { title: 'Atlas Ad Campaign', client: 'Atlas', category: 'Marketing', year: '2024' },
  { title: 'Kestrel Portal', client: 'Kestrel', category: 'Web', year: '2023' },
]

export const stats: Stat[] = [
  { value: '12+', label: 'Years crafting brands' },
  { value: '240', label: 'Projects shipped' },
  { value: '3.5x', label: 'Avg. growth for clients' },
  { value: '4.9', label: 'Average client rating' },
]
