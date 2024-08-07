import { Bar, Container, ContainerItem, ContainerPercentage, CreatedAd, HeaderSection, Icon, InfoPercentage, Item, ListMeal, Percentage, Title, Type } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { FlatList, SectionList } from "react-native";
import { format } from "date-fns"
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { useCallback, useState } from "react";
import { mealsGetAll } from "../../storage/meal/mealsGetAll";
import { MealDTO } from "../../dtos/MealDTO";
import { ListEmpty } from "../../components/ListEmpty";
import { getUser } from "../../storage/user/getUser";

const DATAL = [
  {
    title: '12.01.2024',
    data: [
      {
      hora: '20:01',
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
const DATA = [
    {
    hora: '20:01',
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
    },
    {
      hora: '10:22',
      item: 'Chicara de café',
      type: 'within'
      },
      {
      hora: '12:30',
      item: 'Arroz com feijão',
      type: 'within'
      },
    {
      hora: '20:00',
      item: 'Coxinha',
      type: 'outside'
    },
    {
      hora: '13:22',
      item: 'Melancia',
      type: 'within'
    },
    {
      hora: '17:47',
      item: 'Pizza',
      type: 'outside'
    },
    {
      hora: '09:00',
      item: 'Chá de hibisco',
      type: 'within',
    },
]

export function Home(){
  const [isLoading, setIsLoading] = useState(false)
  const [meals, setMeals] = useState<MealDTO[]>([])
  // const [teste, setTeste] = useState('')

  const navigation = useNavigation()
  
  function handleNewMeal(){
    navigation.navigate('new_meal')
  }

  function handleDetailsDiet(){
    navigation.navigate('details_diet')
  }

  function handleDetailsMeal(meal: MealDTO){
    navigation.navigate('details_meal', {meal})
  }

  async function fetchMeals(){
    try {
      setIsLoading(true);
      const data = await mealsGetAll()
      // const user = await getUser()
      setMeals(data)
      // setTeste(user)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(()=>{
    fetchMeals()
  }, []))

  return (
    <Container>
      <Header />
      <ContainerPercentage onPress={handleDetailsDiet}>
        <Icon 
          name="call-made"
        />
        <Percentage>45</Percentage>
        <InfoPercentage>das refeições dentro da dieta</InfoPercentage>
      </ContainerPercentage>
      <Title>Refeições</Title>
      <Button 
        title='Nova refeição'
        hasIcon
        icon="add"
        onPress={handleNewMeal}
      />
      {/* <SectionList 
        sections={DATA}
        keyExtractor={(item) => item.item}
        stickySectionHeadersEnabled={false}
        renderItem={({item}) => (
          <ContainerItem>
              <CreatedAd>{item.hora}</CreatedAd>
              <Bar>|</Bar>
              <Item>{item.item}</Item>
              <Type 
                name='circle'
                type={item.type}
                />
            </ContainerItem>
          )}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({section})=>(
          <HeaderSection>{section.title}</HeaderSection>
        )}
      />    */}
      <FlatList 
        data={meals}
        keyExtractor={item => item.description}
        renderItem={({item})=> {
          return (
          <ContainerItem onPress={()=>handleDetailsMeal(item)}>
            <CreatedAd>{format(item.createdAd, 'HH:mm')}</CreatedAd>
              <Bar>|</Bar>
              <Item numberOfLines={1} ellipsizeMode="tail">{item.item}</Item>
              <Type 
                name='circle'
                type={item.type}
              />
          </ContainerItem>
          )
        }}
        contentContainerStyle={
          meals.length ? { marginTop: 32, paddingBottom: Platform.OS === 'ios' ? 20 : 80} : {flex: 1}}
        ListEmptyComponent={()=>(
          <ListEmpty 
            message="Adicione uma refeição a sua dieta."
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}