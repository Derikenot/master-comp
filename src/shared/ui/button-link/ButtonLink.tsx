import type { ReactNode } from 'react';
import { cn } from '@/shared/lib';
import { Link, type LinkProps } from 'react-router-dom';

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  to: string;
}

export const ButtonLink = ({ children, to, className, ...props }: ButtonLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        'px-7 py-2.5 lg:px-7.5 lg:py-3.5 bg-primary text-black font-medium text-sm lg:text-lg inline-block rounded-md cursor-pointer duration-200 hover:bg-white hover:ring-1 hover:ring-primary active:bg-primary-active',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
