// import Hero from './../../../assets/home/hero.svg'
import { Crimson_Text } from 'next/font/google'
const Crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export default function Hero() {
  return (
    <div className="w-full min-h-[350px] md:min-h-[550px] px-5 md:px-20 py-16 bg-cover bg-no-repeat bg-[url('./../../public/home/hero.png')]">
      <h1 className="text-white font-bold text-5xl md:text-7xl uppercase">
        Nosso Lema
      </h1>
      <div className={`flex flex-col mt-20 md:mt-40 ${Crimson.className}`}>
        <p className="text-3xl md:text-5xl uppercase text-white">
          <strong className="font-extrabold cursor-pointer">Acolher</strong>{' '}
          para mudar
        </p>
        <p className="text-3xl md:text-5xl uppercase text-white mt-16">
          <strong className="font-extrabold cursor-pointer">Educar</strong> para
          transformar
        </p>
      </div>
    </div>
  )
}
