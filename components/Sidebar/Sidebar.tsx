'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  { path: '/', name: 'Home' },
  { path: '/problem-1', name: 'Problem 1' },
  { path: '/problem-2', name: 'Problem 2' },
  { path: '/problem-3', name: 'Problem 3' },
  { path: '/problem-4', name: 'Problem 4' }
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="w-1/3 max-w-sm p-8">
      <div className="mb-8">
        <picture>
          <source
            srcSet="/vestiairecollective_logo_dark.svg"
            media="(prefers-color-scheme: dark)"
          />
          <Image
            alt="logo"
            src="/vestiairecollective_logo_light.svg"
            width="295"
            height="26"
          />
        </picture>
      </div>
      <ul>
        {routes.map(({ name, path }) => (
          <li
            key={path}
            className={`p-2 text-center uppercase ${
              path === pathname ? 'text-2xl' : 'text-lg'
            }`}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
