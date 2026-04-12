interface SecondaryNavItem {
  label: string;
  href: string;
}

export const SECONDARY_NAV_ITEMS: SecondaryNavItem[] = [
  { label: 'Доставка', href: '/delivery' },
  { label: 'Магазины', href: '/shops' },
  { label: 'Акции', href: '/discounts' },
];
