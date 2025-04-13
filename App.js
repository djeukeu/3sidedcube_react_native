import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import PokemonProvider from './src/context/PokemonProvider';
import AppNavigation from './src/navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PokemonProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </PokemonProvider>
  );
};

export default App;
