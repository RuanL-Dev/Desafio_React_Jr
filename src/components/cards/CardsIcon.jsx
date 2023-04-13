import styled from 'styled-components'

import { GoTrashcan } from 'react-icons/go'
import { FaRegEdit } from 'react-icons/fa'
import { BsBookmarkHeart } from 'react-icons/bs'

const ContainerCardIcon = styled.div`
  display: flex;
  margin-left: 690px;
  gap: 10px;
  position: absolute;
`
const StyledCardIcons = styled.div`
  cursor: pointer;
  color: #0d0c0c;
  font-size: 18px;
  border: none;
`

export default function CardsIcon() {
  return (
    <ContainerCardIcon>
      <StyledCardIcons>
        <FaRegEdit />
      </StyledCardIcons>
      <StyledCardIcons>
        <GoTrashcan />
      </StyledCardIcons>
      <StyledCardIcons>
        <BsBookmarkHeart />
      </StyledCardIcons>
    </ContainerCardIcon>
  )
}
