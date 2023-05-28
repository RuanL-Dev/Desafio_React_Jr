import { useRouter } from 'next/router'

import styled from 'styled-components'

import IconImage from '../iconImage/IconImage'

const StyledLogo = styled.div`
  width: 11vh;
  position: absolute;
  left: 25px;
  cursor: pointer;
`

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
    height: 45vh;
    width: 350px;
    gap: 40px;
    font-size: 45px;
    transition: transform 0.3s ease-in-out;
  }
`

const RightNavBar = ({ open }) => {
  const router = useRouter()
  const handleClickToNewProduct = () => {
    !open
    router.push('/newProduct')
  }
  const handleClicktoMyAdds = () => {
    !open
    router.push('/')
  }
  const handleClickToReports = () => {
    !open
    router.push('/reports')
  }

  return (
    <>
      <StyledLogo onClick={handleClicktoMyAdds}>
        <IconImage imageName="VendiTudo" type="svg" size="170px" />
      </StyledLogo>
      <StyledUl open={open}>
        <li onClick={handleClicktoMyAdds}>Home</li>
        <li onClick={handleClickToNewProduct}>Cadastrar</li>
        <li onClick={handleClicktoMyAdds}>Meus Anúncios</li>
        <li onClick={handleClickToReports}>Relatórios</li>
      </StyledUl>
    </>
  )
}

export default RightNavBar
