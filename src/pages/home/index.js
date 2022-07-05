import FirstSection from '../../sections/first'
import SecondSection from '../../sections/second'
import ThirdSection from '../../sections/third'
import FourthSection from '../../sections/fourth'
import FifthSection from '../../sections/fifth'
import SixthSection from '../../sections/sixth'
import SeventhSection from '../../sections/seventh'

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