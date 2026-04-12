import { MapPin } from 'lucide-react';
import { cn } from '@/shared/lib';

interface LocationSelectorProps {
  className?: string;
}

export const LocationSelector = ({ className }: LocationSelectorProps) => {
  return (
    <button
      className={cn(
        'flex items-center gap-1 py-2 cursor-pointer duration-200 hover:scale-105',
        className,
      )}
      type="button"
    >
      <MapPin className="text-dark-green" size={24} />
      <span>Краснодар</span>
    </button>
  );
};
