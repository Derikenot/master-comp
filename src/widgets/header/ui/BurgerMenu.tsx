import { createPortal } from 'react-dom';
import { NavItemsMobile } from '@/widgets/header';

export const BurgerMenu = () => {
  return createPortal(
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      <div className="flex-1 overflow-y-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]">
        <NavItemsMobile />
      </div>
    </div>,
    document.body,
  );
};
