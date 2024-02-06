import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Details } from './src/screens/Details';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Details /> : <Loading />}
    </ThemeProvider>
  );
}

