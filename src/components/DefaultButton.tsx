import { AnchorHTMLAttributes } from 'react'

interface DefaultButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
  to?: string
}

export function DefaultButton({ text, to, ...rest }: DefaultButtonProps) {
  return (
    <a href={to} {...rest}>
      <button className="py-2 px-6 bg-loyal-500 text-loyal-100 font-bold border border-loyal-500 rounded-sm hover:bg-transparent hover:text-loyal-500 transition-all">
        {text}
      </button>
    </a>
  )
}
