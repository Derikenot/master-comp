import { Button } from '@/shared/ui';
import { Menu } from 'lucide-react';

export const CatalogButton = () => {
  return (
    <Button
      className="flex items-center justify-center gap-1 py-3"
      children={
        <>
          <Menu size={20} />
          <span className="whitespace-nowrap">В каталог</span>
        </>
      }
    />
  );
};
