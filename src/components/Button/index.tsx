import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  hasIcon?: boolean
  icon?: keyof typeof MaterialIcons.glyphMap
  type?: ButtonTypeStyleProps
}

export function Button({title, hasIcon=false, icon, type="PRIMARY", ...rest}: Props){
  return (
    <Container {...rest} type={type}>
      { hasIcon &&
        <Icon type={type}
          name={icon}
        />
      }
      <Title type={type}>
        {title}
      </Title>
    </Container>
  )
}