import AbracoImage from '@/assets/projeto/abraco.png'
import Image from 'next/image'

export default function AbracoAmoroso() {
  return (
    <div className="w-full mx-auto py-12 mb-6">
      <div className="min-w-60 w-5/12 mx-auto mb-6 flex justify-around items-center flex-wrap bg-primary py-10 px-5 rounded-lg">
        <Image
          src={AbracoImage}
          alt="Abraço Amoroso Image"
          className="w-4/12 min-w-40"
        />
        <h1 className="max-md:text-3xl max-lg:text-4xl text-6xl text-white text-center">
          Abraço
          <br />
          Amoroso
        </h1>
      </div>
      <div className="mx-auto w-9/12 flex flex-col justify-center items-center mt-16 text-justify">
        <p className="text-xl md:text-2xl">
          Abraço amoroso é um encontro de almas, um silêncio que fala, é uma
          recompensa para aqueles que contribuem e um sorriso para aqueles que
          recebem.
        </p>
        <p className="text-xl md:text-2xl mt-16">
          No abraço amoroso da Mãe, encontramos a essência da compaixão. Cada
          gesto, cada sorriso, cada doação, é um fio de tecido no grande
          “tapete” da solidariedade.
        </p>
        <p className="text-xl md:text-2xl mt-16">
          Fomos agraciados pela Mãe de levar este abraço amoroso aos nossos
          irmãos carentes, através de:{' '}
        </p>
        <p className="text-xl md:text-2xl mt-8 mr-auto ml-4">
          a) Alimentação no Lar, uma cesta básica
        </p>
        <p className="text-xl md:text-2xl mt-2 mr-auto ml-12">
          Transformam dias cinzentos, pela fome, em momentos de pura alegria e
          conexão com os ensinamentos do Mestre.
        </p>
        <p className="text-xl md:text-2xl mt-8 mr-auto ml-4">
          b) Educação no Lar.
        </p>
        <p className="text-xl md:text-2xl mt-2 mr-auto ml-12">
          Transformam mentes anuladas pela “cegueira” do conhecimento em mentes
          promissoras pela luz da educação.
        </p>
        <p className="text-xl md:text-2xl mt-16">
          Um abraço amoroso entre irmãos, são braços abertos prontos para
          envolver e confortar, acreditem é menos sobre a necessidade e mais
          sobre a celebração da companhia.
        </p>
      </div>
    </div>
  )
}
