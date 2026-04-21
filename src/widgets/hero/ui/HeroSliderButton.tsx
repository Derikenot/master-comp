import { SliderButton } from '@/shared/ui';
import type { SliderButtonProps } from '@/shared/ui/slider-button/SliderButton.tsx';
import { cn } from '@/shared/lib';

export const HeroSliderButton = ({ dir, classname, onClick }: SliderButtonProps) => {
  return (
    <SliderButton
      dir={dir}
      classname={cn(
        'flex items-center justify-center w-11 h-11 bg-primary p-1 rounded-full transition duration-200 hover:bg-gray active:bg-primary',
        classname,
      )}
      onClick={onClick}
    />
  );
};
