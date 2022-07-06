import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100%;
  background: linear-gradient(180deg, #00D4FF 0%, rgba(9, 9, 121, 0.6) 100%);
  justify-content: center;
  align-items: center;
`

export const VSLContainer = styled.div`
  max-width: 900px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 4px 48px;
`

export const VSLSubtitle = styled.h2`
  font-size: 12px;
  text-align: center;

  @media (max-width: 420px) {
    font-size: 10px;
  }
`

export const VSLTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-top: 8px;

  strong {
    color: #EE1F3E;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`

export const ContainerVideo = styled.div`
  margin-top: 44px;
  width: 100%;
  max-width: 100%;
  height: 400px;
  background: grey;
`

export const ButtonCTAOrange = styled.div`
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