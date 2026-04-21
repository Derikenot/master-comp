import { ProductHeader, ProductSlider } from '@/widgets/product-section';
import { useProducts } from '@/widgets/product-section/model/useProducts.ts';

interface ProductSectionProps {
  title: string;
}

export const ProductSection = ({ title }: ProductSectionProps) => {
  const { products, isLoading, loadMoreProducts, hasMore } = useProducts({
    sort: 'rating',
    limit: 4,
    order: 'desc',
  });

  return (
    <section>
      <div className="fluid-container">
        <ProductHeader title={title} />
        <ProductSlider items={products} renderItem={} />
      </div>
    </section>
  );
};
