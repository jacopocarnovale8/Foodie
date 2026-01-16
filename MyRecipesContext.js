import React, { createContext, useState } from 'react';

export const MyRecipesContext = createContext();

export default function MyRecipesProvider({ children }) {
  const [myRecipes, setMyRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setMyRecipes([...myRecipes, { ...recipe, id: Date.now().toString() }]);
  };

  const editRecipe = (id, updated) => {
    setMyRecipes(myRecipes.map(r => (r.id === id ? { ...r, ...updated } : r)));
  };

  const deleteRecipe = (id) => {
    setMyRecipes(myRecipes.filter(r => r.id !== id));
  };

  return (
    <MyRecipesContext.Provider value={{ myRecipes, addRecipe, editRecipe, deleteRecipe }}>
      {children}
    </MyRecipesContext.Provider>
  );
}
