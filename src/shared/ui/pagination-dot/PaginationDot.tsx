import { cn } from '@/shared/lib';
import type { AriaAttributes } from 'react';

interface PaginationDotProps {
  isActive?: boolean;
  classname?: string;
  onClick: () => void;
  ariaLabel: string;
  ariaCurrent: AriaAttributes['aria-current'];
  ariaControls: string;
}

export const PaginationDot = ({
  isActive,
  classname,
  onClick,
  ariaLabel,
  ariaCurrent,
  ariaControls,
}: PaginationDotProps) => {
  return (
    <button
      className={cn(
        'bg-dark-gray w-3 h-3 rounded-full cursor-pointer',
        isActive && 'bg-black',
        classname,
      )}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      aria-controls={ariaControls}
    ></button>
  );
};
