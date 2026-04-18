import { Swiper, type SwiperProps } from 'swiper/react';
import type { ReactNode } from 'react';

interface SliderProps extends SwiperProps {
  children: ReactNode;
}

export const Slider = ({ children, ...props }: SliderProps) => {
  return (
    <Swiper speed={800} {...props}>
      {children}
    </Swiper>
  );
};
