import Hero from './components/Hero'
import ContentBox from './components/ContentBox'
import Divisoria from './components/Divisoria'

import ApoioImage from '@/assets/investidores/apoio-financeiro.png'
import ThankYouImage from '@/assets/investidores/obrigado.png'

export default function Investidores() {
  const explicacaoText = [
    'Oferecemos retornos superiores às taxas do mundo profano',
    'Porque nosso “produto” é a caridade e, investir nela é mais rentável por várias razões, entre as quais: Nos conecta com nossa humanidade e isto nos faz sentir parte de algo maior. ',
    'Criar laços sociais  nos ajuda a construir relacionamentos significativos, os quais nos tiram o foco de nossos próprios problemas e nos ajudam a cultivar a empatia, o que é muito importante, pois, estamos ajudando a construir um mundo melhor.',
    'A caridade “chega a Deus”, não através de sua manifestação física, mas pelo coração que se exterioriza através da pureza e sinceridade do desejo de ajudar o próximo.',
    'Esses valores espirituais e emocionais proporcionam juros incríveis, pois trazem satisfação que transcende  os valores monetários e, além disso nos levam a crer que a verdade está naquilo que nos conduz a fazer o bem e, às vezes, é preciso que nos perguntemos! Qual é a nossa verdade?',
    'Quando nos aprofundamos no sentido da caridade vemos que é um ato de amor altruísta, é uma forma de comunicação espiritual ou conexão com o divino, ultrapassando as barreiras físicas e alcançando um plano espiritual onde as intenções puras são reconhecidas e valorizadas.',
    'Neste sentido a caridade, absorve um pouco da gratidão, muito embora com conceitos distintos, caminham juntas, pois enquanto na caridade vocês investidores estarão praticando a ação de dar e ajudar; na gratidão vocês investidores terão a resposta espiritual e emocional do reconhecimento do bem praticado, através da felicidade de nossos irmão pelo alívio da fome e o auxílio à educação.',
    'A gratidão não é apenas uma palavra, mas o juros mais altos que podemos oferecer e, vocês investidores são merecedores de cada letra dessa poderosa expressão.',
    'Temos 3 tipos de famílias de investidores, aqui na “Casa da Mãe” todas com taxa retorno iguais: gratidão. Sendo apenas diferenciadas pela posse econômica de cada família.',
  ]

  const familiaUmText = [
    'Para nossos investidores de R$50,00 (CINQUENTA REAIS) MENSAIS,  expressamos nossa sincera gratidão.',
    'Cada contribuição é um “tijolo” a mais na fundação de um mundo mais justo. ',
    'A Mãe não os distingue pelo valor da contribuição, mas pela generosidade de seu gesto, pois ela nos conhece a final é nossa Mãe.',
  ]

  const familiaDoisText = [
    'Para nossos investidores de R$100,00 (CEM REAIS) MENSAIS, nosso reconhecimento do impacto positivo têm nas ações da “Casa da Mãe”.',
    'Tenham certeza de que vocês estão empoderando famílias carentes a construírem caminhos diferentes, com prevalência na dignidade e na esperança, como já dissemos:',
    'A Mãe não os distingue pelo valor da contribuição, mas pela generosidade de seu gesto, pois ela nos conhece a final é nossa Mãe.',
  ]

  const familiaTresText = [
    'Para nossos investidores de R$200,00 (DUZENTOS REAIS) OU MAIS, MENSAIS, nosso mais profundo agradecimento.',
    'Sua capacidade de ajudar é um exemplo inspirador de amor ao próximo e de compromisso com a mudança social.',
    'Gratidão por tornarem possível a nossa missão, juntos construiremos um futuro melhor para estas famílias carentes.',
    'Repetimos nosso dito: a Mãe não os distingue pelo valor da contribuição, mas sim pelo seu engajamento da nossa causa. A final ela nos conhece, pois é nossa Mãe.',
  ]

  const apoioFinanceiroText = [
    'Rubens Teixeira Machado  - CPF.519,907,768-68',
    'Banco Itaú Unibanco - Agência 3809 Conta 04259-5',
    'PIX: 519.907.768-68',
    'Et. Pedimos a gentileza de enviarem seu investimento entre os dias 01 - 10 de cada mês, pelo fato de entregarmos as cestas básicas no dia  20 de cada mês.',
  ]

  const agradecimentosText = [
    'A todos os INVESTIDORES, a “Casa da Mãe “ agradece, compartilha com todos o selo da gratidão, pois através da sua generosidade, fortalecemos em nós os laços afetivos de amor e confiança de que Deus está conosco nesta empreitada de ajuda aos nossos irmãos, que também são seus filhos. ',
    'A resiliência não é algo que se tem ou não tem; é uma habilidade que podemos desenvolver e fortalecer ao longo do tempo, e o investimento em nossos irmãos carentes nos oportuniza além do crescimento pessoal, a verdadeira resiliência.',
    'Venha para nossa causa, participando de uma das famílias de INVESTIDORES da “Casa da Mãe”.',
    'Seja solidário porque é força transformadora, sua  generosidade  conforta porque sabemos que este gesto faz uma enorme diferença na vida de nossos irmãos carentes.',
    'Juntos vamos melhorar a qualidade de vida destas pessoas. Seja INVESTIDOR!',
  ]

  return (
    <main className="bg-tertiary pb-16 overflow-x-hidden">
      <Hero />
      <ContentBox
        titleType="ContentBox"
        title="Explicação"
        content={explicacaoText}
      />
      <Divisoria />
      <ContentBox
        titleType="External"
        title="Família 1 (UM)"
        content={familiaUmText}
      />
      <Divisoria />
      <ContentBox
        titleType="External"
        title="Família 2 (DOIS)"
        content={familiaDoisText}
      />
      <Divisoria />
      <ContentBox
        titleType="External"
        title="Família 3 (TRES)"
        content={familiaTresText}
      />
      <Divisoria />
      <ContentBox
        titleType="External"
        titleImage={ApoioImage}
        title="Apoio Financeiro"
        content={apoioFinanceiroText}
      />
      <Divisoria />
      <ContentBox
        titleType="External"
        titleImage={ThankYouImage}
        title="Agradecimentos"
        content={agradecimentosText}
      />
    </main>
  )
}
