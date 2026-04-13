import { LOCATIONS } from '@/features/location-select/config/locations.ts';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface LocationSelectMenuProps {
  onClose: () => void;
  onSelect: (value: string) => void;
}

export const LocationSelectMenu = ({ onClose, onSelect }: LocationSelectMenuProps) => {
  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm select-none" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 -translate-1/2 w-[400px] max-w-[400px] bg-white p-6 rounded-2xl select-text">
        <header className="mb-10">
          <h2 className="text-2xl">Выберете город</h2>
        </header>

        <button className="absolute top-4 right-4 cursor-pointer" type="button" onClick={onClose}>
          <X className="text-dark-gray" />
        </button>

        <ul className="flex flex-col gap-2 overflow-y-auto scroll-smooth">
          {LOCATIONS.map(({ label, value }) => (
            <li className="hover:bg-gray" key={value}>
              <button
                onClick={() => onSelect(label)}
                className="cursor-pointer w-full text-left py-2"
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>,
    document.body,
  );
};
