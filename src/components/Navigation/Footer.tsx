import { NavLink } from './NavLink';

interface FooterProps {
  NavLinks: { name: string; to: string }[]
  UtilLinks: { name: string; to: string }[]
}

export function Footer({ NavLinks, UtilLinks }: FooterProps) {
  return (
    <footer className="relative bottom-0 left-0 w-full p-12 bg-loyal-900 flex justify-around gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-serif font-bold">Links úteis</h2>
        <ul className="flex flex-col gap-1">
          {UtilLinks.map(({ name, to }, index) => {
            return (
              <li key={index}>
                <NavLink target="_blank" name={name} to={to} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-serif font-bold">Navegação</h2>
        <ul className="flex flex-col gap-1">
          {NavLinks.map(({ name, to }, index) => {
            return (
              <li key={index}>
                <NavLink name={name} to={to} />
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
