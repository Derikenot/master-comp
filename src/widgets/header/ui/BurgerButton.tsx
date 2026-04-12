export const BurgerButton = () => {
  return (
    <button className="flex flex-col justify-between gap-2" aria-label="Меню" type="button">
      <span className="w-5 h-0.5 bg-dark-green rounded-full"></span>
      <span className="w-5 h-0.5 bg-dark-green rounded-full"></span>
      <span className="w-5 h-0.5 bg-dark-green rounded-full"></span>
    </button>
  );
};
