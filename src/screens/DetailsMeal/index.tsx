import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { DeleteMealCard } from "../../components/DeleteMealCard";
import { Highlight } from "../../components/Highlight";
import { Container, ContainerButtons, ContainerDetails, ContainerStateDiet, DateTime, Description, Dot,LabelDateTime, Meal, TextStateDiet } from "./styles";
import { useState } from "react";
import { MealDTO } from "../../dtos/MealDTO";
import { mealRemove } from "../../storage/meal/mealRemove";

type RouteParams = {
  meal: MealDTO
}

export function DetailsMeal() {
  const [isActive, setIsActive] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()

  const { meal } = route.params as RouteParams

  function goBack(){
    navigation.navigate('home')
  }

  function handleEditMeal(){
    navigation.navigate('edit_meal')
  }

  async function handleMealRemove(meal: MealDTO){
      try {
        await mealRemove(meal) 
        navigation.navigate('home')
      } catch (error) {
        throw error
      }
    }
  
  return (
    <>
      <Container>
        <Highlight 
          title="Refeição" 
          goBack={goBack}
        />
        <ContainerDetails>
          <Meal>{meal.item}</Meal>
          <Description>
            {meal.description}
          </Description>
          <LabelDateTime>Data e hora</LabelDateTime>
          <DateTime>{meal.date} às {meal.hour}</DateTime>
          <ContainerStateDiet>
            <Dot />
            <TextStateDiet>{meal.type === 'within' ? 'dentro da dieta' : 'fora da dieta'}</TextStateDiet>
          </ContainerStateDiet>
          <ContainerButtons>
            <Button 
              title="Editar refeição" 
              icon="border-color" 
              hasIcon 
              onPress={handleEditMeal}
            />
            <Button
              title="Excluir refeição"
              icon="delete"
              hasIcon
              type="SECONDARY"
              onPress={()=> setIsActive(true)}
            />
          </ContainerButtons>
        </ContainerDetails>
      </Container>
      <DeleteMealCard 
        isActive={isActive}
        setIsActive={setIsActive}
        onRemove={()=>handleMealRemove(meal)}
      />
    </>
  );
}
