import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { DetailsDiet } from '../screens/DetailsDiet'
import { NewMeal } from '../screens/NewMeal'
import { FeedbackWithinDiet } from '../screens/FeedbackWithinDiet'
import { FeedbackOffDiet } from '../screens/FeedbackOffDiet'
import { DetailsMeal } from '../screens/DetailsMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name='home'
        component={Home}
      />
      <Screen 
        name='details_diet'
        component={DetailsDiet}
      />
      <Screen 
        name='new_meal'
        component={NewMeal}
      />
      <Screen 
        name='feedback_within_diet'
        component={FeedbackWithinDiet}
      />
      <Screen 
        name='feedback_off_diet'
        component={FeedbackOffDiet}
      />
      <Screen 
        name='details_meal'
        component={DetailsMeal}
      />
    </Navigator>
  )
}