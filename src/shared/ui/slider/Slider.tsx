import { Swiper, type SwiperProps } from 'swiper/react';
import type { ReactNode } from 'react';
import { A11y } from 'swiper/modules';

interface SliderProps extends SwiperProps {
  children: ReactNode;
}

export const Slider = ({ children, ...props }: SliderProps) => {
  return (
    <Swiper
      modules={[A11y]}
      a11y={{
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        firstSlideMessage: 'Это первый слайд',
        lastSlideMessage: 'Это последний слайд',
      }}
      speed={800}
      {...props}
    >
      {children}
    </Swiper>
  );
};
