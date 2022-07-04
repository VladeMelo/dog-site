import Image from "next/image.js"
import { 
  Container,
  Title,
  ImageAndTextContainer,
  ButtonCTAOrange
} from "./styles.js"

const Fourth = () => { 
  return (
    <Container>
      <Title>
        Mas e a pergunta que não quer calar,<br/> quem é o <strong>verdadeiro vilão</strong> disso tudo?
      </Title>

      <ImageAndTextContainer>
        <Image
          src={require(`../../../public/images/dog-with-glasses.png`)}
          alt='Imagem'
          objectFit="contain"
          width={320}
          height={320}
        />

        <div>
          <h2>
            O maior vilão para o mau comportamento de todo cachorro se chama <strong>“neuroplasticidade”</strong>. Bastante estudada pelos pesquisadores de Harvard, a neuroplasticidade é a habilidade que o cérebro tem de se transformar a partir da exposição a novas experiências.
            <br/>
            O <strong>Método Cachorro Genial</strong> vai proporcionar a estimulação mental e os treinamentos certos para deixar o cérebro do seu cachorro mais aberto à aprender novas informações, garantindo que os maus comportamentos do seu cão <strong>desapareçam</strong>, enquanto que os mais desejáveis por você aparecem no lugar.
          </h2>
        </div>
      </ImageAndTextContainer>

      <ButtonCTAOrange>
        <h1>Clique aqui e comece ainda hoje</h1>
      </ButtonCTAOrange>
    </Container>
  )
}

export default Fourth