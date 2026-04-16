import { useCallback, useEffect, useRef, useState } from 'react';
import * as React from 'react';

interface UseKeyboardListNavigationOptions<T> {
  items: T[];
  getItemKey: (item: T) => string;
  searchQuery: string;
}

export const useKeyboardListNavigation = <T>({
  items,
  getItemKey,
  searchQuery,
}: UseKeyboardListNavigationOptions<T>) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    setActiveIndex(-1);
  }, [searchQuery]);

  const focusItem = useCallback(
    (index: number) => {
      const item = items[index];
      if (item) {
        itemRefs.current.get(getItemKey(item))?.focus();
      }
    },
    [items, getItemKey],
  );

  const handleListKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (activeIndex === items.length - 1) {
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
    [items.length, focusItem, activeIndex],
  );

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(0);
        focusItem(0);
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const nextIndex = items.length - 1;
        setActiveIndex(nextIndex);
        focusItem(nextIndex);
      }
    },
    [items.length, focusItem],
  );

  const handleInputFocus = useCallback(() => {
    setActiveIndex(-1);
  }, []);

  return {
    handleInputFocus,
    inputRef,
    listRef,
    handleInputKeyDown,
    handleListKeyDown,
    itemRefs,
  };
};
