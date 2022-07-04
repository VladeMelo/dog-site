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

  strong {
    color: #064EF8;
  }
`

export const Roadmap = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-top: 52px;
`

export const BulletPointContainer = styled.div``

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
    }

    &:nth-child(3) {
      margin-top: 20px;
    }
  }
`