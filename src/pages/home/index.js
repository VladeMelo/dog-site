import FirstSection from '../../sections/first'
import SecondSection from '../../sections/second'
import ThirdSection from '../../sections/Third'
import FourthSection from '../../sections/Fourth'
import FifthSection from '../../sections/fifth'
import SixthSection from '../../sections/Sixth'
import SeventhSection from '../../sections/Seventh'

import {
  Container
} from '../../styles/home'

const Home = () => { 
  return (
    <Container>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
    </Container>
  )
}

export default Home