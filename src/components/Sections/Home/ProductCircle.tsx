import Image from 'next/image'
import ProductImage from '../../../../public/home-image.png'

export function ProductCircle() {
  return (
    <div className="rounded-full bg-loyal-500 2xl:relative 2xl:-bottom-[100px] 2xl:-right-[280px] 2xl:w-[900px] 2xl:h-[900px]">
      <Image
        src={ProductImage}
        alt="Imagem ilustrativa do nosso tênis"
        width={800}
        height={800}
        className="object-cover"
      />
    </div>
  )
}
