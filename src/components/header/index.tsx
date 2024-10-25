'use client'
import Image from 'next/image'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import Instagram from '@/assets/instagram.png'
import WhatsApp from '@/assets/whatsapp.png'

import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
})

import { Ubuntu } from 'next/font/google'
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function Header() {
  const pathName = usePathname()

  function isHome() {
    return pathName === '/'
  }

  function isLikeRoute(path: string) {
    return pathName.includes(path)
  }

  return (
    <header
      className={`w-full bg-primary flex flex-col px-3 shadow-lg z-10 ${pacifico.className}`}
    >
      <main className="w-full max-sm:h-24 sm:h-16 px-2 flex justify-around items-center">
        <h1 className="text-secondary text-2xl flex-1">
          Bem vindo a Casa da Mãe!
        </h1>
        <div className="flex flex-1 justify-end gap-4 flex-wrap">
          {/* <a
            href="https://instagram.com"
            className="flex justify-center items-center"
          >
            <Image src={Instagram} alt="Instagram logo" className="w-8" />
            <h2 className="text-white">Instagram</h2>
          </a> */}
          <a
            href="https://api.whatsapp.com/send?phone=5511996143450"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center"
          >
            <Image src={WhatsApp} alt="WhatsApp logo" className="w-7" />
            <h2 className="text-white">WhatsApp</h2>
          </a>
        </div>
      </main>
      <nav
        className={`w-full bg-primary flex flex-wrap justify-between items-center px-6 min-h-12 sticky top-0 z-10 ${ubuntu.className} gap-x-32`}
      >
        <Link
          href={'/'}
          className={`text-lg text-white my-2 ${isHome() ? 'font-bold underline' : ''}`}
        >
          Home
        </Link>
        <Link
          href={'/casadamae'}
          className={`text-lg text-white my-2 ${isLikeRoute('/casadamae') ? 'font-bold underline' : ''}`}
        >
          Casa da Mãe
        </Link>
        <Link
          href={'/projeto'}
          className={`text-lg text-white my-2 ${isLikeRoute('/projeto') ? 'font-bold underline' : ''}`}
        >
          Projeto
        </Link>
        <Link
          href={'/cursos'}
          className={`text-lg text-white my-2 ${isLikeRoute('/cursos') ? 'font-bold underline' : ''}`}
        >
          Cursos
        </Link>
        <Link
          href={'/investidores'}
          className={`text-lg text-white my-2 ${isLikeRoute('/investidores') ? 'font-bold underline' : ''}`}
        >
          Investidores
        </Link>
        <Link
          href={'/imagens'}
          className={`text-lg text-white my-2 ${isLikeRoute('/imagens') ? 'font-bold underline' : ''}`}
        >
          Fotos/Vídeos
        </Link>
        <Link
          href={'/arearestrita'}
          className={`text-lg text-white my-2 ${isLikeRoute('/arearestrita') ? 'font-bold underline' : ''}`}
        >
          Área Restrita
        </Link>
      </nav>
    </header>
  )
}
