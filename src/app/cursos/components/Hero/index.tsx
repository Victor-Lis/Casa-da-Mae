import AulaImage from '@/assets/projeto/video-aula.png'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full bg-secondary px-1 md:px-20 py-16 flex flex-wrap justify-center items-center gap-x-40 gap-y-5">
      <div className="flex flex-col justify-center items-center">
        <Image src={AulaImage} alt="Logo Casa da Mãe" className="w-64" />
        <h1 className="text-center text-gray-500 text-3xl">
          Cursos <strong>Gratuitos</strong>
        </h1>
      </div>
      <p className="bg-primary text-white max-w-xl max-sm:text-xl max-sm:mx-4 text-3xl px-8 py-4 flex justify-center items-center text-justify rounded">
        Ensino acessível e disponível para todos, trazendo conhecimento para
        todos os interessados!
      </p>
    </div>
  )
}
