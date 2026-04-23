import { ProductSliderButton } from '@/widgets/product-section';
import type { RefObject } from 'react';
import { Swiper as SwiperType } from 'swiper';

interface ProductHeaderProps {
  title: string;
  swiperRef: RefObject<SwiperType | null>;
}

export const ProductHeader = ({ title, swiperRef }: ProductHeaderProps) => {
  const handleNext = () => {
    if (!swiperRef.current) return;
  };

  return (
    <header className="flex items-center justify-between gap-4">
      <h2 className="text-[26px] font-medium">{title}</h2>

      <div className="flex gap-2">
        <ProductSliderButton dir="left" onClick={() => console.log('Лево')} />
        <ProductSliderButton dir="right" onClick={() => console.log('Право')} />
      </div>
    </header>
  );
};
