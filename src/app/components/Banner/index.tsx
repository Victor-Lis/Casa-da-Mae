import Anatomia from './../../../assets/home/anatomia.svg'

import Image from 'next/image'

import { Crimson_Text } from 'next/font/google'
const Crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export default function Banner() {
  return (
    <main
      className={`w-11/12 md:w-9/12 flex-wrap lg:flex-nowrap py-10 px-5 rounded-xl mt-20 mx-auto bg-primary flex ${Crimson.className}`}
    >
      <div className="flex-1 min-w-48 justify-center items-center text-xl lg:text-2xl md:pl-5 mr-5 text-white">
        <p>
          Neste processo a <strong>“Casa da Mãe”</strong>, conta com seu filho e
          idealizador do projeto <strong>“Abraço Amoroso”</strong>,{' '}
          <strong>Prof. Rubens Teixeira Machado</strong>, cuja visão integra a
          corrente científica de uma tomada de decisão humanizada, com suas
          pesquisas acadêmicas alinhando:{' '}
          <strong>mente, corpo e espiritualidade.</strong>
        </p>

        <p className="mt-10">
          A <strong>“Casa da Mãe”</strong> não é apenas um espaço de educação e
          acolhimento, é um <strong>lar de esperança</strong>, onde o futuro é
          construído com base no amor e na ajuda mútua.
        </p>
      </div>
      <Image className="w-48 mt-5 mx-auto" src={Anatomia} alt="Anatomia" />
    </main>
  )
}
