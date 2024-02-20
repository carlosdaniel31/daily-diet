import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { DeleteMealCard } from "../../components/DeleteMealCard";
import { Highlight } from "../../components/Highlight";
import { Container, ContainerButtons, ContainerDetails, ContainerStateDiet, DateTime, Description, Dot,LabelDateTime, Meal, TextStateDiet } from "./styles";
import { useState } from "react";

export function DetailsMeal() {
  const [isActive, setIsActive] = useState(false)

  const navigation = useNavigation()

  function goBack(){
    navigation.navigate('home')
  }

  function handleEditMeal(){
    navigation.navigate('edit_meal')
  }
  
  return (
    <>
      <Container>
        <Highlight 
          title="Refeição" 
          goBack={goBack}
        />
        <ContainerDetails>
          <Meal>Sanduíche</Meal>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>
          <LabelDateTime>Data e hora</LabelDateTime>
          <DateTime>12/08/2022 às 16:00</DateTime>
          <ContainerStateDiet>
            <Dot />
            <TextStateDiet>dentro da dieta</TextStateDiet>
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
      />
    </>
  );
}
