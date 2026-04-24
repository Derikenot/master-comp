export interface Category {
  label: string;
  linkHref: string;
  imageHref: string;
}

export const CATEGORIES: Category[] = [
  { label: 'Видеокарты', linkHref: '/videocards', imageHref: '/images/categories/videocard.webp' },
  {
    label: 'Материнские платы',
    linkHref: '/motherboards',
    imageHref: '/images/categories/motherboard.webp',
  },
  { label: 'Мониторы', linkHref: '/monitors', imageHref: '/images/categories/monitor.webp' },
];
