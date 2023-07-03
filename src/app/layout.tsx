import { Footer } from '@/components/Navigation/Footer'
import { Navbar } from '@/components/Navigation/Navbar'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Loyal Esportes | Pise com conforto sem perder o estilo',
  description:
    'Nossos tênis são projetados para o maior conforto possível porém sem que você perca o estilo',
}

const NavLinks = [
  { name: 'Home', to: '/#home' },
  { name: 'Sobre', to: '/#about' },
  { name: 'Produto', to: '/#product' },
  { name: 'Contato', to: 'https://www.instagram.com/loyalesporte/' },
]

const UtilLinks = [
  { name: 'Instagram', to: 'https://www.instagram.com/loyalesporte/' },
  {
    name: 'Código no GitHub',
    to: 'https://github.com/Artur-Poffo/Loyal-Sports',
  },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className="bg-loyal-800 text-loyal-100 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-loyal-900">
        <Navbar links={NavLinks} />
        <main className="min-h-screen pb-10 px-5 2xl:px-0">{children}</main>
        <Footer NavLinks={NavLinks} UtilLinks={UtilLinks} />
      </body>
    </html>
  )
}
