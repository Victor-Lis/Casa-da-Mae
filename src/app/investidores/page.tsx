import Hero from './components/Hero'
import ContentBox from './components/ContentBox'

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
    ' Temos 3 tipos de famílias de investidores, aqui na “Casa da Mãe” todas com taxa retorno iguais: gratidão. Sendo apenas diferenciadas pela posse econômica de cada família.',
  ]

  return (
    <main className="bg-tertiary pb-4">
      <Hero />
      <ContentBox title="Explicação" content={explicacaoText} />
    </main>
  )
}
