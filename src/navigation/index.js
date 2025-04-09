import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetail from '../screens/PokemonDetail';
import PokemonList from '../screens/PokemonList';

/**
 *
 * App Navigation configuration
 *
 */

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PokemonList">
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
