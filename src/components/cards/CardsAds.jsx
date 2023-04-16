import { useState } from 'react'
import { useSWRConfig } from 'swr'
import axios from 'axios'

import styled from 'styled-components'
import ProductCardsEdit from './ProductCardsEdit'

import { GoTrashcan } from 'react-icons/go'
import { FaRegEdit } from 'react-icons/fa'
import { BsBookmarkHeart } from 'react-icons/bs'

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.WhiteBackground};
  width: 800px;
  height: 260px;
  padding: 10px 30px;
  border-radius: 20px;
  margin: 10px 0;
  text-align: center;
  box-shadow: ${(props) => props.liked};
  color: white;
  transition: 0.4s;
`
const StyledCardText = styled.p`
  font-size: 18px;
  line-height: 33px;
  color: ${(props) => props.theme.background};
  text-align: center;
  overflow: hidden;
`
const ContainerCardIcon = styled.div`
  display: flex;
  margin-left: 670px;
  gap: 10px;
`
const StyledCardIcons = styled.div`
  cursor: pointer;
  color: #0d0c0c;
  font-size: 18px;
  border: none;
`

export default function CardsAds({ code, title, price, date, description, id, isLiked, liked }) {
  const [editCard, setEditCard] = useState(false)
  const { mutate } = useSWRConfig()

  const handleEdit = async () => {
    setEditCard(!editCard)
    mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/products/indexProducts`)
  }

  const handleLike = async () => {
    try {
      const { status } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/indexProducts`,
        {
          _id: id,
          Code: code,
          Title: title,
          Price: price,
          Date: date,
          Description: description,
          isLiked: !isLiked
        }
      )
      if (status === 201) {
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/products/indexProducts`)
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/indexProducts`,
        {
          data: {
            id
          }
        }
      )
      if (response.status === 200)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/products/indexProducts`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <CardContainer liked={liked}>
        <ContainerCardIcon>
          <StyledCardIcons>
            <FaRegEdit onClick={handleEdit} />
          </StyledCardIcons>
          <StyledCardIcons>
            <GoTrashcan onClick={handleDelete} />
          </StyledCardIcons>
          <StyledCardIcons>
            <BsBookmarkHeart onClick={handleLike} />
          </StyledCardIcons>
        </ContainerCardIcon>
        {!editCard && (
          <>
            <StyledCardText>{code}</StyledCardText>
            <StyledCardText>{title}</StyledCardText>
            <StyledCardText>{price}</StyledCardText>
            <StyledCardText>{date}</StyledCardText>
            <StyledCardText>{description}</StyledCardText>
          </>
        )}
        {editCard && (
          <ProductCardsEdit
            id={id}
            code={code}
            title={title}
            price={price}
            date={date}
            description={description}
            onSave={handleEdit}
          />
        )}
      </CardContainer>
    </>
  )
}

CardsAds.defaultProps = {
  liked: '10px 10px 10px 5px rgba(231, 217, 217, 0.5)'
}
