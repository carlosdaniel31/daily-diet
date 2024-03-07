import { Button } from "../Button";
import { Container, ContainerButtons, ContainerFade, Message } from "./styles";

type Props = {
  isActive: boolean
  setIsActive: (setIsActive: boolean)=>void
  onRemove: ()=>void
}

export function DeleteMealCard({isActive=false, setIsActive, onRemove}: Props){
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
                onPress={onRemove}
              />
            </ContainerButtons>
          </Container>
        </ContainerFade>
      }
    </>
  )
}