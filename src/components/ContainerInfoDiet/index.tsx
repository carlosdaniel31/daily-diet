import { Container, Value, Info} from './styles'

type Props = {
  value: number,
  info: string
}

export function ContainerInfoDiet({value, info}: Props) {
  return (
    <Container>
      <Value>{value}</Value>
      <Info>{info}</Info>
    </Container>
  );
}
