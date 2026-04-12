import { NavLink as RouterNavLink } from 'react-router-dom';
import { cn } from '@/shared/lib';

interface NavLinkProps {
  to: string;
  label: string;
  className?: string;
}

export const NavLink = ({ to, label, className }: NavLinkProps) => {
  return (
    <RouterNavLink
      className={cn('flex py-2 duration-200 hover:-translate-y-0.5', className)}
      to={to}
    >
      {label}
    </RouterNavLink>
  );
};
