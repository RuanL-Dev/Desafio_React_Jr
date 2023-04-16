import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import axios from 'axios'
import styled from 'styled-components'

import { editProductSchema } from '../../../modules/products/products.schema'

import EditProductInput from '../Input/EditProductInput'
import ButtonAdd from '../button/ButtonAdd'
import ControlledTextarea from '../Input/ControlledTextarea'

const StyledInputDescription = styled.div`
  margin: 10px;
`
const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`

export default function ProductCardsEdit({ code, title, price, date, description, onSave, id }) {
  const [loading, setLoading] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: joiResolver(editProductSchema),
    mode: 'all'
  })

  const handleForm = async ({ Code, Title, Price, Date, Description }) => {
    try {
      setLoading(true)
      const { status } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/indexProducts`,
        {
          _id: id,
          Code,
          Title,
          Price,
          Date,
          Description
        }
      )
      if (status === 201) {
        onSave()
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <EditProductInput
        label="Código"
        placeholder="Insira o código"
        name="Code"
        control={control}
        defaultValue={code}
      />
      <EditProductInput
        label="Título"
        type="text"
        placeholder="Título para o produto"
        name="Title"
        control={control}
        defaultValue={title}
      />
      <EditProductInput
        label="Preço"
        placeholder="(R$)"
        name="Price"
        control={control}
        defaultValue={price}
      />
      <EditProductInput
        label="Data do cadastro"
        type="date"
        min="2023-01-01"
        max="2023-12-30"
        placeholder="(DD/MM/YYYY)"
        name="Date"
        control={control}
        defaultValue={date}
      />
      <StyledInputDescription>
        <TextContainer>
          <ControlledTextarea
            placeholder="Insira uma descrição"
            rows="4"
            name="Description"
            maxlength="110"
            control={control}
            defaultValue={description}
          />
        </TextContainer>
      </StyledInputDescription>
      <ButtonAdd
        type="submit"
        loading={loading}
        disabled={Object.keys(errors).length > 0 || !isValid}
      >
        SALVAR
      </ButtonAdd>
    </form>
  )
}
