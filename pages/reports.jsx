import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import styled from 'styled-components'

import IconImage from '../src/components/iconImage/IconImage'
import { MdAddBox } from 'react-icons/md'
import DragDrop from '../src/components/reportTool/DragDrop'

const Container = styled.div`
  display: flex;
  position: relative;
  gap: 30px;
  height: 52px;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
`
const StyledContainerNavbar = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  width: 100%;
  z-index: 100;
`
const StyledNavbarImages = styled.div`
  position: absolute;
  right: 0;
`
const StyledImages = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const StyledTitle = styled.h1`
  color: #078aa3;
  font-size: 27px;
  line-height: 50px;
  font-family: 'Open Sans', sans-serif;
  margin-left: 15px;
  cursor: pointer;
`
const MapStoreBody = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`
const MapBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const MapBorderLayout = styled.div`
  display: flex;
  flex: 1 1 0%;
  overflow-y: auto;
`
const MapBorderLayoutContent = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #dddddd;
`
const DashboardBodyContainer = styled.div`
  overflow-y: auto;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`
const VerticalToolBar = styled.div`
  position: absolute;
  width: 52px;
  min-height: 100vh;
  border-right: 1px solid #dddddd;
  z-index: 1;
  order: -1;
`
const StyledCardIcons = styled.button`
  cursor: pointer;
  color: #078aa3;
  background-color: transparent;
  font-size: 38px;
  border: none;
  padding: 10px 7px;
`

function Reports() {
  const [counter, setCounter] = useState(0)
  const [newGraphic, setNewGraphic] = useState('')

  const handleClick = () => {
    const newCounter = counter + 1
    const newGraphicName = `chart${newCounter}`

    setCounter(newCounter)
    setNewGraphic(newGraphicName)
  }

  return (
    <>
      <Container>
        <StyledContainerNavbar>
          <StyledTitle>MapStore Dashboard Editor</StyledTitle>
          <StyledNavbarImages>
            <StyledImages>
              <IconImage imageName="country" type="png" size="15px" height="10px" />
              <IconImage imageName="profile" type="png" size="50px" />
            </StyledImages>
          </StyledNavbarImages>
        </StyledContainerNavbar>
      </Container>
      <MapStoreBody>
        <MapBody>
          <MapBorderLayout>
            <MapBorderLayoutContent>
              <DashboardBodyContainer>
                <VerticalToolBar>
                  <StyledCardIcons onClick={handleClick}>
                    <MdAddBox />
                  </StyledCardIcons>
                </VerticalToolBar>
                <DndProvider backend={HTML5Backend}>
                  <DragDrop newGraphic={newGraphic} />
                </DndProvider>
              </DashboardBodyContainer>
            </MapBorderLayoutContent>
          </MapBorderLayout>
        </MapBody>
      </MapStoreBody>
    </>
  )
}

export default Reports
