import { Link } from 'react-router-dom';
import { BannerShapeLeft } from '@/shared/ui';
import type { Category } from '@/pages/home/config/categories.config.ts';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const { label, linkHref, imageHref } = category;

  return (
    <Link
      to={linkHref}
      className="relative flex justify-between bg-accent h-45.75 pl-6 pt-6 rounded-md overflow-hidden "
    >
      <h2 className="lg:text-lg ">{label}</h2>
      <img src={imageHref} alt={label} loading="lazy" className="z-10" />
      <BannerShapeLeft classname="absolute right-0 bottom-0 z-5" />
    </Link>
  );
};
