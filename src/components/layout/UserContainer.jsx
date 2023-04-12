import styled from 'styled-components'

import GeneralButton from '../button/GeneralButton'
import IconImage from '../iconImage/IconImage'

const StyledMainContainer = styled.div`
  background-color: ${(props) => props.theme.secondBackgroundColor};
  margin-top: 10vh;
  width: 900px;
  min-height: 15vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
  position: relative;
`

const StyledText = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 60px;
  color: ${(props) => props.theme.textColor};
`
const StyledContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 95%;
  margin-top: 20px;
`
const StyledImage = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.background};
`
const StyledPositionImage = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
`

const UseContainer = () => {
  return (
    <StyledMainContainer>
      <StyledImage>
        <StyledPositionImage>
          <IconImage imageName="userPicture" type="svg" size="60px"/>
        </StyledPositionImage>
      </StyledImage>
      <StyledText>Olá, @Usuário!</StyledText>
      <StyledContainerButton>
        <GeneralButton>Meus anúncios</GeneralButton>
        <GeneralButton>Cadastrar</GeneralButton>
      </StyledContainerButton>
    </StyledMainContainer>
  )
}

export default UseContainer
