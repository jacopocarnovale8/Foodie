import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import MyFoodScreen from './screens/MyFoodScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Foodie' }} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: 'Dettaglio Ricetta' }} />
        <Stack.Screen name="MyFood" component={MyFoodScreen} options={{ title: 'My Food' }} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Preferiti' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
