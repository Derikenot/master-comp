import { Hero } from '@/widgets/hero';
import { ProductSection } from '@/widgets/product-section';

const TOP_PRODUCTS_PARAMS = {
  sort: 'rating',
  order: 'desc',
  limit: 4,
} as const;

export const Home = () => {
  return (
    <>
      <Hero />
      <ProductSection title="Лидеры продаж" params={TOP_PRODUCTS_PARAMS} />
    </>
  );
};
