import { ProductSliderButton } from '@/widgets/product-section';

interface ProductHeaderProps {
  title: string;
}

export const ProductHeader = ({ title }: ProductHeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-4">
      <h2 className="text-[26px] font-medium">{title}</h2>

      <div className="flex gap-2">
        <ProductSliderButton dir="left" onClick={() => console.log('Лево')} />
        <ProductSliderButton dir="right" onClick={() => console.log('Право')} />
      </div>
    </header>
  );
};
