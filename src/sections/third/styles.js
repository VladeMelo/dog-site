import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100%;
  background: linear-gradient(288.78deg, rgba(248, 183, 50, 0.5) -8.22%, #F87806 100%);
  justify-content: center;
  align-items: center;
`

export const RoadmapContainer = styled.div`
  max-width: 900px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 36px 4px;
`

export const RoadmapTitle = styled.h2`
  font-size: 36px;
  text-align: center;

  @media (max-width: 750px) {
    font-size: 30px;
  }

  @media (max-width: 485px) {
    font-size: 24px;
  }

  strong {
    color: #064EF8;
  }
`

export const Roadmap = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-top: 52px;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`

export const BulletPointContainer = styled.div``

export const DogImageContainer = styled.div`
  width: 800px;

  @media (max-width: 1000px) {
    width: 600px;
  }

  @media (max-width: 850px) {
    margin-top: 32px;
    width: 360px;
  }

  @media (max-width: 500px) {
    width: 240px;
  }
`

export const BulletPointTextContainer = styled.div`
  margin-left: 8px;
  flex-direction: column;
  justify-content: space-between;
  height: 640px;
  
  h2 {
    font-size: 20px;
    position: relative;

    &:nth-child(1) {
      margin-top: -4px;

      @media (max-width: 850px) {
        margin-top: 0px;
      }
    }

    &:nth-child(3) {
      margin-top: 20px;

      @media (max-width: 850px) {
        margin-top: 48px;
      }

      @media (max-width: 500px) {
        margin-top: 60px;
      }
    }

    &:nth-child(2) {
      @media (max-width: 850px) {
        margin-top: 20px;
      }

      @media (max-width: 500px) {
        margin-top: 10px;
      }
    }

    @media (max-width: 750px) {
      font-size: 16px;
    }

    @media (max-width: 630px) {
      font-size: 14px;
    }

    @media (max-width: 496px) {
      font-size: 12px;
    }
  }
`