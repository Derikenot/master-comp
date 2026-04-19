import { BANNERS } from '@/widgets/hero/config/banners.ts';
import { PaginationDot } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

export const HeroPagination = () => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    swiper.on('slideChange', () => setActiveIndex(swiper.activeIndex));
    return () => swiper.off('slideChange');
  }, [swiper]);

  return (
    <nav className="mt-3 hidden md:block" aria-label="Навигация по слайдам">
      <ul className="flex justify-center gap-3">
        {BANNERS.map((_, index) => (
          <PaginationDot
            key={index}
            isActive={index === activeIndex}
            onClick={() => swiper.slideTo(index)}
            ariaLabel={`Перейти к слайду ${index + 1}`}
            ariaCurrent={index === activeIndex ? 'true' : undefined}
            ariaControls={`slide-${index}`}
          />
        ))}
      </ul>
    </nav>
  );
};
