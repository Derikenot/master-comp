import { Hero } from '@/widgets/hero';
import { ProductSection } from '@/widgets/product-section';
import { PopularCategories } from '@/pages/home/ui';
import { NEW_PRODUCTS_PARAMS, TOP_PRODUCTS_PARAMS } from '@/pages/home/config';

export const Home = () => {
  return (
    <>
      <Hero />
      <ProductSection title="Лидеры продаж" params={TOP_PRODUCTS_PARAMS} />
      <PopularCategories title="Популярные категории" />
      <ProductSection title="Новинки" params={NEW_PRODUCTS_PARAMS} />
    </>
  );
};
