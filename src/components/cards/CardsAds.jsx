import { useState } from 'react'
import { useSWRConfig } from 'swr'
import axios from 'axios'

import styled from 'styled-components'

import { GoTrashcan } from 'react-icons/go'
import { FaRegEdit } from 'react-icons/fa'
import { BsBookmarkHeart } from 'react-icons/bs'
import CardsIcon from './CardsIcon'

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.WhiteBackground};
  position: relative;
  width: 800px;
  height: 210px;
  padding: 10px 10px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3);
  color: white;
  transition: 0.4s;
`
const StyledCardText = styled.p`
  font-family: 'Inter';
  font-size: 25px;
  line-height: 33px;
  color: ${(props) => props.theme.background};
  text-align: center;
`
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
export default function CardsAds() {
  return (
    <>
      <CardContainer>
        <CardsIcon />
        {
          <>
            <StyledCardText>0ARBAN</StyledCardText>
            <StyledCardText>Placa de vídeo - RTX 3060</StyledCardText>
            <StyledCardText>R$ - 500,00</StyledCardText>
            <StyledCardText>Data do cadastro: 12/04/2023</StyledCardText>
            <StyledCardText>Usada - Precisando trocar a pasta térmica</StyledCardText>
          </>
        }
      </CardContainer>
      <CardContainer>
        <CardsIcon />
        {
          <>
            <StyledCardText>0ARBAN</StyledCardText>
            <StyledCardText>Placa de vídeo - RTX 3060</StyledCardText>
            <StyledCardText>R$ - 500,00</StyledCardText>
            <StyledCardText>Data do cadastro: 12/04/2023</StyledCardText>
            <StyledCardText>Usada - Precisando trocar a pasta térmica</StyledCardText>
          </>
        }
      </CardContainer>
    </>
  )
}
