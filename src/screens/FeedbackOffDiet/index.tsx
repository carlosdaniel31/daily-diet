import { HeaderFeedback } from "../../components/HeaderFeedback";
import { Container, Image } from "./styles";
import ImageFeedbackOffDiet from '../../assets/image-feedback-off-diet.png'
import { Button } from "../../components/Button";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function FeedbackOffDiet(){
  const navigation = useNavigation()

  function goBack(){
    navigation.navigate('home')
  }

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
        onPress={goBack}
      />
    </Container>
  )
}