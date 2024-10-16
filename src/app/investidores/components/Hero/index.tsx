import LogoImage from '@/assets/investidores/apoiadores.png'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full bg-secondary px-1 md:px-20 py-16 flex flex-wrap justify-around gap-x-10 mb-16">
      <div className="flex flex-col justify-center items-center xl:flex-1">
        <Image src={LogoImage} alt="Logo Casa da Mãe" className="w-64" />
        <h1 className="text-center text-gray-500 text-4xl">Apoiadores</h1>
      </div>
    </div>
  )
}
