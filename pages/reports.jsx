import styled from 'styled-components'

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
//import { Doughnut } from 'react-chartjs-2'

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
const LayoutGridContainer = styled.div`
  height: 352px;
  position: relative;
  transition: height 200ms ease;
`

const MainContainerGraphic = styled.div`
  width: 412px;
  height: 332px;
  position: absolute;
  touch-action: none;
  transform: translate(10px, 10px);
  transition-property: transform;
  transition: all 200ms ease;
`
const ContainerCard = styled.div`
  background: #fff;
  overflow: visible;
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0 60px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const GraphicContainer = styled.div``

const GraphicTitleContainer = styled.div`
  display: flex;
  width: calc(100% - 40px);
  height: 52px;
  margin: 0 20px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
`
const GraphicTitleText = styled.h2`
  font-family: 'Open Sans', sans-serif;
  -webkit-text-size-adjust: 100%;
  font-size: 15px;
  color: #333333;
`
const GraphicBorderLayout = styled.div`
  display: flex;
  flex: 1 1 0%;
  overflow-y: auto;
`
const GraphicBorderLayoutContent = styled.div`
  flex: 1 1 0%;
  border: none;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`
const GraphicWidgetBody = styled.div`
  height: 100%;
  position: relative;
`
const GraphicWrapperChart = styled.div`
  position: relative;
  cursor: default;
  width: 372px;
  height: 260px;
  margin-left: 10px;
`

function Reports() {
  const data = {
    labels: [
      'piemonte',
      'valle daosta',
      'lombardia',
      'trentino-alto',
      'veneto',
      'friuli venezia',
      'liguria',
      'emilia-romagna',
      'toscana',
      'umbria',
      'marche',
      'lazio',
      'abruzzo',
      'molise',
      'campania',
      'puglia',
      'basilicata',
      'calabria',
      'sicilia',
      'sardegna'
    ],
    datasets: [
      {
        label: 'Regions of Italy',
        data: [
          25394103941, 3259040961, 23862698613, 13608018378, 18405499479, 7864293935, 5415464956,
          22451465521, 22984426772, 8464007915, 9401177971, 17227617801, 10829102919, 4461149496,
          13663989800, 19537077223, 10073260222, 15216683867, 25824775591, 24094165311
        ],
        backgroundColor: 'rgb(8, 136, 161)',
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      rectangle: {
        borderWidth: 5,
        borderColor: 'black'
      }
    }
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
        <VerticalToolBar>
          <StyledCardIcons>
            <MdAddBox />
          </StyledCardIcons>
        </VerticalToolBar>
      </Container>
      <LayoutGridContainer>
        <MainContainerGraphic>
          <ContainerCard>
            <StyledCard>
              <GraphicContainer>
                <GraphicTitleContainer>
                  <GraphicTitleText>Regions of Italy</GraphicTitleText>
                </GraphicTitleContainer>
                <GraphicBorderLayout>
                  <GraphicBorderLayoutContent>
                    <GraphicWidgetBody>
                      <GraphicWrapperChart>
                        <Bar data={data} options={options}></Bar>
                      </GraphicWrapperChart>
                    </GraphicWidgetBody>
                  </GraphicBorderLayoutContent>
                </GraphicBorderLayout>
              </GraphicContainer>
            </StyledCard>
          </ContainerCard>
        </MainContainerGraphic>
      </LayoutGridContainer>
    </>
  )
}

export default Reports
