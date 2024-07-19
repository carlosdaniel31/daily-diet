import * as zod from 'zod'
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Container, Form, Label, Logo, Text } from './styles'
import logo from "../../assets/logo-app.png"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { newUser } from '../../storage/user/newUser'
import { useNavigation } from '@react-navigation/native'

const newUserSchema = zod.object({
  name: zod.string().min(1, 'Um nome deve ser informado').min(3, 'Nome inválido').trim()
})

type FormDataProps = zod.infer<typeof newUserSchema> 


export function Welcome(){
  const navigation = useNavigation()

  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      name: ''
    }
  })

  async function handleNewUser(data: FormDataProps){
    try {
      if(data.name !== ''){
        newUser(data.name)
        // navigation.navigate('home')
        // console.log(data);

      }else return;
      
    } catch (error) {
      throw error
    }
  }

  return (
    <Container>
      <Logo source={logo}/>
      <Text>Seja muito bem-vindo ao Daily Diet, uma maneira fácil de acompanhar sua dieta.</Text>
      <Form>
        <Label>Então, como podemos te chamar?</Label>
        <Controller 
          control={control}
          name='name'
          render={({field: {onChange, value}})=>(
            <Input 
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Button 
          title='pronto'
          onPress={handleSubmit(handleNewUser)}
        />
      </Form>
    </Container>
  )
}