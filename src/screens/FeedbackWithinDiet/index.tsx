import { HeaderFeedback } from "../../components/HeaderFeedback";
import { Container, Image } from "./styles";
import ImageFeedbackWithinDiet from '../../assets/image-feedback-within-diet.png'
import { Button } from "../../components/Button";
import { Text } from "react-native";

export function FeedbackWithinDiet(){
  return (
    <Container>
      <HeaderFeedback 
        title="Continue assim!"
        description={<>Você continua <Text style={{fontWeight: 'bold'}}>dentro da dieta</Text>. Muito bem!</>}
        color="GREEN_700"
      />
      <Image 
        source={ImageFeedbackWithinDiet}
      />
      <Button 
        title="Ir para a página inicial"
      />
    </Container>
  )
}