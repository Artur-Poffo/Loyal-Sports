'use client'

import { DefaultButton } from '@/components/DefaultButton'
import { motion } from 'framer-motion'

interface ProductCardProps {
  name: string
  resume: string
  longDescription: string
  buttonContent: string
  buttonLink?: string
}

export function ProductCard({
  buttonContent,
  longDescription,
  name,
  resume,
  buttonLink,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-loyal-900 p-6 rounded-xl max-w-xl flex flex-col gap-2"
    >
      <header>
        <h2 className="text-3xl text-loyal-500 font-serif font-bold">{name}</h2>
        <span className="text-sm font-bold">{resume}</span>
      </header>
      <main>
        <p>{longDescription}</p>
      </main>
      <footer className="flex items-center justify-center gap-1">
        <DefaultButton
          className="w-full mt-2"
          target="_blank"
          text={buttonContent}
          to={buttonLink}
        />
      </footer>
    </motion.div>
  )
}
