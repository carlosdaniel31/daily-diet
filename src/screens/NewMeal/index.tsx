import { useState } from "react";
import * as zod from 'zod'
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Box, Container, ContainerButtonTypeDiet, ContainerDateHour, Form, Label } from "./styles";
import { Button } from "../../components/Button";
import { ButtonTypeDiet } from "../../components/ButtonTypeDiet";
import { Input } from "../../components/Input";
import { Highlight } from "../../components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { mealCreate } from "../../storage/meal/mealCreate";
import { Alert } from "react-native";
import { ButtonDateTimer } from "../../components/ButtonDateTimer";

const newMealSchema = zod.object({
  // id: zod.string(),
  date: zod.string().min(1),
  hour: zod.string().min(1),
  item: zod.string().min(1, 'A refeição deve ser informada'),
  description: zod.string().min(1, 'Descreva sua refeição'),
  type: zod.string()
})

type FormDataProps = zod.infer<typeof newMealSchema>

export function NewMeal(){
  const [buttonSelected, setButtonSelected] = useState('')
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showClock, setShowClock] = useState(false);

  function handleSelectDate(event: DateTimePickerEvent, selectedDate?: Date | undefined){
    const currentDate = selectedDate || date;
    setDate(currentDate);
    const formattedDate = (currentDate.toDateString());
    setValue('date', formattedDate)
    setShowCalendar(false)
  }

  function handleSelectHour(event: DateTimePickerEvent, selectedHour?: Date | undefined){
    const currentDate = selectedHour || hour
    setHour(currentDate)
    const formattedDate = (currentDate.toDateString())
    setValue('hour', formattedDate)
    setShowClock(false)
  }

  function showDatepickerCalendar(){
    setShowCalendar(true);
  }

  function showDatepickerClock(){
    setShowClock(true);
  }

  const navigation = useNavigation()

  function goBack(){
    navigation.navigate('home')
  }

  const { control, handleSubmit, setValue, formState: {errors}} = useForm<FormDataProps>({
    resolver: zodResolver(newMealSchema),
    defaultValues: {
      date: '',
      hour: '',
      item: '',
      description: '',
      type: ''
    }
  })

  function handleButtonSelected(type: 'within' | 'outside'){
    setButtonSelected(type)
    setValue('type', type)
  }

  async function handleNewMeal(data: FormDataProps){
    try {
      if(!data.type){
        return Alert.alert('Nova refeição', 'Informe se sua refeição está dentro ou fora da dieta')
      }
      // console.log(data);
      
      await mealCreate(data)
      navigation.navigate(data.type ==='within' ? 'feedback_within_diet' : 'feedback_off_diet')
    } catch (error) {
      throw error
    }
  }

  return (
    <Container>
      <Highlight 
        title="Nova refeição"
        goBack={goBack}
      />
      <Form   
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
        {paddingBottom: 100}
      ]}>
        <Label style={{marginTop: 0}}>Nome</Label>
        <Controller 
          control={control}
          name="item"
          render={({field: {onChange, value}})=>(
            <Input 
              onChangeText={onChange}
              value={value}
              errorMessage={errors.item?.message}
            />
          )}
        />
        <Label>Descrição</Label>
        <Controller 
          control={control}
          name="description"
          render={({field: {onChange, value}})=>(
            <Input 
              multiline
              numberOfLines={3}
              style={{maxHeight: 90, textAlignVertical: 'top'}}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.description?.message}
            />
          )}
        />
        <ContainerDateHour>
          <Box>
          {showCalendar && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display="default"
            onChange={handleSelectDate}
            maximumDate={new Date()}
          />
        )}
        {showClock && (
          <DateTimePicker
            value={hour}
            mode='time'
            display="spinner"
            
            onChange={handleSelectHour}
          />
        )}
            <Label>Data</Label>
            <Controller 
              control={control}
              name="date"
              render={()=>(
                <ButtonDateTimer 
                  onPress={showDatepickerCalendar}
                  title={format(date, 'dd.MM.yy')}
                />
                // <Button 
                //   onPress={showDatepicker}
                //   // title={date.getDate() + '.' + (date.getMonth() + 1) + '.' + (date.getFullYear() % 100)}
                //   title={format(date, 'dd.MM.yy')}
                //   type="SECONDARY"
                // />
                // <Input 
                //   onChangeText={onChange}
                //   value={value}
                //   errorMessage={errors.date?.message}
                  
                // />
              )}
            />
          </Box>
          <Box>
            <Label>Hora</Label>
            <Controller 
              control={control}
              name="hour"
              render={()=>(
                <ButtonDateTimer 
                  title={format(hour, 'HH:mm')}
                  onPress={showDatepickerClock}
                />
                // <Input 
                //   onChangeText={onChange}
                //   value={value}
                //   errorMessage={errors.hour?.message}
                // />
              )}
            />
          </Box>
        </ContainerDateHour>
        <Label style={{marginBottom: 8}}>Está dentro da dieta?</Label>
        <ContainerButtonTypeDiet>
          <ButtonTypeDiet 
            icon="circle"
            background="GREEN_300"
            color="GREEN_700"
            isActive={buttonSelected === 'within'}
            onPress={()=> handleButtonSelected('within')}
          />
          <ButtonTypeDiet 
            icon="circle" 
            title="Não"
            background="RED_300"
            color="RED_700"
            isActive={buttonSelected === 'outside'}
            onPress={()=> handleButtonSelected('outside')}
          />
        </ContainerButtonTypeDiet>
        <Button style={{marginTop: 90}}
          title="Cadastrar refeição"
          onPress={handleSubmit(handleNewMeal)}
        />
      </Form>
    </Container>
  )
}