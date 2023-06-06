/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

import styled from 'styled-components'

import Graphic from './Graphic'

const LayoutGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50%;
  width: 100%;
  padding-left: 30px;

  > div {
    padding: 0;
    margin: 0;
  }
`
const draggingCard = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: 5,
  margin: '7px',
  background: isDragging ? 'pink' : '#ffffff',
  ...draggableStyle
})

function DragDrop({ newGraphic }) {
  console.log(newGraphic)
  const [board, setBoard] = useState([
    {
      id: uuidv4(),
      name: newGraphic
    }
  ])
  console.log(board)
  useEffect(() => {
    if (!board.some((chart) => chart.name === newGraphic)) {
      setBoard((prevBoard) => [...prevBoard, { id: uuidv4(), name: newGraphic }])
    }
  }, [newGraphic])
  const handleDragDrop = (results) => {
    const { source, destination, type } = results

    if (!destination) return

    if (source.droppableId === destination.droppableId && source.index === destination.index) return

    if (type === 'group') {
      const reorderedBoard = [...board]
      const sourceIndex = source.index
      const destinationIndex = destination.index

      const [removedGraphic] = reorderedBoard.splice(sourceIndex, 1)
      reorderedBoard.splice(destinationIndex, 0, removedGraphic)

      return setBoard(reorderedBoard)
    }
  }

  return (
    <>
      <DragDropContext onDragEnd={handleDragDrop}>
        <Droppable droppableId={newGraphic} type="group">
          {(provided) => (
            <LayoutGridContainer {...provided.droppableProps} ref={provided.innerRef}>
              {board?.map((item, index) => {
                return (
                  <Draggable draggableId={item.id} key={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={draggingCard(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <Graphic />
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </LayoutGridContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default DragDrop
