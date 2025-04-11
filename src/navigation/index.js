import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetail from '../screens/PokemonDetail';
import PokemonList from '../screens/PokemonList';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="PokemonList">
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
