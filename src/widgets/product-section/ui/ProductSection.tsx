import { ProductHeader, ProductSlider } from '@/widgets/product-section';
import { useProducts, type UseProductsProps } from '@/widgets/product-section/model/useProducts.ts';
import { ProductCard } from '@/entities/product';

interface ProductSectionProps {
  title: string;
  params: UseProductsProps;
}

export const ProductSection = ({ title, params }: ProductSectionProps) => {
  const { products } = useProducts(params);

  return (
    <section>
      <div className="fluid-container">
        <ProductHeader title={title} />
        <ProductSlider items={products} renderItem={(p) => <ProductCard product={p} />} />
      </div>
    </section>
  );
};
