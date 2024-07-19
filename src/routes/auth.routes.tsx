import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Welcome } from '../screens/Welcome'

type AuthRoutes = {
  signup: undefined
}

// type AuthNavigatorRouteProp = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes(){
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name='signup'
        component={Welcome}
      />
    </Navigator>
  )
}