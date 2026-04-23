import { ProductHeader, ProductSlider } from '@/widgets/product-section';
import { useProducts, type UseProductsProps } from '@/widgets/product-section/model/useProducts.ts';
import { ProductCard } from '@/entities/product';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';

interface ProductSectionProps {
  title: string;
  params: UseProductsProps;
}

export const ProductSection = ({ title, params }: ProductSectionProps) => {
  const { products, loadMoreProducts } = useProducts(params);

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section>
      <div className="fluid-container">
        <ProductHeader title={title} swiperRef={swiperRef} />
        <ProductSlider
          items={products}
          renderItem={(p) => <ProductCard product={p} />}
          swiperRef={swiperRef}
          handleLoadSlides={loadMoreProducts}
        />
      </div>
    </section>
  );
};
