import LoveImage from '@/assets/projeto/amor.png'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full bg-secondary px-1 md:px-20 py-16 flex flex-wrap justify-around gap-x-10">
      <div className="flex flex-col justify-center items-center xl:flex-1">
        <Image src={LoveImage} alt="Amor - Casa da Mãe" className="w-52" />
        <h1 className="text-center text-gray-500 text-3xl uppercase">
          Nosso projeto
        </h1>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center text-white gap-y-5 min-[700px]:pl-10 mt-5">
        <h2 className="gap-x-4 bg-primary p-4 max-sm:p-1 rounded mr-auto text-3xl max-sm:text-xl mt-1">
          Abraço Amoroso:
        </h2>
        <h2 className="gap-x-4 bg-primary p-4 max-sm:p-1 rounded ml-auto text-3xl max-sm:text-xl mt-1">
          Alimentação no Lar
        </h2>
        <h2 className="gap-x-4 bg-primary p-4 max-sm:p-1 rounded mr-auto text-3xl max-sm:text-xl mt-1">
          Educação no Lar
        </h2>
      </div>
    </div>
  )
}
