import styled from 'styled-components'

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'

import IconImage from '../src/components/iconImage/IconImage'
import { MdAddBox } from 'react-icons/md'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

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
const VerticalToolBar = styled.div`
  position: absolute;
  width: 52px;
  height: 100vh;
  border-right: 1px solid #dddddd;
  z-index: -1;
`
const StyledCardIcons = styled.div`
  cursor: pointer;
  color: #078aa3;
  font-size: 38px;
  border: none;
  padding: 60px 7px;
`
const GraphicContainer = styled.div`
  padding: 20px;
  margin-left: 100px;
  width: 80%;
`

function Reports() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        label: '369',
        data: [3, 6, 9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  }

  const options = {}
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
        <VerticalToolBar>
          <StyledCardIcons>
            <MdAddBox />
          </StyledCardIcons>
        </VerticalToolBar>
      </Container>
      <GraphicContainer>
        <Bar data={data} options={options}></Bar>
      </GraphicContainer>
    </>
  )
}

export default Reports
