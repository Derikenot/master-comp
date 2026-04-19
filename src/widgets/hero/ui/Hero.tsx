import { Slider } from '@/shared/ui';
import { BANNERS } from '@/widgets/hero/config/banners.ts';
import { HeroBanner, HeroPagination } from '@/widgets/hero';
import { SwiperSlide } from 'swiper/react';

export const Hero = () => {
  return (
    <section className="py-14">
      <div className="fluid-container">
        <Slider slidesPerView={1} spaceBetween={40}>
          {BANNERS.map((banner, index) => (
            <SwiperSlide id={`slide-${index}`} key={banner.buttonHref}>
              <HeroBanner banner={banner} />
            </SwiperSlide>
          ))}

          <HeroPagination />
        </Slider>
      </div>
    </section>
  );
};
