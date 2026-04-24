import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useKeyboardListNavigation } from '@/shared/lib';
import { type Location, LOCATIONS } from '@/features/location-select/config/locations.ts';
import { useLocationSearch } from '@/features/location-select';

interface LocationSelectMenuProps {
  onClose: () => void;
  onSelect: (value: string) => void;
  isOpen: boolean;
}

export const LocationSelectMenu = ({ onClose, onSelect, isOpen }: LocationSelectMenuProps) => {
  const { searchQuery, setSearchQuery, filteredItems } = useLocationSearch({
    items: LOCATIONS,
    filterFn: (city, query) => city.label.toLowerCase().includes(query),
  });

  const { inputRef, handleInputKeyDown, handleInputFocus, listRef, handleListKeyDown, itemRefs } =
    useKeyboardListNavigation({
      items: filteredItems,
      searchQuery,
      getItemKey: (city: Location) => city.value,
    });

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

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="fixed inset-0 flex items-center z-50  justify-center bg-black/20 backdrop-blur-sm select-none"
      onClick={onClose}
    >
      <div
        className="relative w-100 max-w-100 bg-white p-6 rounded-2xl select-text"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="mb-6">
          <h2 id="dialog-title" className="text-2xl">
            Выберите город
          </h2>
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
          onFocus={handleInputFocus}
          ref={inputRef}
        />

        <ul
          className="flex flex-col gap-2 mt-10 max-h-106 overflow-y-auto scroll-smooth"
          ref={listRef}
          onKeyDown={(e) => handleListKeyDown(e)}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map(({ label, value }) => (
              <li className="hover:bg-gray" key={value}>
                <button
                  aria-label="Выбрать город"
                  onClick={() => onSelect(label)}
                  className="cursor-pointer w-full text-left py-2"
                  type="button"
                  ref={(el) => {
                    if (el) {
                      itemRefs.current.set(value, el);
                    } else {
                      itemRefs.current.delete(value);
                    }
                  }}
                >
                  {label}
                </button>
              </li>
            ))
          ) : (
            <li>Результатов не найдено</li>
          )}
        </ul>
      </div>
    </div>,
    document.body,
  );
};
