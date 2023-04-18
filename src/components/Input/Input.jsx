import { useController } from 'react-hook-form'
import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`

const StyledLabel = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;
  margin-left: 10px;
`

const StyledInput = styled.input`
  width: 100%;
  border: 2px solid rgba(239, 239, 239, 0.6);
  border-radius: 50px;
  background-color: ${(props) => props.theme.WhiteBackground};
  color: ${(props) => props.theme.background};
  padding: ${(props) => props.padding}px 20px;
  box-sizing: border-box;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 25px;

  ${(props) => props.error && `border: 2px solid ${props.theme.error};`}

  &:focus {
    outline: none;
    box-shadow: inset 0px 5px 10px;
  }
  ::placeholder {
    color: ${(props) => props.theme.background};
  }
`

const ErrorLabel = styled.span`
  color: ${(props) => props.theme.error};
  font-weight: bold;
  font-size: 14px;
`

const errorMessage = {
  'string.empty': 'Obrigatório o preenchimento desse campo'
}

// eslint-disable-next-line react/display-name
function Input({
  label,
  name,
  control,
  defaultValue = '',
  padding,
  pattern,
  type,
  step,
  min,
  max,
  ...props
}) {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        {...props}
        error={error}
        value={value}
        onChange={onChange}
        padding={padding}
        type={type}
        step={step}
        min={min}
        max={max}
      />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
}

Input.defaultProps = {
  padding: '30'
}

export default Input
