import styled from 'styled-components'

import Burguer from './Burguer'

const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondBackgroundColor};

  @media (max-width: 502px) {
    width: 100%;
    background-color: ${(props) => props.theme.secondBackgroundColor};
  }
`

export default function Navbar() {
  return (
    <Container>
      <Burguer />
    </Container>
  )
}
