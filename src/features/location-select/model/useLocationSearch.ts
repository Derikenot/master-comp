import { useMemo, useState } from 'react';
import { useDebounce } from '@/shared/lib';

interface UseLocationSearchOptions<T> {
  items: T[];
  filterFn: (item: T, query: string) => boolean;
}

export const useLocationSearch = <T>({ items, filterFn }: UseLocationSearchOptions<T>) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 300);

  const filteredItems = useMemo(() => {
    const query = debouncedQuery.trim().toLowerCase();
    if (query.length === 0 || !filterFn) {
      return items;
    }

    return items.filter((item) => filterFn(item, query));
  }, [items, debouncedQuery, filterFn]);

  return {
    searchQuery,
    setSearchQuery,
    filteredItems,
  };
};
