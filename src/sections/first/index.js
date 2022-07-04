import { 
  Container,
  VSLContainer,
  VSLSubtitle,
  VSLTitle,
  ContainerVideo,
  ButtonCTAOrange
} from "./styles.js"

const First = () => { 
  return (
    <Container>
      <VSLContainer>
        <VSLSubtitle>Finalmente revelado por um dos melhores treinadores de cachorros dos Estados Unidos, uma estratégia de treinamento simples que…</VSLSubtitle>
        
        <VSLTitle>Potencialize a <strong>“Inteligência Secreta”</strong>do seu Cachorro para <strong>eliminar o mau comportamento</strong> em apenas 21 dias e criar o animal obediente e bem comportado dos seus sonhos!</VSLTitle>
        
        <ContainerVideo />
        
        <ButtonCTAOrange>
          <h1>Clique aqui e comece ainda hoje</h1>
        </ButtonCTAOrange>
      </VSLContainer>
    </Container>
  )
}

export default First