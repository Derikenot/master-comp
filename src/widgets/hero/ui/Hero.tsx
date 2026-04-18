import { Slider } from '@/shared/ui';
import { BANNERS } from '@/widgets/hero/config/banners.ts';
import { HeroBanner } from '@/widgets/hero';
import { SwiperSlide } from 'swiper/react';

export const Hero = () => {
  return (
    <section>
      <div className="fluid-container">
        <Slider slidesPerView={1} spaceBetween={40}>
          {BANNERS.map((banner) => (
            <SwiperSlide key={banner.buttonHref}>
              <HeroBanner banner={banner} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};
