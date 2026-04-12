import { useEffect, useState } from 'react';

export const useBurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  const toggleBurgerButton = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    toggleBurgerButton,
  };
};
