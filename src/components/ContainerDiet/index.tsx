import { TypeStyleIconDietProps } from "../../screens/Home/styles";
import { Container, Info, Value } from "./styles";

type Props = {
  value: number
  info: string
  type?: TypeStyleIconDietProps
}

export function ContainerDiet({value, info, type = 'within'}: Props){
  return (
      <Container type={type}>
        <Value>{value}</Value>
        <Info>{info}</Info>
      </Container>   
  )
}