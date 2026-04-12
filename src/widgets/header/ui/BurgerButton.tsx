import { cn } from '@/shared/lib';
import type { ButtonHTMLAttributes } from 'react';

interface BurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isOpen: boolean;
}

export const BurgerButton = ({ className, isOpen, ...props }: BurgerButtonProps) => {
  return (
    <button
      className={cn(
        'relative flex items-center justify-center w-10 h-10 cursor-pointer z-50',
        className,
      )}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      type="button"
      {...props}
    >
      <div className="relative w-5 h-5">
        <span className={cn('burger-line top-0 ', isOpen && 'top-2 rotate-45')} />
        <span className={cn('burger-line top-2', isOpen && 'opacity-0')} />
        <span
          className={cn('burger-line bottom-0', isOpen && 'bottom-2 -rotate-45 -translate-y-0.5')}
        />
      </div>
    </button>
  );
};
