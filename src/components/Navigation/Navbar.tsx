import { LogoTitle } from './LogoTitle'
import { NavLink } from './NavLink'

interface NavbarProps {
  links: { name: string; to: string }[]
}

export function Navbar({ links }: NavbarProps) {
  return (
    <header className="z-50 opacity-90 fixed top-5 left-5 right-5 py-5 px-8 rounded-lg flex items-center justify-center sm:justify-between bg-loyal-900">
      <LogoTitle />

      <nav className="flex items-center gap-4">
        <ul className="flex items-center gap-2">
          {links.map(({ name, to }, index) => {
            return (
              <li key={index}>
                <NavLink name={name} to={to} />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
