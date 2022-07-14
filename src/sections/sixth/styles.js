import styled from 'styled-components'

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  flex-direction: column;
  padding: 40px 4px;
`

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;

  strong {
    color: #064EF8;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }

  @media (max-width: 525px) {
    font-size: 20px;
  }
`

export const ModuleContainer = styled.div`
  flex-direction: column;
  margin-top: 60px;
`

export const ModuleIntroductionContainer = styled.div`
  align-items: center;
`

export const RedLine = styled.div`
  height: 72px;
  background: ${props => 
                  props.isBlue 
                    ? '#064EF8' 
                    : props.isGold
                      ? '#F89706'
                      : '#EE1F3E'
              };
  width: 4px;
  border-radius: 8px;

  box-shadow: 0px 0px 12px 1px ${props => 
                                  props.isBlue 
                                    ? '#064EF8' 
                                    : props.isGold
                                      ? '#F89706'
                                      : '#EE1F3E'
                                };
`

export const ModuleIntroduction = styled.div`
  flex-direction: column;
  margin-left: 20px;

  h2 {
    font-size: 22px;

    @media (max-width: 525px) {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 4px;
    font-size: 26px;
    text-transform: uppercase;

    @media (max-width: 525px) {
      font-size: 20px;
    }
  }
`

export const ModuleDescription = styled.h2`
  font-size: 18px;
  margin-top: 12px;

  @media (max-width: 525px) {
    font-size: 14px;
  }
`

export const ModuleBulletPoints = styled.div`
  margin-left: 20px;
  margin-top: 12px;
  flex-direction: column;
`

export const BulletPoint = styled.div`
  position: relative;

  div {
    height: 36px;
    width: 36px;
    position: absolute;
    top: -8px;
  }

  h2 {
    margin-left: 40px;
    font-size: 16px;

    @media (max-width: 525px) {
      font-size: 12px;
    }
  }

  & + div {
    margin-top: 16px;
  }
`

export const BonusTitle = styled.h1`
  font-size: 36px;
  color: white;
  text-transform: uppercase;
  margin-top: 68px;
  align-self: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -4%;
    left: -4%;
    width: 108%;
    height: 108%;
    border-radius: 6px;
    background: #F89706;
    z-index: -1;
    box-shadow: 0px 0px 12px 1px #F89706;
  }
`

export const LimitTitle = styled.h1`
  font-size: 36px;
  color: #EE1F3E;
  text-transform: uppercase;
  margin-top: 68px;
  align-self: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: calc(15%);
    width: 70%;
    height: 2px;
    background: #EE1F3E;
  }

  @media (max-width: 400px) {
    font-size: 30px;
  }
`

export const LimitContainer = styled.div`
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

      @media (max-width: 500px) {
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

    @media (max-width: 450px) {
      max-width: 380px;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }

  @media (max-width: 850px) {
    margin-top: 10px;
  }
`

export const LimitImageContainer = styled.div`
  width: 320px;
  height: 320px;
`

export const DecisionTitle = styled.h1`
  font-size: 36px;
  color: #F89706;
  text-transform: uppercase;
  margin-top: 68px;
  align-self: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: calc(15%);
    width: 70%;
    height: 2px;
    background: #F89706;
  }

  @media (max-width: 400px) {
    font-size: 30px;
  }
`

export const DecisionContainer = styled.div`
  align-self: center;
  margin-top: 40px;
  max-width: 600px;

  h2 {
    font-size: 20px;

    strong {
      font-size: 22px;

      @media (max-width: 650px) {
        font-size: 18px;
      }

      @media (max-width: 500px) {
        font-size: 16px;
      }
    }

    @media (max-width: 650px) {
      font-size: 16px;
    }

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }

  @media (max-width: 650px) {
      max-width: 500px;
    }

  @media (max-width: 450px) {
    max-width: 380px;
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

  a {
    text-decoration: inherit;
    color: inherit;

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
  }
`