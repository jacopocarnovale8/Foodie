import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function CategoryBar({ categories, onSelect }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((cat, index) => (
        <TouchableOpacity key={index} style={styles.category} onPress={() => onSelect(cat)}>
          <Text style={styles.text}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  category: {
    backgroundColor: '#f08a5d',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  text: { color: '#fff', fontWeight: 'bold' },
});
