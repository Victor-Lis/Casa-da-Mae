import AbracoAmoroso from './components/AbracoAmoroso'
import Hero from './components/Hero'

import AmorImage from '@/assets/projeto/amor.png'
import AlimentosImage from '@/assets/casadamae/alimentos.png'
import EducacaoImage from '@/assets/home/educar.png'
import AjudaImage from '@/assets/projeto/ajuda.png'

import Section from './components/Section'
import Image from 'next/image'

export default function Projeto() {
  const alimentacaoTexts = [
    'O exercício do sofrimento, a angústia e a amargura, provocados pela fome são marcas que não se tem vontade de divulgá-las, pois quem irá compreender tal fato? … somente aqueles que a consomem, porque são vozes caladas, olhos fechados e mentes anuladas, porque foram “ encurralados” num esquecimento inexplicável de nossa sociedade.',
    'Hoje, são 20 cestas básicas, queremos aumentar mas os recursos são escassos. Precisamos aumentar essa corrente do bem, sejam nossos INVESTIDORES lhes garantimos a melhor taxa de retorno, expressada na certeza de estarem levando o pão a mesa dessas famílias e graças a genorosidade  de cada um, a fome dá lugar à esperança e a saúde começa a florescer nestes lares sofridos. ',
  ]

  const educacaoTexts = [
    'Acreditamos que a educação é a base para o desenvolvimento e a realização pessoal, e a “ Casa da Mãe” tem como objetivo estender esta oportunidade às famílias carentes.',
    'A frente deste projeto está o Educador Professor  Rubens T. Machado: Mestre em Contabilidade, Doutor em Ciências Empresariais e Pós Doutor em Psicologia, com experiência de mais de 50 anos na academia,  como professor e pesquisador.',
    'Convidamos todos a se juntarem a nós nesta jornada de educação e crescimento. Sua ajuda é fundamental para o sucesso desta empreitada e juntos podemos fazer a diferença na vida destas famílias.',
    'Cultivar esperança é plantar sementes de possibilidades no “solo” fértil da mente, disseminando conhecimento através do compartilhamento de habilidades e saberes, os quais abrem portas para novos horizontes, e o que é melhor: dar um pouco de qualidade de vida a estes nossos irmãos.',
    'Possibilitar que cada criança ou cada adolescente seja protagonista de sua própria vida, é o maior objetivo da “Casa da Mãe”, e para tanto a educação é fundamental, pois ela transforma vidas, liberta consciências, amplia habilidades e competências, como já dissemos.',
    'Toda criança cresce com sonhos e estes são poderosos, pois moldam o jeito de viver e, as escolhas que fazem definem seus destinos. ',
    'Entretanto para a maioria das crianças carentes costuma ser diferente, uma vez que seus sonhos transformam-se em pesadelos pela ausência de perspectivas: abandonam a escola, envolvem-se com drogas, crime e alcoolismo, com isso seu mundo desmorona.',
    'Estas crianças e os jovens precisam acreditar que não são um fracasso, mas que são preciosos porque são únicos e sobretudo são filhos da mesma Mãe, portanto somos irmãos.',
    'Como professor, pesquisador e acima de tudo educador, tive que priorizar o subprojeto Alimentação no Lar por entender a dificuldade de falar em educação num lar com imensas carências alimentares.',
  ]

  const helpTexts = [
    'Sejam investidores da “Casa da Mãe”, para que possamos desenvolver o projeto “Abraço Amoroso” por completo.',
    'Vocês, tenham certeza, abrirão portas para um futuro melhor para estas crianças e adolescentes, pois o conhecimento é a chave que liberta e empodera.',
    'A cada livro, cada lição e cada ensinamento que concedermos, estaremos escrevendo histórias de sucessos e transformação na vida destas famílias.',
    'O abraço amoroso da Mãe se estende através de cada um de vocês Investidores, num ciclo virtuoso de carinho e apoio. Que este abraço amoroso da Mãe se multiplique e retorne a vocês investidores em forma de bênçãos e gratidão infinita.',
  ]

  return (
    <main className="bg-tertiary">
      <Hero />
      <AbracoAmoroso />
      <Section
        Image={
          <Image src={AlimentosImage} alt="Alimentação" className="w-3/12" />
        }
        title="Alimentação no Lar"
        texts={alimentacaoTexts}
      />
      <Section
        Image={<Image src={EducacaoImage} alt="Educação" className="w-5/12" />}
        title="Educação no Lar"
        texts={educacaoTexts}
      />
      <Section
        Image={<Image src={AjudaImage} alt="Ajuda" className="w-3/12" />}
        title="Como ajudar?"
        texts={helpTexts}
      />
      <div className="mx-auto flex justify-center items-center py-6">
        <Image src={AmorImage} alt="Abraço" className="w-12" />
        <h1 className="text-[#FB5058]">MUITO OBRIGADO</h1>
        <Image src={AmorImage} alt="Abraço" className="w-12" />
      </div>
    </main>
  )
}
