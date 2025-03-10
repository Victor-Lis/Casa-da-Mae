import LogoImage from '@/assets/casadamae/logo.png'

import Alimentos from '@/assets/casadamae/alimentos.png'
import Familia from '@/assets/casadamae/familia.png'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full bg-secondary px-1 md:px-20 py-16 flex flex-wrap justify-around gap-x-10">
      <div className="flex flex-col justify-center items-center xl:flex-1">
        <Image src={LogoImage} alt="Logo Casa da Mãe" className="w-52" />
        <h1 className="text-center text-gray-500 text-3xl">
          Casa da Mãe: <br />
          <strong className="text-[#FB5058]">Acolhendo</strong> e{' '}
          <strong className="text-[#FB5058]">Educando</strong>
        </h1>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center text-white gap-y-5 min-[700px]:pl-10 mt-5">
        <div className="flex justify-center items-center gap-x-4 bg-primary p-4 max-sm:p-1 rounded mr-auto">
          <Image
            src={Alimentos}
            alt="Alimentos"
            className="w-20 max-sm:min-w-12"
          />
          <h2 className="text-3xl max-sm:text-xl mt-1">
            Acolhimento
            <br />
            Alimentar
          </h2>
        </div>
        <div className="flex justify-center items-center gap-x-4 bg-primary p-4 max-sm:p-1 rounded ml-auto">
          <Image src={Familia} alt="Familia" className="w-20 max-sm:min-w-12" />
          <h2 className="text-3xl max-sm:text-xl mt-1">
            Acolhimento <br />
            Familiar
          </h2>
        </div>
      </div>
    </div>
  )
}
