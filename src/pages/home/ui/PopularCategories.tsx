import { CategoryCard } from '@/shared/ui';
import { CATEGORIES } from '@/pages/home/config';

interface PopularCategoriesProps {
  title: string;
}

export const PopularCategories = ({ title }: PopularCategoriesProps) => {
  return (
    <section className="py-6 md:py-10">
      <div className="fluid-container grid gap-8">
        <h2 className="md:text-[26px] text-[22px] font-medium">{title}</h2>

        <ul className="flex items-center justify-between gap-8  overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
          {CATEGORIES.map((category) => (
            <li key={category.linkHref} className="max-w-108 w-full shrink-0 lg:shrink">
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
