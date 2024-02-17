import { Button } from "../../components/Button";
import { DeleteMealCard } from "../../components/DeleteMealCard";
import { Highlight } from "../../components/Highlight";
import { Container, ContainerButtons, ContainerDetails, ContainerStateDiet, DateTime, Description, Dot,LabelDateTime, Meal, TextStateDiet } from "./styles";

export function DetailsMeal() {
  return (
    <>
      <Container>
        <Highlight title="Refeição" />
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
            />
            <Button
              title="Excluir refeição"
              icon="delete"
              hasIcon
              type="SECONDARY"
            />
          </ContainerButtons>
        </ContainerDetails>
      </Container>
      <DeleteMealCard />
    </>
  );
}
