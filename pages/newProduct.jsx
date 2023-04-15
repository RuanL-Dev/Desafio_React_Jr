import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'

import styled from 'styled-components'

import Navbar from '../src/components/navbar/Navbar'
import ContainerPage from '../src/components/layout/ContainerPage'
import Body from '../src/components/layout/Body'
import UseContainer from '../src/components/layout/UserContainer'
import Input from '../src/components/Input/Input'
import GeneralButton from '../src/components/button/GeneralButton'

const StyledText = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  padding-top: 10px;
  color: ${(props) => props.theme.WhiteBackground};
`

const FormContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 15vh;
  position: relative;
`
const ContainerButtonSave = styled.div`
  position: absolute;
  right: 250px;
  bottom: -70px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  margin-right: 100px;
`

const StyledInputDescription = styled.div`
  margin: 10px;
`

function newProduct() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: joiResolver(),
    mode: 'all'
  })
  return (
    <Body>
      <Navbar />
      <UseContainer />
      <ContainerPage>
        <StyledText>Cadastre seu novo produto</StyledText>
        <FormContainer>
          <Form>
            <Input label="Código" placeholder="Insira o código" name="Code" control={control} />
            <Input label="Preço" placeholder="(R$)" name="Price" control={control} />
            <Input
              label="Data do cadastro"
              type="date"
              placeholder="(DD/MM/YYYY)"
              name="Date"
              control={control}
            />
            <StyledInputDescription>
              <Input
                label="Descrição"
                placeholder="Insira uma descrição"
                name="Description"
                padding="70"
                control={control}
              />
            </StyledInputDescription>
            <ContainerButtonSave>
              <GeneralButton>SALVAR</GeneralButton>
            </ContainerButtonSave>
          </Form>
        </FormContainer>
      </ContainerPage>
    </Body>
  )
}

export default newProduct
