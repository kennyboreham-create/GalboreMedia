export interface Service {
  title: string
  description: string
  icon: string
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

export const stats: Stat[] = [
  { value: '100%', label: 'Small biz & nonprofit focused' },
]
