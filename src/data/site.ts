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
    title: 'SEO',
    description:
      'Search engine optimization that gets you found by the people already looking for you.',
    icon: 'search',
  },
  {
    title: 'Social Media',
    description:
      'Scroll-stopping content and day-to-day management that grow your community and reach.',
    icon: 'social',
  },
  {
    title: 'Websites & Apps',
    description:
      'Fast, beautiful websites and apps engineered to convert, delight, and scale.',
    icon: 'code',
  },
]

export const projects: Project[] = [
  { title: 'Sporff', client: 'Sports For Fitness Youth Club', category: 'Web', year: '2024' },
  { title: 'Learning With Lukey Buke', client: 'LWLB', category: 'Brand', year: '2025' },
  { title: 'Coaching Hockey', client: 'Coaching Hockey', category: 'Web', year: '2026' },
  { title: 'TypoLearney', client: 'TypoLearney', category: 'Marketing', year: '2026' },
  { title: 'Tryout Aid', client: 'TA', category: 'Web', year: '2025' },
  { title: 'AOLB', client: 'AOLB', category: 'Marketing', year: '2024' },
]

export const stats: Stat[] = [
  { value: '12+', label: 'Years crafting brands' },
  { value: '240', label: 'Projects shipped' },
  { value: '100%', label: 'Small biz & nonprofit focused' },
  { value: '4.9', label: 'Average client rating' },
]
