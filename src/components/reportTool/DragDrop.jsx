import { useDrop } from 'react-dnd'
import { useState, useEffect } from 'react'

import styled from 'styled-components'

import Graphic from './Graphic'

const LayoutGridContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  transition: height 200ms ease;
  padding-left: 53px;
`

const MainContainerGraphic = styled.div`
  display: flex;
  width: 412px;
  height: 332px;
  touch-action: none;
  transform: translate(0px, 10px);
  transition-property: transform;
  transition: all 200ms ease;
`
const ContainerCard = styled.div`
  background: #fff;
  overflow: visible;
  height: 100%;
  flex: 1;
  margin: 0 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

function DragDrop({ newGraphic }) {
  console.log(newGraphic)
  const [board, setBoard] = useState([{ id: newGraphic }])
  console.log(board)
  useEffect(() => {
    if (newGraphic !== '') {
      if (!board.some((chart) => chart.id === newGraphic)) {
        setBoard((prevBoard) => [...prevBoard, { id: newGraphic }])
      }
    }
  }, [board, newGraphic])

  // eslint-disable-next-line no-unused-vars
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'graphic',
    drop: (item) => addGraphicToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const generateUniqueId = () => {
    const timestamp = new Date().getTime()
    const random = Math.floor(Math.random() * 10000)
    return `${timestamp}-${random}`
  }

  const addGraphicToBoard = (id) => {
    const chartIds = board.filter((chart) => id === chart.id)
    if (chartIds.length === 0) {
      const newChart = { id: generateUniqueId() }
      setBoard((prevBoard) => [...prevBoard, newChart])
    }
  }
  if (newGraphic === '') {
    return null
  }

  return (
    <>
      <LayoutGridContainer ref={drop}>
        <MainContainerGraphic>
          {board?.map((chart) => {
            if (chart.id !== '') {
              return (
                <ContainerCard key={chart.id}>
                  <Graphic id={chart.id} />
                </ContainerCard>
              )
            }
            return null
          })}
        </MainContainerGraphic>
      </LayoutGridContainer>
    </>
  )
}

export default DragDrop
