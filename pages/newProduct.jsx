import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'

import styled from 'styled-components'
import { newProductSchema } from '../modules/products/products.schema'

import Navbar from '../src/components/navbar/Navbar'
import ContainerPage from '../src/components/layout/ContainerPage'
import Body from '../src/components/layout/Body'
import UseContainer from '../src/components/layout/UserContainer'
import Input from '../src/components/Input/Input'
import GeneralButton from '../src/components/button/GeneralButton'
import ControlledTextarea from '../src/components/Input/ControlledTextarea'

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
const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`

function NewProduct() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: joiResolver(newProductSchema),
    mode: 'all'
  })

  const handleForm = async (data) => {
    try {
      setLoading(true)
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/indexProducts`,
        data
      )
      if (status === 201) {
        router.push('/')
      }
    } catch (err) {
      console.error(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return (
    <Body>
      <Navbar />
      <UseContainer />
      <ContainerPage>
        <StyledText>Cadastre seu novo produto</StyledText>
        <FormContainer>
          <Form onSubmit={handleSubmit(handleForm)}>
            <Input label="Código" placeholder="Insira o código" name="Code" control={control} />
            <Input
              label="Título"
              type="text"
              placeholder="Título para o produto"
              name="Title"
              control={control}
            />
            <Input label="Preço" placeholder="(R$)" name="Price" control={control} />
            <Input
              label="Data do cadastro"
              type="date"
              min="2023-01-01"
              max="2023-12-30"
              placeholder="(DD/MM/YYYY)"
              name="Date"
              control={control}
            />
            <StyledInputDescription>
              <TextContainer>
                <ControlledTextarea
                  placeholder="Insira uma descrição"
                  rows="4"
                  name="Description"
                  maxlength="110"
                  control={control}
                />
              </TextContainer>
            </StyledInputDescription>
            <ContainerButtonSave>
              <GeneralButton
                type="submit"
                loading={loading}
                disabled={Object.keys(errors).length > 0 || !isValid}
              >
                SALVAR
              </GeneralButton>
            </ContainerButtonSave>
          </Form>
        </FormContainer>
      </ContainerPage>
    </Body>
  )
}

export default NewProduct
