import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useBurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.key]);

  const toggleBurgerButton = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    toggleBurgerButton,
  };
};
