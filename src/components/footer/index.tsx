import Email from '@/assets/email.png'
import Mapa from '@/assets/mapa.png'
import Telefone from '@/assets/telefone.png'
import WhatsApp from '@/assets/whatsapp2.png'
import Pix from '@/assets/pix.png'

import Divisoria from '@/assets/divisoria.png'

import Image from 'next/image'

import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
})

export default function Footer() {
  return (
    <footer className="flex justify-around items-center bg-primary py-3 max-sm:flex-wrap max-sm:flex-col">
      <main className="flex-1 flex flex-wrap justify-between max-sm:px-2 px-10 gap-x-10 gap-y-5 text-white">
        <a
          className="flex justify-center items-center flex-2"
          href="mailto:casadamae.projeto@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Email} alt="Email" className="max-sm:w-6 w-10" />
          <h1 className="max-sm:text-base text-2xl ml-2">
            casadamae.projeto@gmail.com
          </h1>
        </a>
        {/* <div className="flex justify-center items-center">
          <Image src={Mapa} alt="Mapa" className="w-10" />
          <h1 className="text-2xl ml-2">
            Av. Pref. Antônio Júlio Toledo Garcia Lopes, 200
          </h1>
        </div> */}
        <a
          href="https://api.whatsapp.com/send?phone=5511996143450"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center"
        >
          <Image src={WhatsApp} alt="WhatsApp" className="max-sm:w-6 w-10" />
          <h1 className="max-sm:text-base text-2xl ml-2">11 99614-3450</h1>
        </a>
        <div className="flex justify-center items-center">
          <Image
            src={Pix}
            alt="Pix"
            className="max-sm:w-6 w-10 p-[2px] bg-gray-100/90 rounded-full"
          />
          <h1 className="max-sm:text-base text-2xl ml-2">
            PIX: 519.907.768-68
          </h1>
        </div>
      </main>
      <Image src={Divisoria} alt="Divisoria" className="h-full max-sm:hidden" />
      <h1
        className={`${pacifico.className} text-white mt-10 sm:my-auto text-4xl mx-10`}
      >
        Casa da Mãe
      </h1>
    </footer>
  )
}
