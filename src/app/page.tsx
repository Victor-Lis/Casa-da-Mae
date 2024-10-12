import Link from 'next/link'
import Hero from './components/Hero'
import Banner from './components/Banner'

import AcolhimentoImage from '@/assets/home/acolhimento.png'
import EducarImage from './../assets/home/educar.png'
import Section from './components/Section'

export default function Home() {
  const acolhimentoTexts = [
    'Quando acolhemos alguém, estamos abertos a compreender suas perspectivas e experiências. Isso nos permite questionar nossas próprias crenças e estar dispostos a mudar.',
    'O acolhimento da “ Casa da Mãe” não se limita a compartilhar somente uma cesta básica , mas também se estende a partilha do afeto e a compreensão da empatia, pois quando acolhemos de coração aberto, criamos conexões genuínas e fortalecemos os laços humanos, valorizando a diversidade e respeitando as diferenças individuais.',
    'A Mãe nos ensina que situações desafiadoras sempre existirão, a solução está na forma como olhamos para elas: não vê-las como problema, mas sim como a possibilidade de uma conexão humana com nossos irmãos menos favorecidos.',
  ]

  const educarTexts = [
    'A realidade de muitas crianças e jovens carentes é marcada pela falta de acesso à educação. Para eles, ter uma formação é um privilégio distante, um sonho que parece inatingível, principalmente pelo descaso que são tratados pela sociedade. No entanto, é justamente nesse contexto que a educação torna-se um instrumento poderoso de transformação.',
    'Imagine um adolecente que cresceu numa comunidade vulnerável, cercado de adversidades. Ele enfrenta a falta de recursos, a violência e a ausência de perspectivas. Mas, em meio a tudo isso, surge a “Casa da Mãe” com seu projeto “abraço amoroso”, oferecendo luz a cegueira da falta de conhecimento. Essa oportunidade não apenas ensina, mas também desperta a esperança e o desejo de mudança.',
    'A educação na “Casa da Mãe” para estes jovens vai além dos livros e das salas de aula. Ela é um farol que ilumina um caminho diferente, uma alternativa à marginalização e à desesperança.',
    'Educar para transformar significa não apenas transmitir conhecimentos, mas também cultivar valores como resiliência, empatia e cidadania. É mostrar que eles têm o poder de mudar suas próprias vidas e, consequentemente, a realidade ao seu redor. Essa transformação não ocorre apenas individualmente, mas também coletivamente à medida que esses jovens se tornam agentes de mudança em suas comunidades.',
    'Portanto, nossos estimados investidores, aplicar em educação destes jovens é investir no futuro. É acreditar que mesmo diante das adversidades, eles podem superar obstáculos e construir um mundo mais justo e igualitário.',
    'Junte-se a nós nesta caminhada, contamos com você. ',
  ]

  return (
    <main className="flex flex-col w-full bg-tertiary">
      <Hero />
      <Banner />
      <Section
        image={AcolhimentoImage}
        title="Acolhimento"
        texts={acolhimentoTexts}
      />
      <Section
        image={EducarImage}
        title="Educar"
        texts={educarTexts}
        imageFull={true}
        bgPath='./../assets/home/educar.png'
      />
    </main>
  )
}
