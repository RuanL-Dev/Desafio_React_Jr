import { useState } from 'react'
import { useSWRConfig } from 'swr'
import axios from 'axios'

import styled from 'styled-components'
import ProductCardsEdit from './ProductCardsEdit'
import GeneralButton from '../button/GeneralButton'

import { GoTrashcan } from 'react-icons/go'
import { FaRegEdit } from 'react-icons/fa'
import { BsBookmarkHeart } from 'react-icons/bs'

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.WhiteBackground};
  width: auto;
  height: auto;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 10px 20px;
  text-align: center;
  box-shadow: ${(props) => props.liked};
  color: white;
  transition: 0.4s;

  @media (max-width: 940px) {
    padding: 15px 5px;
  }

  @media (min-width: 950px) {
    width: 95%;
    position: relative;
  }
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
  margin-left: 750px;
  gap: 10px;

  @media (min-width: 950px) {
    position: absolute;
    right: 10px;
  }
`
const StyledCardIcons = styled.div`
  cursor: pointer;
  color: #0d0c0c;
  font-size: 18px;
  border: none;
`

export default function CardsAds({ code, title, price, date, description, id, isLiked, liked }) {
  const [editCard, setEditCard] = useState(false)
  const [showDetails, setshowDetails] = useState(false)
  const { mutate } = useSWRConfig()

  const handleEdit = async () => {
    setshowDetails(false)
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

  const handleClickButton = () => {
    setshowDetails(!showDetails)
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
        {!editCard && !showDetails && (
          <>
            <StyledCardText>{code}</StyledCardText>
            <StyledCardText>{title}</StyledCardText>
            <GeneralButton type="submit" onClick={handleClickButton}>
              Detalhes
            </GeneralButton>
          </>
        )}
        {showDetails && (
          <>
            <StyledCardText>{code}</StyledCardText>
            <StyledCardText>{title}</StyledCardText>
            <StyledCardText>{price}</StyledCardText>
            <StyledCardText>{date}</StyledCardText>
            <StyledCardText>{description}</StyledCardText>
            <GeneralButton type="submit" onClick={handleClickButton}>
              Detalhes
            </GeneralButton>
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
