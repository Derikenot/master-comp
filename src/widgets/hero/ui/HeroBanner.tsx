import type { Banner } from '@/widgets/hero/config/banners.ts';
import { BannerShapeTop, ButtonLink } from '@/shared/ui';
import { HeroSliderButton } from '@/widgets/hero';
import { useSwiper } from 'swiper/react';

interface HeroBannerProps {
  banner: Banner;
}

export const HeroBanner = ({ banner }: HeroBannerProps) => {
  const swiper = useSwiper();
  const { imageHref, title, description, buttonLabel, buttonHref } = banner;

  return (
    <div className="relative flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-2 bg-accent px-4 h-full rounded-lg overflow-hidden">
      <BannerShapeTop classname="w-full h-full absolute inset-0 z-10 pointer-events-none" />

      <img src={imageHref} alt="" loading="lazy" className="z-10" />

      <div className="flex flex-col items-center text-center lg:items-start lg:text-left mt-8 lg:mt-0 z-10 ">
        <h2 className="text-3xl lg:text-4xl  xl:text-[58px] font-medium tracking-tight max-w-75 lg:max-w-145 leading-1.1 mb-4 ">
          {title}
        </h2>
        <p className="text-sm md:text-base lg:text-lg tracking-tight max-w-100">{description}</p>
        <ButtonLink className="mt-6 lg:mt-10 mb-2" to={buttonHref}>
          {buttonLabel}
        </ButtonLink>
      </div>

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
    </div>
  );
};
