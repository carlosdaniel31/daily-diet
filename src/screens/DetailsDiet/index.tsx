import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ContainerDiet } from "../../components/ContainerDiet";
import { ContainerInfoDiet } from "../../components/ContainerInfoDiet";
import { Box, Container, ContainerIcon, ContainerInfo, Icon, InfoPercentage, Percentage, Title } from "./styles";
import { mealsGetAll } from "../../storage/meal/mealsGetAll";
import { useCallback, useState } from "react";
import { MealDTO } from "../../dtos/MealDTO";

export function DetailsDiet(){
  const [meals, setMeals] = useState<MealDTO[]>([])

  const navigation = useNavigation()

  function goBack(){
    navigation.navigate('home')
  }

  async function fetchDetailsDiet(){
    try {
      const data = await mealsGetAll()
      setMeals(data)
      console.log(data);
      
    } catch (error) {
      throw error
    }
  }

  useFocusEffect(useCallback(()=>{
    fetchDetailsDiet()
  }, []))

  return (
    <Container>
      <ContainerIcon
        onPress={goBack}
      >
        <Icon 
          name='arrow-back'
        />
      </ContainerIcon>
      <Percentage>{((meals.length > 0 ? meals.filter((i)=>i.type === 'within').length : 0)/meals.length)*100}%</Percentage>
      <InfoPercentage>das refeições dentro da dieta</InfoPercentage>
      <ContainerInfo>
        <Title>Estatísticas gerais</Title>
        <ContainerInfoDiet 
          value={meals?.length}
          info="refeições registradas"
        />
        <Box>
          <ContainerDiet 
            value={meals.length > 0 ? meals.filter((i)=>i.type === 'within').length : 0}
            info="refeições dentro da dieta"
          />
          <ContainerDiet 
            value={meals.length > 0 ? meals.filter((i)=>i.type === 'outside').length : 0}
            info="refeições fora da dieta"
            type="outside"
          />
        </Box>
      </ContainerInfo>
    </Container>
  )
}