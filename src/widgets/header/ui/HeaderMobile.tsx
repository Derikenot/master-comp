import { SearchInput } from '@/features/product-search';
import { NAV_ACTIONS } from '@/widgets/header/config';
import { BurgerButton } from '@/widgets/header';

export const HeaderMobile = () => {
  return (
    <header className="py-4 bg-gray">
      <div className="container">
        <div className="flex items-center gap-2">
          <BurgerButton />
          <a className="text-xl font-medium" href="/">
            МастерКомп
          </a>

          <nav className="ml-auto">
            <ul className="flex items-center gap-2 md:gap-4">
              {NAV_ACTIONS.map(({ label, icon: Icon, href, hiddenOnMobile }) => {
                return (
                  <li key={href} className={hiddenOnMobile ? 'hidden' : ''}>
                    <a
                      className="flex items-center justify-center w-11 h-11"
                      aria-label={label}
                      title={label}
                      href={href}
                    >
                      <Icon className="text-dark-green" size={24} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <SearchInput className="not-first:mt-5" />
      </div>
    </header>
  );
};
