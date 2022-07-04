import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }

  div {
    display: flex;
  }

  h1 {
    font-weight: 700;
  }

  strong {
    font-weight: 700;
  }
`;