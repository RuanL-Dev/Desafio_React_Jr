import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import styled from 'styled-components'

import ContainerPage from '../src/components/layout/ContainerPage'
import Body from '../src/components/layout/Body'
import UseContainer from '../src/components/layout/UserContainer'
import ButtonAdd from '../src/components/button/ButtonAdd'
import SearchInput from '../src/components/Input/SearchInput'
import CardsAds from '../src/components/cards/CardsAds'

const StyledText = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  padding-top: 10px;
  color: ${(props) => props.theme.WhiteBackground};
`


function HomePage() {
  const [newAds, setnewAds] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const handleClick = () => {
    setLoading(true)
    router.push('/')
  }
  return (
    <Body>
      <UseContainer />
      <ContainerPage>
        <StyledText>Meus anúncios</StyledText>
        <SearchInput
          type="text"
          name="search"
          placeholder="buscar"
          onChange={(event) => setnewAds(event.target.value.toUpperCase())}
        />
        <CardsAds />
      </ContainerPage>
    </Body>
  )
}

export default HomePage
