import { Heart } from 'lucide-react';
import { useFavoriteStore } from '@/entities/favorites';
import { cn } from '@/shared/lib';

interface AddToFavoriteButtonProps {
  id: string;
}

export const AddToFavoriteButton = ({ id }: AddToFavoriteButtonProps) => {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorites);
  const isFavorite = useFavoriteStore((state) => state.isFavorite);
  const isActive = isFavorite(id);

  return (
    <button
      className={cn(
        isActive && 'text-red fill-red',
        'absolute right-5 top-5 text-dark-green cursor-pointer',
      )}
      aria-label="Добавить в избранное"
      type="button"
      onClick={() => toggleFavorite(id)}
    >
      <Heart size={32} />
    </button>
  );
};
