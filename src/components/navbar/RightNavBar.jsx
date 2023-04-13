import styled from 'styled-components'

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: end;
  font-weight: 700;
  font-size: 23px;
  gap: 20px;
  color: ${(props) => props.theme.WhiteBackground};

  li {
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.WhiteBackground};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  li:hover:after {
    width: 100%;
  }

  @media (max-width: 502px) {
    flex-flow: column;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.WhiteBackground};
    position: fixed;
    backdrop-filter: blur(14px);
    opacity: 0.8;
    z-index: 10;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 50vh;
    width: 300px;
    gap: 30px;
    font-size: 35px;
    transition: transform 0.3s ease-in-out;
  }
`

const RightNavBar = ({ open }) => {
  const handleClick = () => {
    !open
  }

  return (
    <StyledUl open={open}>
      <li onClick={handleClick}>Home</li>
      <li onClick={handleClick}>Cadastros</li>
      <li onClick={handleClick}>Meus Anúncios</li>
      <li onClick={handleClick}>Relatórios</li>
    </StyledUl>
  )
}

export default RightNavBar