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
      className={cn('hidden md:block z-20 cursor-pointer', classname)}
      onClick={onClick}
    >
      {dir === 'left' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
};
