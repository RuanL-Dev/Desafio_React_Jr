import styled from 'styled-components'
import IconImage from '../iconImage/IconImage'

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.buttonColor};
  color: rgba(2, 2, 2, 0.7);
  width: 220px;
  height: 55px;
  border-radius: 25px;
  border: 0;
  font-size: 20px;
  transition: 0.3s;
  position: relative;
  text-align: center;

  :after {
    content: '';
    border-radius: 50px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    border-top: 1px solid violet;
    border-bottom: 1px solid violet;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }
  :before {
    content: '';
    border-radius: 50px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    border-left: 1px solid violet;
    border-right: 1px solid violet;
    transform: scaleY(0);
    transition: transform 0.2s ease-in-out;
  }
  :hover:before {
    transform: scaleY(1);
  }

  :hover:after {
    transform: scaleX(1);
  }
  ${(props) => !props.disabled && 'cursor: pointer;'}
  :hover {
    background-color: ${(props) => props.theme.buttonHover};
    box-shadow: inset 0px 5px 10px;
  }

  :disabled {
    background-color: ${(props) => props.theme.disabled};
  }
`

const GeneralButton = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButton disabled={disabled || loading} {...props}>
      {loading && <IconImage imageName="loading" type="svg" size="25px" />}
      {!loading && children}
    </StyledButton>
  )
}

export default GeneralButton
