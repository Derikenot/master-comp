import { ProductHeader, ProductSlider } from '@/widgets/product-section';

interface ProductSectionProps {
  title: string;
}

export const ProductSection = ({ title }: ProductSectionProps) => {
  return (
    <section>
      <div className="fluid-container">
        <ProductHeader title={title} />
        <ProductSlider />
      </div>
    </section>
  );
};
