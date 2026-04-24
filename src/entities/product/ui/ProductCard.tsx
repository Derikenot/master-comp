import { MessageCircleMore, Star } from 'lucide-react';
import { Button } from '@/shared/ui';
import type { Product } from '@/entities/product/model/types.ts';
import { AddToFavoriteButton } from '@/features/add-to-favorite';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, imageHref, price, title, rating, reviews, oldPrice } = product;

  return (
    <article className="relative flex flex-col h-full">
      <div className="bg-gray border border-light-accent rounded-md ">
        <img className="w-full h-full object-contain" src={imageHref} alt={title} loading="lazy" />
      </div>

      <AddToFavoriteButton id={id} />

      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mt-4">
          <data className="text-xl font-medium" value={price}>
            {price.toLocaleString('ru-RU')} <span>₽</span>
          </data>
          {oldPrice && (
            <s className="text-dark-gray" aria-label={`Старая цена товара ${oldPrice} рублей`}>
              {oldPrice.toLocaleString('ru-RU')} <span>₽</span>
            </s>
          )}
        </div>

        <h3 className="my-1">{title}</h3>

        <div className="flex items-center gap-3 mt-auto mb-7.5">
          <div className="flex items-center gap-0.5" aria-label={`Рейтинг ${rating}`}>
            <Star className="text-yellow fill-yellow" size={18} />
            <span>{rating}</span>
          </div>

          <div className="flex items-center gap-0.5" aria-label={`Отзывов ${reviews}`}>
            <MessageCircleMore className="text-dark-green" size={18} />
            <span>{reviews}</span>
          </div>
        </div>

        <Button
          className="self-start py-3.5 mt-auto"
          aria-label={`Добавить товар ${title} в корзину`}
        >
          {'В корзину'}
        </Button>
      </div>
    </article>
  );
};
