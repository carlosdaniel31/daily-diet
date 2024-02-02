import { Container, ImageProfile, Logo } from "./styles";
import logo from '../../assets/logo-app.png'

export function Header(){
  return (
    <Container>
      <Logo source={logo}/>
      <ImageProfile src='https://github.com/carlosdaniel31.png' />
    </Container>
  )
}