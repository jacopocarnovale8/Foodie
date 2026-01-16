import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import CategoryBar from '../components/CategoryBar';

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks', 'Vegan', 'Quick', 'Seafood', 'Salads', 'Drinks'];

const sampleRecipes = [
  { id: '1', name: 'Pancakes', image: 'https://via.placeholder.com/150', category: 'Breakfast' },
  { id: '2', name: 'Salad', image: 'https://via.placeholder.com/150', category: 'Salads' },
  { id: '3', name: 'Pizza', image: 'https://via.placeholder.com/150', category: 'Dinner' },
];

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredRecipes = selectedCategory
    ? sampleRecipes.filter(r => r.category === selectedCategory)
    : sampleRecipes;

  return (
    <View style={styles.container}>
      <CategoryBar categories={categories} onSelect={setSelectedCategory} />
      <FlatList
        data={filteredRecipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} onPress={() => navigation.navigate('RecipeDetail', { recipe: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
});
