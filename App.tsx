import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { NewMeal } from './src/screens/NewMeal'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Details } from './src/screens/Details';
import { FeedbackWithinDiet } from './src/screens/FeedbackWithinDiet'
import { FeedbackOffDiet } from './src/screens/FeedbackOffDiet'
import { DetailsMeal } from './src/screens/DetailsMeal'

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <DetailsMeal /> : <Loading />}
    </ThemeProvider>
  );
}