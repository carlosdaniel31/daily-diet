import { Container, Title } from "./styles";
import { PressableProps } from "react-native"

type Props = PressableProps & {
  title: string
}

export function ButtonDateTimer({title, ...rest}: Props){
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}