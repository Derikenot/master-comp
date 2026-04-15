import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as React from 'react';

interface UseKeyboardListNavigationOptions<T> {
  items: T[];
  getItemKey: (item: T) => string;
  filterFn?: (item: T, query: string) => boolean;
}

export const useKeyboardListNavigation = <T>({
  items,
  getItemKey,
  filterFn,
}: UseKeyboardListNavigationOptions<T>) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map());

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query.length === 0 || !filterFn) {
      return items;
    }

    return items.filter((item) => filterFn(item, query));
  }, [items, searchQuery, filterFn]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [searchQuery]);

  const focusItem = useCallback(
    (index: number) => {
      const item = filteredItems[index];
      if (item) {
        itemRefs.current.get(getItemKey(item))?.focus();
      }
    },
    [filteredItems, getItemKey],
  );

  const handleListKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (filteredItems.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (activeIndex === filteredItems.length - 1) {
          setActiveIndex(-1);
          inputRef.current?.focus();
          return;
        }
        const nextIndex = activeIndex + 1;
        setActiveIndex(nextIndex);
        focusItem(nextIndex);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (activeIndex === 0) {
          setActiveIndex(-1);
          inputRef.current?.focus();
          return;
        }
        const nextIndex = activeIndex - 1;
        setActiveIndex(nextIndex);
        focusItem(nextIndex);
      }
    },
    [filteredItems.length, focusItem],
  );

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (filteredItems.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(0);
        focusItem(0);
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const nextIndex = filteredItems.length - 1;
        setActiveIndex(nextIndex);
        focusItem(nextIndex);
      }
    },
    [filteredItems.length, focusItem],
  );

  const handleInputFocus = useCallback(() => {
    setActiveIndex(-1);
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    handleInputFocus,
    inputRef,
    listRef,
    handleInputKeyDown,
    handleListKeyDown,
    filteredItems,
    itemRefs,
  };
};
