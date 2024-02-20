import { Button } from "../Button";
import { Container, ContainerButtons, ContainerFade, Message } from "./styles";

type Props = {
  isActive: boolean
  setIsActive: (setIsActive: boolean)=>void
}

export function DeleteMealCard({isActive=false, setIsActive}: Props){
  return (
    <>
      {
        isActive && 
        <ContainerFade>
          <Container>
            <Message>Deseja realmente excluir essa refeição?</Message>
            <ContainerButtons>
              <Button 
                title="Cancelar"
                type="SECONDARY"
                onPress={()=> setIsActive(false)}
              />
              <Button 
                title="Sim, excluir"
              />
            </ContainerButtons>
          </Container>
        </ContainerFade>
      }
    </>
  )
}