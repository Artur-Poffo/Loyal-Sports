import Image from 'next/image'
import ProductImage from '../../../../public/home-image.png'
import { ProductCard } from './ProductCard'

export function ProductSection() {
  return (
    <section id="product">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly">
        <Image
          src={ProductImage}
          alt="Imagem ilustrativa do nosso tênis"
          width={600}
          height={600}
          className="object-cover md:w-[600px] md:h-[600px] p-0 m-0"
        />

        <ProductCard
          name="Tênis Comfort"
          resume="O tênis mais conhecido da empresa: clássico, confortável e acessível"
          longDescription="O Tênis Comfort é o modelo mais famoso da nossa empresa. Ele combina
          conforto, estilo e versatilidade em um só produto. O Tênis Comfort tem
          um solado macio e antiderrapante, um cabedal respirável e flexível, e
          um design que se adapta a qualquer look. Você pode usar para ir ao
          trabalho, à academia, ao shopping ou ao parque. Ele é o seu
          companheiro ideal para o dia a dia."
          buttonContent="Entre em contato"
          buttonLink="https://www.instagram.com/loyalesporte/"
        />
      </div>
    </section>
  )
}
