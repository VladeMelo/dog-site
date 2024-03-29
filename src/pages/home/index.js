import FirstSection from '../../sections/first'
import SecondSection from '../../sections/second'
import ThirdSection from '../../sections/third'
import FourthSection from '../../sections/fourth'
import FifthSection from '../../sections/fifth'
import SixthSection from '../../sections/sixth'
import SeventhSection from '../../sections/seventh'
import axios from 'axios'

import {
  Container
} from '../../styles/home'


const API_KEY = 'AIzaSyDCWpgt2RjMWIlBIwQZfzXmflHtQJhSKPw'
const ID_CHANNEL = 'UCCFPJVR4xVoPILwRvoLogVw'

// export async function getServerSideProps(context) {
//   const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCCFPJVR4xVoPILwRvoLogVw&maxResults=1&key=AIzaSyDCWpgt2RjMWIlBIwQZfzXmflHtQJhSKPw`)

//   return {
//     props: {
//       data
//     },
//   }
// }

const Home = (props) => { 

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