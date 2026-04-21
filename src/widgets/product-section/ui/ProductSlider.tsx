import { Slider } from '@/shared/ui';
import type { ReactNode } from 'react';
import { SwiperSlide } from 'swiper/react';

interface ProductSliderProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export const ProductSlider = <T,>({ items, renderItem }: ProductSliderProps<T>) => {
  return (
    <Slider spaceBetween={24} slidesPerView={4}>
      {items.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
      ))}
    </Slider>
  );
};
