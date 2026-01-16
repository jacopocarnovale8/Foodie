import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Nessuna ricetta nei preferiti</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} onPress={() => navigation.navigate('RecipeDetail', { recipe: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
