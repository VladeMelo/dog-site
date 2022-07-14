import styled from 'styled-components'

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  flex-direction: column;
  padding: 40px 4px;
`

export const Title = styled.h2`
  font-size: 28px;
  text-align: center;

  strong {
    color: #EE1F3E;
    text-decoration: underline;
  }

  @media (max-width: 650px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`

export const ImageAndTextContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;

  div {
    max-width: 500px;

    h2 {
      font-size: 20px;

      @media (max-width: 650px) {
        font-size: 16px;
      }

      @media (max-width: 650px) {
        font-size: 14px;
      }
    }

    @media (max-width: 850px) {
      margin-top: 40px;
      max-width: 600px;
    }

    @media (max-width: 650px) {
      max-width: 500px;
    }

  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`

export const ButtonCTAOrange = styled.div`
  align-self: center;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 12px 32px;
  margin-top: 48px;
  background: linear-gradient(288.78deg, rgba(248, 183, 50, 0.5) -8.22%, #F87806 100%);

  h1 {
    text-transform: uppercase;
    font-size: 28px;
    color: #f8f8f8;

    @media (max-width: 580px) {
      font-size: 20px;
    }

    @media (max-width: 450px) {
      font-size: 16px;
    }

    @media (max-width: 360px) {
      font-size: 15px;
    }
  }
`