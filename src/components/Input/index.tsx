import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { TextInput } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({inputRef, ...rest}: Props){
  return (
    <Container 
      ref={inputRef}
      {...rest}
    />
  )
}