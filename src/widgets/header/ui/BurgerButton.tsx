export const BurgerButton = () => {
  return (
    <button
      className="flex flex-col items-center justify-center gap-2 w-10 h-10 cursor-pointer"
      aria-label="Меню"
      type="button"
    >
      <span className="w-5 h-0.5 bg-dark-green rounded-full"></span>
      <span className="w-5 h-0.5 bg-dark-green rounded-full"></span>
      <span className="w-5 h-0.5 bg-dark-green rounded-full"></span>
    </button>
  );
};
