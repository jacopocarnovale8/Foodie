import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    const exists = favorites.find(r => r.id === recipe.id);
    if (exists) {
      setFavorites(favorites.filter(r => r.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
