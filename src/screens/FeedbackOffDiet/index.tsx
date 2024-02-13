import { HeaderFeedback } from "../../components/HeaderFeedback";
import { Container, Image } from "./styles";
import ImageFeedbackOffDiet from '../../assets/image-feedback-off-diet.png'
import { Button } from "../../components/Button";
import { Text } from "react-native";

export function FeedbackOffDiet(){
  return (
    <Container>
      <HeaderFeedback 
        title="Que pena!"
        description={<>Você <Text style={{fontWeight: 'bold'}}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!</>}
        color="RED_700"
      />
      <Image 
        source={ImageFeedbackOffDiet}
      />
      <Button 
        title="Ir para a página inicial"
      />
    </Container>
  )
}