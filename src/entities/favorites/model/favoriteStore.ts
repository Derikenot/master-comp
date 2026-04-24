import { create } from 'zustand';

interface UseFavoriteStoreProps {
  favorites: string[];
  toggleFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoriteStore = create<UseFavoriteStoreProps>((set, get) => ({
  favorites: [],
  toggleFavorites: (productId) =>
    set((state) => ({
      favorites: state.favorites.includes(productId)
        ? state.favorites.filter((id) => id !== productId)
        : [...state.favorites, productId],
    })),
  isFavorite: (productId) => {
    return get().favorites.includes(productId);
  },
}));
