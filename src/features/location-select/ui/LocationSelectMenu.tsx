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
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const listRef = useRef<HTMLUListElement>(null);

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
  }, [isOpen, onClose]);

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = activeIndex + 1 === LOCATIONS.length ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
      buttonRefs.current[nextIndex]?.focus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const nextIndex = activeIndex - 1 < 0 ? LOCATIONS.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
      buttonRefs.current[nextIndex]?.focus();
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
            ref={inputRef}
          />

          <ul
            className="flex flex-col gap-2 mt-10 max-h-106 overflow-y-auto scroll-smooth"
            ref={listRef}
            onKeyDown={(e) => handleListKeyDown(e)}
          >
            {LOCATIONS.map(({ label, value }, index) => (
              <li className="hover:bg-gray" key={value}>
                <button
                  aria-label="Выбрать город"
                  onClick={() => onSelect(label)}
                  className="cursor-pointer w-full text-left py-2"
                  type="button"
                  ref={(el) => {
                    buttonRefs.current[index] = el;
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>,
    document.body,
  );
};
