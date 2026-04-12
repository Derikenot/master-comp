import { CatalogButton } from '@/features/toggle-catalog';
import { SearchInput } from '@/features/product-search';
import { NAV_ACTIONS } from '@/widgets/header/config';

export const HeaderDesktop = () => {
  return (
    <header className="pt-6 pb-10 bg-gray">
      <div className="container flex items-center justify-between gap-10">
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
    </header>
  );
};
