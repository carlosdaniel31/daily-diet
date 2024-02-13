import { PressableProps, TouchableOpacityProps } from "react-native";
import { ColorType, BackgroundType, Container, Icon, Title } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type Props = PressableProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  title?: string
  color: ColorType
  background: BackgroundType
  isActive: boolean
}

export function ButtonTypeDiet({icon, title='Sim', color, background, isActive, ...rest}: Props){
  return (
    <Container 
      isActive={isActive}
      color={color}
      background={background}
      {...rest}>
      {/* <Icon 
        name={icon}
      /> */}
      <Title>{title}</Title>
    </Container>
  )
}