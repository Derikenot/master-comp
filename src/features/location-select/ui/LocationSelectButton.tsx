import { MapPin } from 'lucide-react';
import { cn } from '@/shared/lib';

interface LocationSelectButtonProps {
  className?: string;
  label: string;
  onClick: () => void;
}

export const LocationSelectButton = ({ label, className, onClick }: LocationSelectButtonProps) => {
  return (
    <button
      className={cn(
        'flex items-center gap-1 py-2 cursor-pointer duration-200 hover:scale-105',
        className,
      )}
      type="button"
      onClick={onClick}
    >
      <MapPin className="text-dark-green" size={24} />
      <span>{label}</span>
    </button>
  );
};
