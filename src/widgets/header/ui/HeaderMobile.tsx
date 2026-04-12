import { SearchInput } from '@/features/product-search';
import { NAV_ACTIONS } from '../config/nav-actions.config';
import { BurgerButton, BurgerMenu, NavItems } from '@/widgets/header';
import { useBurgerButton } from '../model/useBurgerButton';

export const HeaderMobile = () => {
  const { isOpen, toggleBurgerButton } = useBurgerButton();

  return (
    <header className="pt-4 pb-6 bg-gray">
      <div className="fluid-container">
        <div className="flex items-center gap-2">
          <BurgerButton className="sm:hidden" onClick={toggleBurgerButton} isOpen={isOpen} />
          <a className="text-xl font-medium" href="/">
            МастерКомп
          </a>

          <nav className="ml-auto">
            <ul className="flex items-center gap-2 md:gap-4">
              {NAV_ACTIONS.map(({ label, icon: Icon, href, hiddenOnMobile }) => {
                return (
                  <li key={href} className={hiddenOnMobile ? 'hidden' : ''}>
                    <a
                      className="flex items-center justify-center w-10 h-10"
                      aria-label={label}
                      title={label}
                      href={href}
                    >
                      <Icon className="text-dark-green" size={20} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <SearchInput className="not-first:mt-5" />
        <NavItems />
      </div>

      {isOpen && <BurgerMenu />}
    </header>
  );
};
