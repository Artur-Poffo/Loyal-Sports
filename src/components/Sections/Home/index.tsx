import { DefaultButton } from '../../DefaultButton'
import { ProductCircle } from './ProductCircle'

export function HomeSection() {
  return (
    <section id="home">
      <div className="min-h-screen pt-32 2xl:pt-10 flex flex-col 2xl:flex-row items-center justify-center gap-8 overflow-hidden">
        <div className="text-center 2xl:text-left max-w-2xl flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl font-serif">
            Redescubra o conforto ao caminhar sem perder o estilo
          </h1>
          <p className="mb-1 text-loyal-200 2xl:max-w-lg">
            Nem sempre precisamos abrir mão do conforto, abrace nossa iniciativa
            e adquira seu mais novo tênis
          </p>
          <DefaultButton text="Ver Produtos" to="/#product" />
        </div>

        <ProductCircle />
      </div>
    </section>
  )
}
