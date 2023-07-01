import Image from 'next/image'
import ProductImage from '../../../public/home-image.png'
import { DefaultButton } from '../DefaultButton'

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
          <DefaultButton text="Ver Produtos" to="/#products" />
        </div>

        <div className="rounded-full bg-loyal-500 2xl:relative 2xl:-bottom-[100px] 2xl:-right-[280px] 2xl:w-[900px] 2xl:h-[900px]">
          <Image
            src={ProductImage}
            alt="Imagem ilustrativa do nosso tênis"
            width={800}
            height={800}
            className=""
          />
        </div>
      </div>
    </section>
  )
}
