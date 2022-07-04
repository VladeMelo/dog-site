import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100%;
  background: #000;
  justify-content: center;
  align-items: center;
`

export const FooterContainer = styled.div`
  max-width: 900px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 4px 36px;

  h2 {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.54);
    text-align: center;
    margin-top: -68px;
  }
`