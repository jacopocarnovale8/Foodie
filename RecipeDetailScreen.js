import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.find(r => r.id === recipe.id);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(recipe)} style={styles.heartButton}>
        <Text style={{ fontSize: 24 }}>{isFavorite ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>

      <Text>Ingredienti: ...</Text>
      <Text>Istruzioni: ...</Text>
      <Text>Tempo preparazione: ...</Text>
      <Text>Porzioni: ...</Text>
      <Text>Calorie: ...</Text>
      <Text>Difficoltà: ...</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  heartButton: { position: 'absolute', top: 20, right: 20 },
});
