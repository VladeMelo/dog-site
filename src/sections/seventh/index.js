import Image from "next/image.js"
import {
  Container,
  FooterContainer
} from './styles'

const Seventh = () => {
  return(
    <Container>
      <FooterContainer>
        <Image
          src={require(`../../../public/images/logo-white-version.png`)}
          alt='Imagem'
          objectFit="contain"
          width={300}
          height={300}
        />

        <h2>
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. 
          Fazemos todos os esforços para indicar claramente e mostrar todas as provas do conteúdo e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. 
          Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o e-mail de contato olhos@mdinc.online e falar conosco em horário comercial de Segunda a Sextas das 09h00 as 18h00. 
          Lemos e respondemos todas as mensagens por ordem de chegada.
        </h2>
      </FooterContainer>
    </Container>
  ) 
}

export default Seventh