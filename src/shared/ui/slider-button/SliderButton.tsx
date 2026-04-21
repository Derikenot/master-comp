import { cn } from '@/shared/lib';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface SliderButtonProps {
  dir: 'right' | 'left';
  classname?: string;
  onClick: () => void;
}

export const SliderButton = ({ dir, onClick, classname }: SliderButtonProps) => {
  return (
    <button
      type="button"
      className={cn('hidden md:flex z-20 cursor-pointer', classname)}
      onClick={onClick}
    >
      {dir === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
};
