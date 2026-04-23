import { Slider } from '@/shared/ui';
import type { ReactNode, RefObject } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

interface ProductSliderProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  swiperRef: RefObject<SwiperType | null>;
  handleLoadSlides: () => void;
}

export const ProductSlider = <T,>({
  items,
  renderItem,
  swiperRef,
  handleLoadSlides,
}: ProductSliderProps<T>) => {
  return (
    <Slider
      spaceBetween={24}
      slidesPerView={4}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => {
        if (
          swiper.activeIndex + Math.ceil(Number(swiper.params.slidesPerView)) >=
          items.length - 1
        ) {
          handleLoadSlides();
        }
      }}
      breakpoints={{
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2.6,
        },
        0: {
          slidesPerView: 1.75,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
      ))}
    </Slider>
  );
};
