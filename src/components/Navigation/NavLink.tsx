import { AnchorHTMLAttributes } from 'react'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string
  to: string
}

export function NavLink({ name, to, ...rest }: NavLinkProps) {
  return (
    <a
      {...rest}
      href={to}
      className="text-loyal-100 opacity-70 hover:opacity-100 transition-opacity"
    >
      {name}
    </a>
  )
}
