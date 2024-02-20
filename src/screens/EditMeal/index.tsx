import { useState } from "react";
import { Button } from "../../components/Button";
import { ButtonTypeDiet } from "../../components/ButtonTypeDiet";
import { Input } from "../../components/Input";
import { Box, Container, ContainerButtonTypeDiet, ContainerDateHour, Form, Label, TextArea } from "./styles";
import { Highlight } from "../../components/Highlight";
import { useNavigation } from "@react-navigation/native";

export function EditMeal(){
  const [buttonSelected, setButtonSelected] = useState('')

  const navigation = useNavigation()

  return (
    <Container>
      <Highlight 
        title="Editar refeição"
        goBack={navigation.goBack}
      />
      <Form contentContainerStyle={[
        {paddingBottom: 100}
      ]}>
        <Label>Nome</Label>
        <Input />
        <Label>Descrição</Label>
        <TextArea 
          multiline
          numberOfLines={3}
          style={{textAlignVertical: 'top'}}
        />
        <ContainerDateHour>
          <Box>
            <Label>Data</Label>
            <Input />
          </Box>
          <Box>
            <Label>Hora</Label>
            <Input />
          </Box>
        </ContainerDateHour>
        <Label style={{marginBottom: 8}}>Está dentro da dieta?</Label>
        <ContainerButtonTypeDiet>
          <ButtonTypeDiet 
            icon="circle"
            background="GREEN_300"
            color="GREEN_700"
            isActive={buttonSelected === 'sim'}
            onPress={()=> setButtonSelected('sim')}
          />
          <ButtonTypeDiet 
            icon="circle" 
            title="Não"
            background="RED_300"
            color="RED_700"
            isActive={buttonSelected === 'não'}
            onPress={()=> setButtonSelected('não')}
          />
        </ContainerButtonTypeDiet>
        <Button style={{marginTop: 124}}
          title="Salvar alterações"
        />
      </Form>
    </Container>
  )
}