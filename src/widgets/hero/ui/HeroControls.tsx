import { HeroSliderButton } from '@/widgets/hero';
import { useSwiper } from 'swiper/react';

export const HeroControls = () => {
  const swiper = useSwiper();

  return (
    <>
      <HeroSliderButton
        dir="left"
        classname="absolute left-3 top-1/2 -translate-y-1/2"
        onClick={() => swiper.slidePrev()}
      />
      <HeroSliderButton
        dir="right"
        classname="absolute right-3 top-1/2 -translate-y-1/2 "
        onClick={() => swiper.slideNext()}
      />
    </>
  );
};
