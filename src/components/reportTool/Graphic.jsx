import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import styled from 'styled-components'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const MainContainerGraphic = styled.div`
  display: flex;
  width: 412px;
  height: 332px;
  transform: translate(10px, 10px);
  transition-property: transform;
  transition: all 200ms ease;
`

const ContainerCard = styled.div`
  background: #fff;
  margin: 0 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

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
  width: 400px;
  height: 190px;
  margin-left: 10px;
`

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

function Graphic() {
  return (
    <>
      <MainContainerGraphic>
        <ContainerCard>
          <StyledCard>
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
          </StyledCard>
        </ContainerCard>
      </MainContainerGraphic>
    </>
  )
}

export default Graphic
