import { LOCATIONS } from '@/features/location-select/config/locations.ts';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import * as React from 'react';

interface LocationSelectMenuProps {
  onClose: () => void;
  onSelect: (value: string) => void;
  isOpen: boolean;
}

export const LocationSelectMenu = ({ onClose, onSelect, isOpen }: LocationSelectMenuProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    const handleEscapeButtonClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscapeButtonClose);

    return () => window.removeEventListener('keydown', handleEscapeButtonClose);
  }, [isOpen]);

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const listRef = useRef<HTMLUListElement>(null);

  const filteredCities =
    searchQuery.trim().length > 0
      ? LOCATIONS.filter((loc) =>
          loc.label.toLowerCase().includes(searchQuery.trim().toLowerCase()),
        )
      : LOCATIONS;

  const focusCity = (index: number) => {
    const city = filteredCities[index];
    if (city) {
      buttonRefs.current.get(city.value)?.focus();
    }
  };

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = activeIndex + 1 === filteredCities.length ? 0 : activeIndex + 1;
      if (nextIndex === 0) {
        setActiveIndex(-1);
        inputRef.current?.focus();
        return;
      }
      setActiveIndex(nextIndex);
      focusCity(nextIndex);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const nextIndex = activeIndex - 1 < 0 ? filteredCities.length - 1 : activeIndex - 1;
      if (nextIndex === filteredCities.length - 1) {
        setActiveIndex(-1);
        inputRef.current?.focus();
        return;
      }
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

  return createPortal(
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm select-none"
        onClick={onClose}
      >
        <div
          className="relative w-[400px] max-w-[400px] bg-white p-6 rounded-2xl select-text"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="mb-6">
            <h2 className="text-2xl">Выберете город</h2>
          </header>

          <button
            className="group absolute w-11 h-11 flex items-center justify-center top-4 right-4 cursor-pointer"
            type="button"
            onClick={onClose}
          >
            <X className="text-dark-gray duration-200 group-hover:text-black" />
          </button>

          <label className="sr-only" htmlFor="city">
            Искать город
          </label>
          <input
            className=" w-full px-6 py-2 border border-dark-gray rounded-sm"
            type="search"
            id="city"
            name=""
            placeholder="Искать город"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyDown={(e) => handleInputKeyDown(e)}
            onFocus={() => setActiveIndex(0)}
            ref={inputRef}
          />

          <ul
            className="flex flex-col gap-2 mt-10 max-h-106 overflow-y-auto scroll-smooth"
            ref={listRef}
            onKeyDown={(e) => handleListKeyDown(e)}
          >
            {filteredCities.length > 0 ? (
              filteredCities.map(({ label, value }) => (
                <li className="hover:bg-gray" key={value}>
                  <button
                    aria-label="Выбрать город"
                    onClick={() => onSelect(label)}
                    className="cursor-pointer w-full text-left py-2"
                    type="button"
                    ref={(el) => {
                      if (el) {
                        buttonRefs.current.set(value, el);
                      } else {
                        buttonRefs.current.delete(value);
                      }
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))
            ) : (
              <div>Резльтьатов не найдено</div>
            )}
          </ul>
        </div>
      </div>
    </>,
    document.body,
  );
};
