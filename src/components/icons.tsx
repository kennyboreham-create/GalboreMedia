import { type ReactElement } from 'react'

interface IconProps {
  name: string
}

const paths: Record<string, ReactElement> = {
  film: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
    </>
  ),
  brand: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18M8 8l8 8M16 8l-8 8" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8M12 18v3" />
    </>
  ),
  social: (
    <>
      <circle cx="7" cy="12" r="3" />
      <circle cx="17" cy="6" r="3" />
      <circle cx="17" cy="18" r="3" />
      <path d="M9.5 10.5l5-3M9.5 13.5l5 3" />
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
      {paths[name] ?? paths.brand}
    </svg>
  )
}
