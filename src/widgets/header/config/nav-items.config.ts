interface NavItem {
  label: string;
  slug: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Компьютеры', slug: 'computers' },
  { label: 'Блоки питания', slug: 'power-supplies' },
  { label: 'Видеокарты', slug: 'video-cards' },
  { label: 'Процессоры', slug: 'processors' },
  { label: 'Мониторы', slug: 'monitors' },
  { label: 'Системы охлаждения', slug: 'cooling-systems' },
  { label: 'Клавиатуры', slug: 'keyboards' },
];
