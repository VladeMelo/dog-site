import '../globalStyle/styles.css'

import GlobalStyle from '../globalStyle/styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
