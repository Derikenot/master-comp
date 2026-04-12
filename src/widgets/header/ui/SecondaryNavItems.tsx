import { SECONDARY_NAV_ITEMS } from '../config/secondary-nav-items.config';
import { NavLink } from '@/shared/ui';
import { cn } from '@/shared/lib';

interface SecondaryNavItemsProps {
  className?: string;
}

export const SecondaryNavItems = ({ className }: SecondaryNavItemsProps) => {
  return (
    <nav>
      <ul className={cn('flex items-center justify-between gap-3 xl:gap-6', className)}>
        {SECONDARY_NAV_ITEMS.map(({ label, href }) => (
          <li key={href}>
            <NavLink to={href} className="text-dark-gray" label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
