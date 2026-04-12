import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/lib';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
}

export const Button = ({ children, type = 'button', className, ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'px-8 py-2.5 bg-primary text-black rounded-md cursor-pointer duration-200 hover:bg-white hover:ring-1 hover:ring-primary active:bg-primary-active',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
