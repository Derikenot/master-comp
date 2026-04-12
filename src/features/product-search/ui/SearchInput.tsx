import { Search } from 'lucide-react';
import { Button } from '@/shared/ui';
import { cn } from '@/shared/lib';

interface SearchInputProps {
  className?: string;
}

export const SearchInput = ({ className }: SearchInputProps) => {
  return (
    <form className={cn('flex items-center w-full', className)}>
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <div className="relative w-full flex items-center">
        <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-dark-gray" size={24} />
        <input
          className="border-2 lg:border border-dark-gray rounded-sm h-12 pl-12 pr-27 w-full placeholder:text-dark-gray"
          type="search"
          id="search"
          placeholder="Искать товар"
        />
        <Button className="absolute right-0 h-full rounded-sm" children="Найти" type="submit" />
      </div>
    </form>
  );
};
