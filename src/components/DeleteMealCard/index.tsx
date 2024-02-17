import { Button } from "../Button";
import { Container, ContainerButtons, ContainerFade, Message } from "./styles";

export function DeleteMealCard(){
  return (
    <ContainerFade>
      <Container>
        <Message>Deseja realmente excluir essa refeição?</Message>
        <ContainerButtons>
          <Button 
            title="Cancelar"
            type="SECONDARY"
          />
          <Button 
            title="Sim, excluir"
          />
        </ContainerButtons>
      </Container>
    </ContainerFade>
  )
}