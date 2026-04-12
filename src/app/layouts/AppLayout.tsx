import { Outlet } from 'react-router-dom';
import { HeaderDesktop, HeaderMobile } from '@/widgets/header';
import { useMatchMedia } from '@/shared/lib';

export const AppLayout = () => {
  const isDesktop = useMatchMedia('(max-width: 1023px)');

  return (
    <>
      {!isDesktop ? <HeaderDesktop /> : <HeaderMobile />}

      <main>
        <Outlet />
      </main>

      <div>footer</div>
    </>
  );
};
