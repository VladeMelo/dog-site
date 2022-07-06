import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100%;
  background: #00A9FF;
  justify-content: center;
  align-items: center;
`

export const InfoContainer = styled.div`
  max-width: 900px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px 4px;
`

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  color: #F8F8F8;

  strong {
    color: #F87806;
  }

  @media (max-width: 450px) {
    font-size: 26px;
  }
`

export const Info = styled.div`
  border: 1px solid #F8F8F8;
  align-items: center;
  height: 380px;
  padding: 52px;

  div {
    flex-direction: column;
    margin-left: 60px;
    max-width: 600px;

    h1 {
      color: #F8F8F8;
      font-size: 28px;

      @media (max-width: 700px) {
        font-size: 24px;
      }

      @media (max-width: 580px) {
        font-size: 22px;
      }

      @media (max-width: 580px) {
        font-size: 20px;
      }
    }

    h2 {
      margin-top: 12px;
      color: #F8F8F8;
      font-size: 20px;

      @media (max-width: 700px) {
        font-size: 16px;
      }

      @media (max-width: 580px) {
        font-size: 14px;
      }

      @media (max-width: 400px) {
        font-size: 12px;
      }
    }
  }

  & + div {
    border-top: none;
  }

  &:nth-child(2) {
    margin-top: 60px;
    border-radius: 44px 44px 0 0;
  }

  &:last-child {
    border-radius: 0 0 44px 44px;
  }

  @media (max-width: 800px) {
    padding: 16px;
  }

  @media (max-width: 700px) {
    height: 300px;
  }

`

export const InfoNumber = styled.h1`
  color: #F8F8F8;
  font-size: 340px;

  @media (max-width: 700px) {
    font-size: 280px;
  }

  @media (max-width: 580px) {
    font-size: 240px;
  }

  @media (max-width: 500px) {
    font-size: 120px;
  }
`