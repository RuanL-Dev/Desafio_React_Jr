import { SlMagnifier } from 'react-icons/sl'

import styled from 'styled-components'

const IconImageContainer = styled.div`
  padding: 10px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInput = styled.input`
  width: 730px;
  height: 60px;
  left: 228px;
  top: 132px;
  background-color: ${(props) => props.theme.secondary};
  padding: 10px 50px;
  padding-left: 80px;
  border-radius: 100px;
  border: none;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 30px;
  color: ${(props) => props.theme.WhiteBackground};

  :focus {
    box-shadow: inset 0px 5px 10px;
  }
  ::placeholder {
    color: ${(props) => props.theme.WhiteBackground};
  }

  @media (min-width: 950px) {
    width: 850px;
  }
`

const ContainerInput = styled.div`
  position: relative;
`
const StyledIconPosition = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
`

const SearchInput = ({ ...props }) => {
  return (
    <>
      <IconImageContainer>
        <ContainerInput>
          <StyledInput type="text" placeholder="Buscar" {...props}></StyledInput>
          <StyledIconPosition>
            <SlMagnifier />
          </StyledIconPosition>
        </ContainerInput>
      </IconImageContainer>
    </>
  )
}

export default SearchInput
