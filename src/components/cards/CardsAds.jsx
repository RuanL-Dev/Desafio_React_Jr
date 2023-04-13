import styled from 'styled-components'

import CardsIcon from './CardsIcon'

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.WhiteBackground};
  position: relative;
  width: 800px;
  height: 210px;
  padding: 10px 10px;
  border-radius: 20px;
  margin: 10px 0;
  text-align: center;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3);
  color: white;
  transition: 0.4s;
`
const StyledCardText = styled.p`
  font-size: 20px;
  line-height: 33px;
  color: ${(props) => props.theme.background};
  text-align: center;
`
export default function CardsAds() {
  return (
    <>
      <CardContainer>
        <CardsIcon />
        {
          <>
            <StyledCardText>0ARBAN</StyledCardText>
            <StyledCardText>Placa de vídeo - RTX 3060</StyledCardText>
            <StyledCardText>R$ - 500,00</StyledCardText>
            <StyledCardText>Data do cadastro: 12/04/2023</StyledCardText>
            <StyledCardText>Usada - Precisando trocar a pasta térmica</StyledCardText>
          </>
        }
      </CardContainer>
      <CardContainer>
        <CardsIcon />
        {
          <>
            <StyledCardText>0ARBAN</StyledCardText>
            <StyledCardText>Placa de vídeo - RTX 3060</StyledCardText>
            <StyledCardText>R$ - 500,00</StyledCardText>
            <StyledCardText>Data do cadastro: 12/04/2023</StyledCardText>
            <StyledCardText>Usada - Precisando trocar a pasta térmica</StyledCardText>
          </>
        }
      </CardContainer>
    </>
  )
}
