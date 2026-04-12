import { ChartNoAxesColumn, Heart, type LucideIcon, ShoppingBag, UserRound } from 'lucide-react';

interface NavActionItem {
  label: string;
  icon: LucideIcon;
  href: string;
  hiddenOnMobile?: boolean;
}

export const NAV_ACTIONS: NavActionItem[] = [
  { label: 'Избранное', icon: Heart, href: '/favorites' },
  { label: 'Корзина', icon: ShoppingBag, href: '/cart' },
  { label: 'Личный кабинет', icon: UserRound, href: '/account' },
  { label: 'Статистика', icon: ChartNoAxesColumn, href: '/metrics', hiddenOnMobile: true },
];
