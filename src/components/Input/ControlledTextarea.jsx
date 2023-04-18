import { useController } from 'react-hook-form'

import styled from 'styled-components'

import Textarea from './Textarea'

const ErrorLabel = styled.span`
  color: ${(props) => props.theme.error};
  font-weight: bold;
  font-size: 14px;
`
const errorMessage = {
  'string.max': 'Texto deve ter no máximo 300 caracteres.',
  'string.empty': 'Obrigatório o preenchimento desse campo'
}

const ControlledTextarea = ({ name, control, defaultValue = '', ...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })
  return (
    <>
      <Textarea {...props} errror={error} value={value} onChange={onChange} />
      <div>{error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}</div>
    </>
  )
}

export default ControlledTextarea
