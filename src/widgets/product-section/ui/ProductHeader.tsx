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

    swiperRef.current.slideTo(swiperRef.current.activeIndex + 1);
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;

    swiperRef.current.slideTo(swiperRef.current.activeIndex - 1);
  };

  return (
    <header className="flex items-center justify-between gap-4 mb-8">
      <h2 className="text-[26px] font-medium">{title}</h2>

      <div className="gap-2 hidden md:flex">
        <ProductSliderButton dir="left" onClick={handlePrev} />
        <ProductSliderButton dir="right" onClick={handleNext} />
      </div>
    </header>
  );
};
