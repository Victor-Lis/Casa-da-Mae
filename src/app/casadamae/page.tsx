import Hero from './components/Hero'
import Text from './components/Text'

export default function CasaDaMae() {
  const textoCasaDaMae = [
    'A “Casa da Mãe”, sob a orientação do Prof. Dr. Rubens T. Machado, oferece acolhimento: alimentar e educacional, hoje, a 20 famílias carentes de nossa comunidade.',
    'Embora a utopia: da moradia digna, da educação à todos e do saciar da fome ainda estejam distantes para muitos, cada pequeno passo conta, porque cada número representa uma vida, um sorriso e um sonho conquistado.',
    'Entre as preocupações da “Casa da Mãe” está justamente resgatar os sonhos que ficaram perdidos pela vulnerabilidade à miséria que atinge estas famílias. ',
    'Hoje, a “Casa da Mãe” é um farol de esperança para estas 20 famílias. Mas nossa visão vai além. Queremos alcançar mais, fazer mais. Para isso precisamos de mais investidores. ',
    'Ao se juntar a nós, você se torna parte dessa  jornada. Sua contribuição mensal ajuda a manter nossas portas abertas, nossas dispensas abastecidas e nossos corações cheios de gratidão.',
    'Cada “tijolo” colocado é um passo em direção a um futuro promissor, juntos não estamos somente eliminando a fome,mas construindo lares onde a esperança floresce e a educação rompe o ciclo de miséria.',
    'Nós da “Casa da Mãe”, nos negamos a aceitar o slogan “ o que não tem remédio, remediado está”. Preferimos o dito de Madre Tereza de Calcutá “ O meu trabalho representa apenas uma gota de água no oceano, porém, sem ela, o oceano seria menor”.',
    'A Mãe nos lembra da mensagem de Jesus: “E, tomando uma criança, colocou-a no meio deles. Pegando-a nos braços, disse-lhes: quem recebe uma destas crianças em meu nome, está me recebendo, e quem me recebe, não está apenas me recebendo, mas também àquele que me enviou”.',
    'Faça parte desta história! Junte-se a nós nesta jornada de amor, solidariedade e transformação, juntos podemos fazer o difícil acontecer.',
  ]

  return (
    <main>
      <Hero />
      <Text text={textoCasaDaMae} />
    </main>
  )
}
