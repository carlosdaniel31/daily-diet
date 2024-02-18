import { HeaderFeedback } from "../../components/HeaderFeedback";
import { Container, Image } from "./styles";
import ImageFeedbackWithinDiet from '../../assets/image-feedback-within-diet.png'
import { Button } from "../../components/Button";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function FeedbackWithinDiet(){
  const navigation = useNavigation()

  function goBack(){
    navigation.navigate('home')
  }

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
        onPress={goBack}
      />
    </Container>
  )
}