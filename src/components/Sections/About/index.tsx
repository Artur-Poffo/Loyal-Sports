'use client'

import { motion } from 'framer-motion'
import { Logo } from './Logo'

export function AboutSection() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-4 pt-12"
      >
        <Logo />
        <p className="max-w-xl text-center">
          A empresa de sapatos Loyal nasceu da paixão por calçados confortáveis
          e estilosos. Sabemos que os pés são a base do nosso corpo e merecem o
          melhor cuidado possível. Por isso, desenvolvemos produtos de alta
          qualidade, com design moderno e materiais sustentáveis. Queremos que
          você pise com conforto sem perder o estilo, seja qual for a ocasião.
          Conheça nossa coleção e se apaixone pelos nossos sapatos!
        </p>
      </motion.div>
    </section>
  )
}
