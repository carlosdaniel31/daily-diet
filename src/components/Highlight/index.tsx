import { Container, ContainerIcon, Icon, Title } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  icon?: keyof typeof MaterialIcons.glyphMap
  title: string
  goBack: ()=>void
}

export function Highlight({icon='arrow-back', title, goBack}: Props){
  return (
    <Container>
      <ContainerIcon onPress={goBack}>
        <Icon name={icon}  />
      </ContainerIcon>
      <Title>{title}</Title>
    </Container>
  )
}