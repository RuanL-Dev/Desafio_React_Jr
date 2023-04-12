import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import styled from 'styled-components'

import ContainerPage from '../src/components/layout/ContainerPage'
import Body from '../src/components/layout/Body'
import ButtonAdd from '../src/components/button/ButtonAdd'
import SearchInput from '../src/components/Input/SearchInput'

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
      <ContainerPage>
        <div>Hello World!</div>
        <SearchInput
          type="text"
          name="search"
          placeholder="buscar"
          onChange={(event) => setnewAds(event.target.value.toUpperCase())}
        />
        <ButtonAdd loading={loading} type="submit" onClick={handleClick}>
          ADICIONAR
        </ButtonAdd>
      </ContainerPage>
    </Body>
  )
}

export default HomePage
