import { Container, Icon, Title } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  icon?: keyof typeof MaterialIcons.glyphMap
  title: string
}

export function Highlight({icon='arrow-back', title}: Props){
  return (
    <Container>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  )
}