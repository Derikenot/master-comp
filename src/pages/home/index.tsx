import { Hero } from '@/widgets/hero';
import { ProductSection } from '@/widgets/product-section';
import { PopularCategories } from '@/pages/home/ui';

const TOP_PRODUCTS_PARAMS = {
  sort: 'rating',
  order: 'desc',
  limit: 8,
} as const;

export const Home = () => {
  return (
    <>
      <Hero />
      <ProductSection title="Лидеры продаж" params={TOP_PRODUCTS_PARAMS} />
      <PopularCategories title="Популярные категории" />
    </>
  );
};
