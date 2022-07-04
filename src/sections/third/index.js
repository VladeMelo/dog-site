import Image from "next/image.js"
import { 
  Container,
  RoadmapContainer,
  RoadmapTitle,
  Roadmap,
  BulletPointContainer,
  BulletPointTextContainer
} from "./styles.js"

const Third = () => { 
  return (
    <Container>
      <RoadmapContainer>
        <RoadmapTitle>
          Imagine sua <strong>nova vida</strong> com seu cachorro
        </RoadmapTitle>

        <Roadmap>
          <BulletPointContainer>
            <Image
              src={require(`../../../public/images/bullet-point.png`)}
              alt='Imagem'
              objectFit="contain"
              width={200}
            />

            <BulletPointTextContainer>
              <h2>Imagine como sua vida com seu cachorro poderia ser daqui a alguns dias.</h2>

              <h2>Qualquer que seja o mau comportamento que seu cão estava apresentando antes, como morder tudo, latir demais ou ser agressivo, extremamente diminuído, ou, até mesmo, desapareceu.</h2>

              <h2>Eles estão finalmente ouvindo você.</h2>
              
              <h2>Eles estão obedientes.</h2>

              <h2>Além disso, estão mais felizes e saudáveis que nunca.</h2>

              <h2>O ambiente fica bem melhor quando ele está por perto.</h2>

              <h2>Aquele que te ama e ouve alegremente cada palavra sua.</h2>

              <h2>O melhor amigo do ser humano.</h2>

              <h2><strong>Você finalmente tem o cachorro que sempre quis!</strong></h2>
            </BulletPointTextContainer>
          </BulletPointContainer>

          <Image
            src={require(`../../../public/images/dog-with-flower.png`)}
            alt='Imagem'
            objectFit="contain"
            width={800}
            height={1400}
          />
        </Roadmap>
      </RoadmapContainer>
    </Container>
  )
}

export default Third