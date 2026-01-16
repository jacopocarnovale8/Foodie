import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MyRecipesContext } from '../contexts/MyRecipesContext';
import RecipeCard from '../components/RecipeCard';

export default function MyFoodScreen({ navigation }) {
  const { myRecipes, addRecipe, deleteRecipe } = useContext(MyRecipesContext);
  const [newRecipe, setNewRecipe] = useState({ name: '', image: '', ingredients: '', instructions: '' });

  const handleSave = () => {
    if (!newRecipe.name) return alert('Inserisci il nome della ricetta');
    addRecipe(newRecipe);
    setNewRecipe({ name: '', image: '', ingredients: '', instructions: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Aggiungi Nuova Ricetta</Text>
      <TextInput placeholder="Nome" value={newRecipe.name} onChangeText={text => setNewRecipe({ ...newRecipe, name: text })} style={styles.input} />
      <TextInput placeholder="URL Immagine" value={newRecipe.image} onChangeText={text => setNewRecipe({ ...newRecipe, image: text })} style={styles.input} />
      <TextInput placeholder="Ingredienti" value={newRecipe.ingredients} onChangeText={text => setNewRecipe({ ...newRecipe, ingredients: text })} style={styles.input} />
      <TextInput placeholder="Istruzioni" value={newRecipe.instructions} onChangeText={text => setNewRecipe({ ...newRecipe, instructions: text })} style={styles.input} />
      <Button title="Salva Ricetta" onPress={handleSave} />

      <Text style={styles.heading}>Le mie ricette</Text>
      <FlatList
        data={myRecipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <RecipeCard recipe={item} onPress={() => navigation.navigate('RecipeDetail', { recipe: item })} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
              <Button title="Modifica" onPress={() => alert('Funzione modifica da implementare')} />
              <Button title="Elimina" color="red" onPress={() => deleteRecipe(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 5, padding: 8, borderRadius: 5 },
  heading: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
});
