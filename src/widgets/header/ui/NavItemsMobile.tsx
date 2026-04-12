import { NAV_ITEMS } from '../config/nav-items.config';
import { NavLink } from '@/shared/ui';

export const NavItemsMobile = () => {
  return (
    <nav className="mt-16">
      <ul className="flex flex-col items-center justify-between gap-4">
        {NAV_ITEMS.map(({ label, slug }) => (
          <li key={slug} className="shrink-0">
            <NavLink to={`/category/${slug}`} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
