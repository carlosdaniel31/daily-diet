import { Bar, Container, ContainerItem, ContainerPercentage, CreatedAd, HeaderSection, Icon, InfoPercentage, Item, Percentage, Section, Title, Type } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { SectionList } from "react-native";

const DATA = [
  {
    title: '12.01.2024',
    data: [
      {
      hora: '20:00',
      item: 'Cerveja',
      type: 'outside'
      },
      {
      hora: '22:19',
      item: 'Churrasco',
      type: 'outside'
      },
      {
      hora: '23:10',
      item: 'Suco',
      type: 'within'
      }
    ]
  },
  {
    title: '14.01.2024',
    data: [
      {
      hora: '10:22',
      item: 'Chicara de café',
      type: 'within'
      },
      {
      hora: '12:30',
      item: 'Arroz com feijão',
      type: 'within'
      }
    ]
  },
  {
    title: '19.01.2024',
    data: [
      {
      hora: '20:00',
      item: 'Coxinha',
      type: 'outside'
      }
    ]
  },
]

export function Home(){
  return (
    <Container>
      <Header />
      <ContainerPercentage>
        <Icon 
          name="call-made"
        />
        <Percentage>90,86%</Percentage>
        <InfoPercentage>das refeições dentro da dieta</InfoPercentage>
      </ContainerPercentage>
      <Title>Refeições</Title>
      <Button 
        title='Nova refeição'
        hasIcon
      />
      <SectionList showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item) => item.hora}
        renderItem={({item}) => (
          <Section>
            <ContainerItem>
              <CreatedAd>{item.hora}</CreatedAd>
              <Bar>|</Bar>
              <Item>{item.item}</Item>
              <Type 
                name='circle'
                type={item.type}
              />
            </ContainerItem>
          </Section>
        )}
        renderSectionHeader={({section: {title}})=>(
          <HeaderSection>{title}</HeaderSection>
        )}
      />
    </Container>
  )
}