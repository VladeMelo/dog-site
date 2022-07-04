import { 
  Container,
  InfoContainer,
  Title,
  Info,
  InfoNumber
} from "./styles.js"

const Fifth = () => { 
  return (
    <Container>
      <InfoContainer>
        <Title>
          O que torna esse treinamento <strong>tão único</strong>
        </Title>

        <Info>
          <InfoNumber>1</InfoNumber>

          <div>
            <h1>Estimulo mental</h1>

            <h2>
              A maioria dos programas de treinamento de cães hoje em dia falham em envolver seu cão em um nível mental, não desenvolvendo sua inteligência. Com o estímulo mental certo, muitos comportamentos problemáticos simplesmente desaparecem.
            </h2>
          </div>
        </Info>

        <Info>
          <InfoNumber>2</InfoNumber>

          <div>
            <h1>A Verdadeira Causa</h1>

            <h2>
              A maioria dos programas de treinamento de cães falha com você e seu cão porque eles nunca abordam a verdadeira causa raiz do problema.
              <br/>
              Eles apenas lhe dão alguma técnica ou falam de algum brinquedo que garante que o cachorro vai parar de morder ou latir, mas que vai acabar só piorando o mau comportamento do seu cachorro com o tempo.
            </h2>
          </div>
        </Info>

        <Info>
          <InfoNumber>3</InfoNumber>

          <div>
            <h1>Técnicas Eficientes</h1>

            <h2>
              A maioria dos programas usam técnicas de treinamento de cães mais antigas, até mesmo sugerindo o uso de força, porém isso já foi comprovado que não funciona de jeito nenhum.
              <br/>
              O método que vamos utilizar é livre de força e segue as técnicas das pesquisas científicas de comportamento canino mais recentes.
            </h2>
          </div>
        </Info>
      </InfoContainer>
    </Container>
  )
}

export default Fifth