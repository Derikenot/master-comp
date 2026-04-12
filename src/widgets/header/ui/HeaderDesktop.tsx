import { CatalogButton } from '@/features/toggle-catalog';
import { SearchInput } from '@/features/product-search';
import { NAV_ACTIONS } from '../config/nav-actions.config';
import { LocationSelector, NavItems, SecondaryNavItems } from '@/widgets/header';

export const HeaderDesktop = () => {
  return (
    <header className="pt-6 pb-10 bg-gray">
      <div className="fluid-container">
        <div className="flex items-center justify-between gap-6 xl:gap-10 not-last:mb-9">
          <a className="text-3xl font-medium" href="/">
            МастерКомп
          </a>

          <div className="flex flex-1 gap-4">
            <CatalogButton />
            <SearchInput />
          </div>

          <nav>
            <ul className="flex items-center gap-4 xl:gap-8 ">
              {NAV_ACTIONS.map(({ label, icon: Icon, href }) => {
                return (
                  <li key={href}>
                    <a
                      className="flex items-center justify-center w-12 h-12"
                      aria-label={label}
                      href={href}
                    >
                      <Icon className="text-dark-green" size={32} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-center gap-5 xl:justify-between">
          <LocationSelector className="hidden xl:flex" />
          <NavItems />
          <SecondaryNavItems className="hidden xl:flex" />
        </div>
      </div>
    </header>
  );
};
