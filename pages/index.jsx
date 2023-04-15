import { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import styled from 'styled-components'

import Navbar from '../src/components/navbar/Navbar'
import ContainerPage from '../src/components/layout/ContainerPage'
import Body from '../src/components/layout/Body'
import UseContainer from '../src/components/layout/UserContainer'
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

const fetcher = (url) => axios.get(url).then((res) => res.data)

function HomePage() {
  const [products, setproducts] = useState('')
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/products/indexProducts`, fetcher)

  const productsIncludes = (data) => {
    return data.toUpperCase().includes(products.toUpperCase())
  }

  const search = (data) => {
    return data?.filter(
      (post) =>
        productsIncludes(post.Code) ||
        productsIncludes(post.Title) ||
        productsIncludes(post.Price) ||
        productsIncludes(post.Date) ||
        productsIncludes(post.Description)
    )
  }

  return (
    <Body>
      <Navbar />
      <UseContainer />
      <ContainerPage>
        <SearchInput
          type="text"
          name="search"
          placeholder="buscar"
          onChange={(event) => setproducts(event.target.value.toUpperCase())}
        />
        <StyledText>Favoritos</StyledText>
        {search(data)
          ?.filter((p) => p.isLiked)
          .map((post) => (
            <CardsAds
              key={post._id}
              code={post.Code}
              title={post.Title}
              price={post.Price}
              date={post.Date}
              description={post.Description}
              id={post._id}
              isLiked={post.isLiked}
              liked="10px 10px 10px 5px rgba(226, 214, 161, 0.5)"
            />
          ))}
        <StyledText>Meus anúncios</StyledText>
        {search(data)
          ?.filter((p) => !p.isLiked)
          .map((post) => (
            <CardsAds
              key={post._id}
              code={post.Code}
              title={post.Title}
              price={post.Price}
              date={post.Date}
              description={post.Description}
              id={post._id}
              isLiked={post.isLiked}
            />
          ))}
      </ContainerPage>
    </Body>
  )
}

export default HomePage
