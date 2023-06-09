import styled from 'styled-components'

const StyledMainContainer = styled.div`
  background-color: ${(props) => props.theme.secondBackgroundColor};
  width: 95%;
  min-height: 100vh;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
`

const ContainerPage = ({ children }) => <StyledMainContainer>{children}</StyledMainContainer>

export default ContainerPage
