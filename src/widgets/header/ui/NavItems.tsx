import { NAV_ITEMS } from '../config/nav-items.config';
import { NavLink } from '@/shared/ui';

export const NavItems = () => {
  return (
    <nav className="max-w-212.5 w-full mx-auto not-first:mt-5 lg:not-first:mt-0 hidden sm:flex">
      <ul className="flex items-center justify-between gap-4 w-full sm:overflow-x-auto sm:scroll-smooth sm:snap-x sm:snap-mandatory sm:[scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden">
        {NAV_ITEMS.map(({ label, slug }) => (
          <li key={slug} className="shrink-0">
            <NavLink to={`/category/${slug}`} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
