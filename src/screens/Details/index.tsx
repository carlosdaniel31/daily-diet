import { ContainerDiet } from "../../components/ContainerDiet";
import { ContainerInfoDiet } from "../../components/ContainerInfoDiet";
import { Box, Container, ContainerInfo, Icon, InfoPercentage, Percentage, Title } from "./styles";

export function Details(){
  return (
    <Container>
      <Icon 
        name='arrow-back'
      />
      <Percentage>90,86%</Percentage>
      <InfoPercentage>das refeições dentro da dieta</InfoPercentage>
      <ContainerInfo>
        <Title>Estatísticas gerais</Title>
        <ContainerInfoDiet 
          value={22}
          info="melhor sequência de pratos dentro da dieta"
        />
        <ContainerInfoDiet 
          value={109}
          info="refeições registradas"
        />
        <Box>
          <ContainerDiet 
            value={99}
            info="refeições dentro da dieta"
          />
          <ContainerDiet 
            value={10}
            info="refeições fora da dieta"
            type="outside"
          />
        </Box>
      </ContainerInfo>
    </Container>
  )
}