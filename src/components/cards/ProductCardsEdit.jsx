import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import axios from 'axios'

import { editProductSchema } from '../../../modules/products/products.schema'

import EditProductInput from '../Input/EditProductInput'
import ButtonAdd from '../button/ButtonAdd'

export default function ProductCardsEdit({ code, title, price, date, description, onSave, id }) {
  const {
    control,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { isValid }
  } = useForm({
    resolver: joiResolver(editProductSchema),
    mode: 'all'
  })

  const handleForm = async ({ Code, Title, Price, Date, Description }) => {
    try {
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
      <EditProductInput
        label="Descrição"
        placeholder="Insira uma descrição"
        name="Description"
        control={control}
        defaultValue={description}
      />
      <ButtonAdd type="submit">SALVAR</ButtonAdd>
    </form>
  )
}
