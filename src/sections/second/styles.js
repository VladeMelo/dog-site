import styled from 'styled-components'

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  flex-direction: column;
  padding: 40px 4px;
`

export const DescriptionContainer = styled.div`
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  flex-direction: column;
  max-width: 416px;
  
  h1 {
    font-size: 20px;

    @media (max-width: 700px) {
      font-size: 18px;
    }
  }

  h2 {
    font-size: 18px;
    margin-top: 20px;

    @media (max-width: 700px) {
      font-size: 16px;
    }
  }

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`

export const TestimonyContainer = styled.div`
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 830px) {
    flex-direction: column;
  }
`

export const Testimony = styled.div`
  max-width: 400px;
  width: 100%;
  height: 316px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #000;
  background: none;
  flex-direction: column;

  box-shadow: 4px 4px 12px;

  @media (max-width: 830px) {
    max-width: 340px;
    height: 100%;

    & + div {
      margin-top: 24px;
    }
  }
`

export const TestimonyPerson = styled.div`
  align-items: center;

  h2 {
    margin-left: 12px;
    font-size: 24px;
  }
`

export const TestimonyStars = styled.div`
  margin-top: 8px;
  width: 140px;
  justify-content: space-between;
`

export const TestimonyDescription = styled.h2`
  margin-top: 8px;
  font-size: 16px;

  @media (max-width: 830px) {
    font-size: 14px;
  }
`

export const ButtonCTABlue = styled.div`
  max-width: 600px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 12px 32px;
  margin-top: 56px;
  background: linear-gradient(123.69deg, rgba(0, 169, 255, 0.5) 4.62%, #064EF8 63.01%);
  align-self: center;

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

export const WhoNeedsContainer = styled.div`
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
`

export const WhoNeedsQuestion = styled.h2`
  font-size: 28px;
  text-align: center;

  @media (max-width: 550px) {
    font-size: 18px;
  }

  strong {
    color: #EE1F3E;
    text-decoration: underline;
  }
`

export const WhoNeedsSubQuestion = styled.h2`
  font-size: 20px;
  margin-top: 12px;

  @media (max-width: 550px) {
    font-size: 13px;
  }
`

export const WhoNeedsDescriptionContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;

  @media (max-width: 650px) {
    justify-content: center;
  }
`

export const WhoNeedsImages = styled.div`
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 650px) {
    display: none;
  }
`

export const WhoNeedsDescription = styled.div`
  flex-direction: column;
`

export const Description = styled.div`
  max-width: 540px;
  align-items: center;

  div {
    width: 24px;
    height: 24px;
    position: absolute;
  }

  h2 {
    font-size: 16px;
    margin-left: 32px;

    @media (max-width: 560px) {
      font-size: 14px;
    }

    @media (max-width: 400px) {
      font-size: 13px;
    }
  }

  & + div {
    margin-top: 20px;
  }

  @media (max-width: 560px) {
    max-width: 460px;
  }

  @media (max-width: 500px) {
    max-width: 360px;
  }
`