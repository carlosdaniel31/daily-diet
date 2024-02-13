import { Container, Description, Title, Color } from "./styles";

type HeaderFeedbackProps = {
  title: string
  description: any
  color: Color
}

export function HeaderFeedback({title, description, color}: HeaderFeedbackProps){
  return (
    <Container>
      <Title color={color}>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}