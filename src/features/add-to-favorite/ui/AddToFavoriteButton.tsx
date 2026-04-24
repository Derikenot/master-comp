import { Heart } from 'lucide-react';
import { useFavoriteStore } from '@/entities/favorites';
import { cn } from '@/shared/lib';

interface AddToFavoriteButtonProps {
  id: string;
}

export const AddToFavoriteButton = ({ id }: AddToFavoriteButtonProps) => {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorites);
  const favorites = useFavoriteStore((state) => state.favorites);

  const isActive = favorites.includes(id);

  return (
    <button
      className="absolute right-5 top-5 text-dark-green cursor-pointer"
      aria-label="Добавить в избранное"
      type="button"
      onClick={() => toggleFavorite(id)}
    >
      <Heart size={32} className={cn(isActive ? 'fill-red text-red' : '', 'duration-200')} />
    </button>
  );
};
