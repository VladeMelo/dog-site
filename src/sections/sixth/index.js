import Image from "next/image.js"
import { 
  Container,
  Title,
  ModuleContainer,
  ModuleIntroductionContainer,
  ModuleIntroduction,
  ModuleDescription,
  ModuleBulletPoints,
  RedLine,
  BulletPoint,
  BonusTitle,
  LimitTitle,
  LimitContainer,
  DecisionTitle,
  DecisionContainer,
  ButtonCTABlue,
  LimitImageContainer
} from "./styles.js"

const Sixth = () => { 
  return (
    <Container>
      <Title>
        Aqui vai um gostinho de como é o curso<br/> online <strong>“Método Cachorro Genial”</strong>
      </Title>

      <ModuleContainer>
        <ModuleIntroductionContainer>
          <RedLine/>

          <ModuleIntroduction>
            <h2>Módulo 1</h2>

            <h1>Pré Escola</h1>
          </ModuleIntroduction>
        </ModuleIntroductionContainer>

        <ModuleDescription>
          Aqui é o ponto inicial do curso, onde seu cachorro aprenderá pela primeira vez que ele possui um incrível poder cerebral e vamos mostrar como você pode usar esse poder para ter um cachorro super obediente.
        </ModuleDescription>

        <ModuleBulletPoints>
          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Como treinar seu cão para que ele mantenha a atenção em você
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              A dica secreta para fazer com que seu cão fique sempre atento aos seus olhos, para que a comunicação entre vocês se torne mais forte e ele consiga entender melhor o que você quer.
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Um jogo muito simples para fazer com que seu cão preste mais atenção aos seus comandos, o Jogo do Avião.
            </h2>
          </BulletPoint>
        </ModuleBulletPoints>
      </ModuleContainer>

      <ModuleContainer>
        <ModuleIntroductionContainer>
          <RedLine isBlue />

          <ModuleIntroduction>
            <h2>Módulo 2</h2>

            <h1>Pré Intermediário</h1>
          </ModuleIntroduction>
        </ModuleIntroductionContainer>

        <ModuleDescription>
          Agora que seu cão dominou o treino básico, chegou a hora de mostrar ao cachorro como usar seus sentidos para executar seus comandos.
        </ModuleDescription>

        <ModuleBulletPoints>
          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              “Jogo de Caça ao Tesouro”, exercício para aliviar qualquer tédio que seu cachorro esteja sentindo, sendo o tédio um dos maiores causadores do mau comportamento.
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Para manter elevado o estímulo mental do seu cão, ensinaremos o “Jogo do Muffin”.
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              “Jogo do Poço de Bolas” para drenar a energia do seu cão e facilitar o ensinamento dos comandos para ele, tudo isso enquanto ele se diverte e se exercita.
            </h2>
          </BulletPoint>
        </ModuleBulletPoints>
      </ModuleContainer>

      <ModuleContainer>
        <ModuleIntroductionContainer>
          <RedLine/>

          <ModuleIntroduction>
            <h2>Módulo 3</h2>

            <h1>Intermediário</h1>
          </ModuleIntroduction>
        </ModuleIntroductionContainer>

        <ModuleDescription>
          Aqui seu cão aprenderá sobre como ter paciência e manter a calma
        </ModuleDescription>

        <ModuleBulletPoints>
          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              “Para Cima e Para Baixo” é um jogo que acalma seu cão rapidamente independente o quão agitado ele estiver.
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Uma pequena quantidade de exercício junto com uma mínima estimulação mental é sempre importante, no “Jogo da Garrafa” você terá ambos de uma forma fácil.
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Para remover qualquer medo da água vamos usar um jogo bem interessante e pouco conhecido, ensinaremos o “Balançando as Guloseimas”.
            </h2>
          </BulletPoint>
        </ModuleBulletPoints>
      </ModuleContainer>

      <ModuleContainer>
        <ModuleIntroductionContainer>
          <RedLine isBlue />

          <ModuleIntroduction>
            <h2>Módulo 4</h2>

            <h1>Avançado</h1>
          </ModuleIntroduction>
        </ModuleIntroductionContainer>

        <ModuleDescription>
          Aqui você desenvolverá habilidades do seu cão e sua capacidade de se concentrar em cada comando seu
        </ModuleDescription>

        <ModuleBulletPoints>
          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Aumentar a agilidade mental com o “Jogo da Concha”
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              “Abre-te Sésamo”, jogo para desenvolver a paciência e a calma que todo cachorro deve ter.
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Habilidade, paciência e destreza, tudo isso com o jogo “Tapete Mágico”
            </h2>
          </BulletPoint>
        </ModuleBulletPoints>
      </ModuleContainer>

      <ModuleContainer>
        <ModuleIntroductionContainer>
          <RedLine/>

          <ModuleIntroduction>
            <h2>Módulo 5</h2>

            <h1>Super Avançado</h1>
          </ModuleIntroduction>
        </ModuleIntroductionContainer>

        <ModuleDescription>
          Chegou a hora de colocarmos a inteligência do seu cão em prática. Vamos mostrar para ele como usar sua inteligência para ser mais comportado e paciente.
        </ModuleDescription>

        <ModuleBulletPoints>
          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Famosa brincadeira entre os humanos, usaremos o jogo “Esconde-Esconde” para criar um vínculo extremamente forte entre você e seu cachorro.
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              “Olhe para Tal”, jogo essencial para fazer um cachorro parar de latir.
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Outra brincadeira conhecida entre os humanos, “Quente e Frio” vai ser bem importante para seu cão, para ele aprender a confiar mais nos cachorros e nas pessoas.
            </h2>
          </BulletPoint>
        </ModuleBulletPoints>
      </ModuleContainer>

      <ModuleContainer>
        <ModuleIntroductionContainer>
          <RedLine isBlue />

          <ModuleIntroduction>
            <h2>Módulo 6</h2>

            <h1>Mestre</h1>
          </ModuleIntroduction>
        </ModuleIntroductionContainer>

        <ModuleDescription>
          Nível para deixar qualquer um impressionado. Aqui vamos mostrar como desenvolver as habilidades motoras do seu cão em um nível impressionante.
        </ModuleDescription>

        <ModuleBulletPoints>
          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              “Serpentinas e Espirais” é um jogo para ajudar seu cão a ficar do seu lado e seguir seus passos, por mais difíceis e rápidos que sejam.
            </h2>
          </BulletPoint>

          <BulletPoint>
            <div>
              <Image
                src={require(`../../../public/images/bone.png`)}
                alt='Imagem'
              />
            </div>

            <h2>
              Seu cachorro dará nome a todos os brinquedos, o jogo “Diferenciando Nomes” vai aumentar a capacidade cognitiva do seu cachorro fazendo com que ele aprenda a escolher os brinquedos apenas pelo nome.
            </h2>
          </BulletPoint>
        </ModuleBulletPoints>
      </ModuleContainer>

      <BonusTitle>
        Bônus Especial
      </BonusTitle>

      <ModuleContainer>
        <ModuleIntroductionContainer>
          <RedLine isGold />

          <ModuleIntroduction>
            <h2>Bônus Especial 1</h2>

            <h1>As 8 Maneiras de Entender o Cachorro Pelas Orelhas</h1>
          </ModuleIntroduction>
        </ModuleIntroductionContainer>

        <ModuleDescription>
          Você vai aprender de uma vez por todas a entender o que seu cão está sentindo ou, até mesmo, pensando, apenas pelas orelhas dele.
        </ModuleDescription>
      </ModuleContainer>

      <ModuleContainer>
        <ModuleIntroductionContainer>
          <RedLine isGold />

          <ModuleIntroduction>
            <h2>Bônus Especial 2</h2>

            <h1>Ensine Português para seu Cachorro ainda Hoje</h1>
          </ModuleIntroduction>
        </ModuleIntroductionContainer>

        <ModuleDescription>
          As 5 técnicas criadas por um especialista em comportamento canino para fazer seu cão finalmente passar a lhe entender.
        </ModuleDescription>
      </ModuleContainer>

      <LimitTitle>
        Vagas Limitadas
      </LimitTitle>

      <LimitContainer>
        <LimitImageContainer>
          <Image
            src={require(`../../../public/images/dog-ear.png`)}
            alt='Imagem'
            objectFit="contain"
          />
        </LimitImageContainer>

        <div>
          <h2>
            Mas temos um aviso! Como o curso está com uma procura <strong>muito grande</strong> e não temos pretensão de ter uma enorme turma neste momento, o acesso ao Método Cachorro Genial está com as <strong>vagas limitadas</strong>.
            Se você está vendo isso agora é porque ainda há tempo para acessar o curso e ter direito a todos os <strong>bônus especiais</strong> que decidimos liberar por tempo indeterminado.
            Para os que acabaram de entrar, <strong>meus parabéns!</strong> Em instantes vocês vão receber um email com todo o material do curso, incluindo os bônus especiais.
          </h2>
        </div>
      </LimitContainer>

      <DecisionTitle>Hora da Decisão</DecisionTitle>

      <DecisionContainer>
        <h2>
          Caso você ainda não tenha entrado, vamos lhe mostrar 2 opções…
          <br/><br/>
          <strong>Primeiro:</strong>
          <br/>
          Fechar esta página e continuar sua vida exatamente como ela está. 
          Mas lembre-se de uma coisa: se você não fizer nada, nada vai mudar.
          O comportamento do seu cachorro continuará sendo o mesmo.
          Os estresses continuarão dia após dia.
          Pensamentos de desistir do seu cão passarão pela sua cabeça.
          Cada mau comportamento só vai piorar ao longo do tempo, devido ao processo chamado “reforço”.
          Em resumo, quanto mais cedo você agir, melhor será para você e seu cão.
          <br/><br/>
          <strong>Segundo:</strong>
          <br/>
          Você clica no botão abaixo e obtém o acesso ao Método Cachorro Genial imediatamente. Isso é 100% livre de risco. Se você não gostar ou mudar de ideia, você recebe seu dinheiro de volta no mesmo dia!
        </h2>
      </DecisionContainer>

      <ButtonCTABlue>
        <a
          href='https://dog-site.vercel.app'
        >
          <h1>Clique aqui e comece ainda hoje</h1>
        </a>
      </ButtonCTABlue>
    </Container>
  )
}

export default Sixth