import './styles'
import type { InputProps } from './types'
import { InputContainer, InputElement} from './styles'

function Input({
  name,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
}: InputProps) {

  return (
    <InputContainer>
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

export default Input;