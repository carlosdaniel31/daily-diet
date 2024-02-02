import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  hasIcon?: boolean
}

export function Button({title, hasIcon, ...rest}: Props){
  return (
    <>
      {hasIcon ? 
      <Container {...rest}>
        <Icon 
          name='add'
        />
        <Title>
          {title}
        </Title>
      </Container>
      : 
      <Container {...rest}>
        <Title>
          {title}
        </Title>
      </Container>
      }
    </>
  )
}