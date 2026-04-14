import { useMemo, useRef, useState } from 'react';
import { LOCATIONS } from '@/features/location-select/config/locations.ts';
import * as React from 'react';

export const useKeyboardListNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const listRef = useRef<HTMLUListElement>(null);

  const filteredCities = useMemo(
    () =>
      searchQuery.trim().length > 0
        ? LOCATIONS.filter((loc) =>
            loc.label.toLowerCase().includes(searchQuery.trim().toLowerCase()),
          )
        : LOCATIONS,
    [searchQuery],
  );

  const focusCity = (index: number) => {
    const city = filteredCities[index];
    if (city) {
      buttonRefs.current.get(city.value)?.focus();
    }
  };

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (activeIndex === filteredCities.length - 1) {
        setActiveIndex(-1);
        inputRef.current?.focus();
        return;
      }
      const nextIndex = activeIndex + 1;
      setActiveIndex(nextIndex);
      focusCity(nextIndex);
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
      focusCity(nextIndex);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      if (buttonRefs.current.size > 0) {
        setActiveIndex(0);
        focusCity(0);
      }
    }

    if (e.key === 'ArrowUp') {
      if (buttonRefs.current.size > 0) {
        const nextIndex = filteredCities.length - 1;
        setActiveIndex(nextIndex);
        focusCity(nextIndex);
      }
    }
  };

  const handleInputFocus = () => {
    setActiveIndex(-1);
  };

  return {
    searchQuery,
    setSearchQuery,
    handleInputFocus,
    inputRef,
    listRef,
    handleInputKeyDown,
    handleListKeyDown,
    filteredCities,
    buttonRefs,
  };
};
