import { SliderButton } from '@/shared/ui';
import type { SliderButtonProps } from '@/shared/ui/slider-button/SliderButton.tsx';
import { cn } from '@/shared/lib';

interface ProductSliderButtonProps extends SliderButtonProps {}

export const ProductSliderButton = ({ dir, onClick, classname }: ProductSliderButtonProps) => {
  return (
    <SliderButton
      classname={cn(
        'flex items-center justify-center border border-dark-green rounded-full text-dark-green w-11 h-11 transition duration-200 hover:bg-gray active:bg-primary active:text-black active:border-primary',
        classname,
      )}
      dir={dir}
      onClick={onClick}
    />
  );
};
