import Image from "next/image.js"
import { useMemo } from "react"
import { 
  Container,
  DescriptionContainer,
  TextContainer,
  TestimonyContainer,
  Testimony,
  TestimonyPerson,
  TestimonyStars,
  TestimonyDescription,
  ButtonCTABlue,
  WhoNeedsContainer,
  WhoNeedsQuestion,
  WhoNeedsSubQuestion,
  WhoNeedsDescriptionContainer,
  WhoNeedsImages,
  WhoNeedsDescription,
  Description
} from "./styles.js"

const Second = () => {
  const descriptions = useMemo(() => {
    return [
      <h2 key={1}>Seu cachorro <strong>não te ouve</strong></h2>,
      <h2 key={2}>Você precisa treinar um novo filhote</h2>,
      <h2 key={3}>Seu cachorro <strong>late muito</strong></h2>,
      <h2 key={4}>Seu cão está <strong>puxando a coleira</strong></h2>,
      <h2 key={5}>Seu cão é <strong>agressivo</strong></h2>,
      <h2 key={6}>Seu cão está <strong>mordendo</strong> coisas que não deveria</h2>,
      <h2 key={7}>Seu cão está <strong>cavando</strong> o tempo todo</h2>,
      <h2 key={8}>Seu cachorro está <strong>pulando</strong></h2>,
      <h2 key={9}>Você está <strong>frustrado</strong> com seu cachorro</h2>,
      <h2 key={10}>Você pode até se <strong>arrepender</strong> de ter seu cão</h2>,
      <h2 key={11}>Você está preocupado que possa ter que desistir de seu cão por causa de problemas de comportamento que <strong>você não consegue mudar</strong></h2>,
      <h2 key={12}>Você sente que <strong>não consegue controlar</strong> seu cão</h2>,
      <h2 key={13}>Você diz ao seu cão <strong>“não”</strong>, mas ele continua mesmo assim</h2>,
      <h2 key={14}>Seu cão fica muito animado e é <strong>difícil se acalmar</strong></h2>,
      <h2 key={15}>Seu cão está <strong>chorando</strong> constantemente</h2>,
      <h2 key={16}>Seu cão tem <strong>medo</strong> de certos sons ou sofre de ansiedade</h2>,
    ]
  }, [])

  return (
    <Container>
      <DescriptionContainer>
        <TextContainer>
          <h1>Caro amigo dos cães,</h1>

          <h2>
            Todo cão, sem exceção, tem uma <strong>inteligência escondida</strong> dentro dele, basta você conseguir ativá-la.
            Nos últimos 10 anos, essa estratégia tem sido utilizada para trazer à tona a “inteligência secreta” que existe dentro de todo cão, eliminando qualquer tipo de mau comportamento e transformando seu cachorro em um animal de estimação <strong>comportado, obediente e amoroso.</strong>
            <br/>
            Vamos revelar como você pode eliminar rapidamente qualquer problema comportamental, não importa o quanto você pense que está enraizado, ou que tipo de cachorro você tenha.
            Se isso lhe interessa, eu sei que você achará o vídeo acima <strong>extremamente valioso…</strong>
          </h2>

          <h2>
            Porque vamos lhe apresentar um método de treinamento de cachorros que levou 10 anos para ser criado, e <strong>dezenas de milhares de dólares</strong> para ser aperfeiçoado, um método testado e comprovado para criar um cão incrivelmente bem comportado e inteligente que segue <strong>todos os seus comandos!</strong>
          </h2>
        </TextContainer>

        <Image
          src={require('../../../public/images/woman-and-dog-3d.png')}
          alt='Imagem'
          width={340}
          height={1.15 * 340}
        />
      </DescriptionContainer>

      <TestimonyContainer>
        <Testimony>
          <TestimonyPerson>
            <Image
              src={require('../../../public/images/user1.png')}
              alt='Imagem'
              width={60}
              height={60}
            />

            <h2>Maria Alice</h2>
          </TestimonyPerson>

          <TestimonyStars>
            {[0, 1, 2, 3, 4].map((_, index) => (
              <Image
                src={require('../../../public/images/star.png')}
                alt='Imagem'
                width={24}
                height={24}
                key={index}
              />
            ))}
          </TestimonyStars>

          <TestimonyDescription>
            Meu cachorro tem cerca de 3 anos. Sempre latia muito por qualquer coisa: querendo atenção toda hora, qualquer pessoa nova que aparecesse e, o pior de todos, quando eu saia de casa. O Método Cachorro Genial foi o que me salvou! Só com 3 dias de uso do método meu cachorro já tinha parado de latir a noite e se encontrava mais feliz que nunca. Um cachorro feliz implica em uma dona feliz e com o sono em dia!
          </TestimonyDescription>
        </Testimony>

        <Testimony>
          <TestimonyPerson>
            <Image
              src={require('../../../public/images/user2.png')}
              alt='Imagem'
              width={60}
              height={60}
            />

            <h2>Juliana Nascimento</h2>
          </TestimonyPerson>

          <TestimonyStars>
            {[0, 1, 2, 3, 4].map((_, index) => (
              <Image
                src={require('../../../public/images/star.png')}
                alt='Imagem'
                width={24}
                height={24}
                key={index}
              />
            ))}
          </TestimonyStars>

          <TestimonyDescription>
            Tanto os exercícios como as brincadeiras são muito práticas e simples, minha cadela de 4 meses e meu cachorro de 1 ano nunca estiveram tão obedientes e alegres desse jeito. Inacreditável como o método não ajuda apenas os donos, mas também cada cachorro.
          </TestimonyDescription>
        </Testimony>
      </TestimonyContainer>

      <ButtonCTABlue>
        <h1>Clique aqui e comece ainda hoje</h1>
      </ButtonCTABlue>

      <WhoNeedsContainer>
        <WhoNeedsQuestion>
          Quem precisa desta técnica para usar a inteligência oculta do seu cachorro e <strong>eliminar todo e qualquer mau comportamento?</strong>
        </WhoNeedsQuestion>

        <WhoNeedsSubQuestion>
          Algum desses problemas parece familiar…
        </WhoNeedsSubQuestion>

        <WhoNeedsDescriptionContainer>
          <WhoNeedsImages>
            {[0, 1, 2].map((_, index) => (
              <Image
                src={require(`../../../public/images/who-needs-${index + 1}.png`)}
                alt='Imagem'
                key={index}
                height={200}
                objectFit='contain'
              />
            ))}
          </WhoNeedsImages>

          <WhoNeedsDescription>
            {descriptions.map((element, index) => (
              <Description
                key={index}
              >
                <div>
                  <Image
                    src={require(`../../../public/images/dog-sit-2.png`)}
                    alt='Imagem'
                  />
                </div>

                {element}
              </Description>
            ))}
          </WhoNeedsDescription>
        </WhoNeedsDescriptionContainer>
      </WhoNeedsContainer>
    </Container>
  )
}

export default Second