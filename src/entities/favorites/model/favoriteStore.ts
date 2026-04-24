import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UseFavoriteStoreProps {
  favorites: string[];
  toggleFavorites: (id: string) => void;
}

export const useFavoriteStore = create<UseFavoriteStoreProps>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorites: (productId) =>
        set((state) => ({
          favorites: state.favorites.includes(productId)
            ? state.favorites.filter((id) => id !== productId)
            : [...state.favorites, productId],
        })),
    }),
    { name: 'favorite-storage' },
  ),
);
