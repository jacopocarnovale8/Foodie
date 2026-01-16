import FavoritesProvider from './contexts/FavoritesContext';

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Foodie' }} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: 'Dettaglio Ricetta' }} />
          <Stack.Screen name="MyFood" component={MyFoodScreen} options={{ title: 'My Food' }} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Preferiti' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
