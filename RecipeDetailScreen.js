import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>
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
});
