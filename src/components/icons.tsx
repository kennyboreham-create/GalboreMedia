import { type ReactElement } from 'react'

interface IconProps {
  name: string
}

const paths: Record<string, ReactElement> = {
  megaphone: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z" />
      <path d="M10 6l8-3v18l-8-3" />
      <path d="M18 8a4 4 0 0 1 0 8" />
    </>
  ),
  target: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-6" />
      <path d="M19 8h1V7" />
    </>
  ),
  code: (
    <>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M2 8h20M8 12l-2 2 2 2M16 12l2 2-2 2M13 11l-2 6" />
    </>
  ),
}

export function Icon({ name }: IconProps) {
  return (
    <svg
      className="service__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.megaphone}
    </svg>
  )
}
