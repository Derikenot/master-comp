import { MessageCircleMore, Star } from 'lucide-react';
import { Button } from '@/shared/ui';
import type { Product } from '@/entities/product/model/types.ts';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { imageHref, price, title, rating, review } = product;

  return (
    <article>
      <div>
        <div>
          <img src={imageHref} alt="" loading="lazy" />
        </div>

        <div>
          <p>{price}</p>
          <p>{title}</p>

          <div>
            <div>
              <Star size={24} />
              <span>{rating}</span>
            </div>

            <div>
              <MessageCircleMore size={24} />
              <span>{review}</span>
            </div>

            <Button>{'В корзину'}</Button>
          </div>
        </div>
      </div>
    </article>
  );
};
