// import Youtube from 'react-youtube'

import { 
  Container,
  VSLContainer,
  VSLSubtitle,
  VSLTitle,
  ContainerVideo,
  ButtonCTAOrange
} from "./styles.js"

// const opts = {
//   height: '400',
//   width: '100%',
//   playerVars: {
//     autoplay: 1,
//     controls: 0
//   },
// };

const First = (props) => { 

  return (
    <Container>
      <VSLContainer>
        <VSLSubtitle>Finalmente revelado por um dos melhores treinadores de cachorros dos Estados Unidos, uma estratégia de treinamento simples que…</VSLSubtitle>
        
        <VSLTitle>Potencialize a <strong>“Inteligência Secreta”</strong>do seu Cachorro para <strong>eliminar o mau comportamento</strong> em apenas 21 dias e criar o animal obediente e bem comportado dos seus sonhos!</VSLTitle>

        <iframe
          className='player'
          src={`https://www.youtube.com/embed/2XTBP2Aq8dc?autoplay=1&enablejsapi=1`}
          width={'100%'}
          height={400}
          frameBorder="0"
          style={{
            marginTop: 44
          }}
        />
        
        {/* <ContainerVideo>
          <Youtube
            videoId={props.video.id.videoId}
            // opts={opts}
            style={{
              marginTop: 44,
            }}
          />
        </ContainerVideo> */}
        <ButtonCTAOrange>
          <a
            href='https://pay.kiwify.com.br/Y3Og4fV'
          >
            <h1>Clique aqui e comece ainda hoje</h1>
          </a>
        </ButtonCTAOrange>
      </VSLContainer>
    </Container>
  )
}

export default First