import { SliderButton } from '@/shared/ui';
import type { SliderButtonProps } from '@/shared/ui/slider-button/SliderButton.tsx';
import { cn } from '@/shared/lib';

export const HeroSliderButton = ({ dir, classname, onClick }: SliderButtonProps) => {
  return (
    <SliderButton
      dir={dir}
      classname={cn('bg-primary p-1 rounded-full', classname)}
      onClick={onClick}
    />
  );
};
