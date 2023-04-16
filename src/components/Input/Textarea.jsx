import styled from 'styled-components'

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  border: 2px solid rgba(239, 239, 239, 0.6);
  border-radius: 50px;
  background-color: ${(props) => props.theme.WhiteBackground};
  color: ${(props) => props.theme.background};
  font-family: 'Inter', sans-serif;
  font-size: 25px;
`

export default Textarea
