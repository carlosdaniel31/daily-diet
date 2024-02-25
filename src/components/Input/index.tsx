import { TextInput, TextInputProps } from "react-native";
import { Container, Message } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  errorMessage?: string | null
}

export function Input({inputRef, errorMessage, ...rest}: Props){
  return (
    <>
      <Container 
        ref={inputRef}
        {...rest}
      />
      <Message>{errorMessage}</Message>
    </>
  )
}