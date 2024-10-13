import Email from '@/assets/email.png'
import Mapa from '@/assets/mapa.png'
import Telefone from '@/assets/telefone.png'
import WhatsApp from '@/assets/whatsapp2.png'

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
      <main className="flex-1 flex flex-wrap justify-between px-10 gap-x-10 gap-y-5 text-white">
        <a
          className="flex justify-center items-center"
          href="mailto:rubenstmachado1943@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Email} alt="Email" className="w-10" />
          <h1 className="text-2xl ml-2">rubenstmachado1943@gmail.com</h1>
        </a>
        <div className="flex justify-center items-center">
          <Image src={Mapa} alt="Mapa" className="w-10" />
          <h1 className="text-2xl ml-2">
            Av. Pref. Antônio Júlio Toledo Garcia Lopes, 200
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Telefone} alt="Telefone" className="w-12" />
          <h1 className="text-2xl ml-2">99999-9999</h1>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5511996143450"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center"
        >
          <Image src={WhatsApp} alt="WhatsApp" className="w-10" />
          <h1 className="text-2xl ml-2">11 99614-3450</h1>
        </a>
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
