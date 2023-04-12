import styled from 'styled-components'

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

export default function Body({ children }) {
  return <StyledBody>{children}</StyledBody>
}
