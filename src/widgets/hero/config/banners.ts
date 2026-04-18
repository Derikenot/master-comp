export interface Banner {
  imageHref: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export const BANNERS: Banner[] = [
  {
    imageHref: '/public/images/banners/banner-1.webp',
    title: 'Встречайте новую видеокарту',
    description: 'Оформите предзаказ со скидкой 15% на новую видеокарту RTX 5080!',
    buttonLabel: 'Предзаказ',
    buttonHref: '/orders',
  },
  {
    imageHref: '/public/images/banners/banner-1.webp',
    title: 'Откройте новый уровень игровой мощности',
    description:
      'Новая RTX 5080 обеспечивает максимум FPS и реалистичную графику — успейте заказать со скидкой 15%!',
    buttonLabel: 'Купить сейчас',
    buttonHref: '/sales',
  },
  {
    imageHref: '/public/images/banners/banner-1.webp',
    title: 'Будущее графики уже здесь',
    description:
      'Почувствуйте невероятную производительность и трассировку лучей нового поколения с RTX 5080.',
    buttonLabel: 'Подробнее',
    buttonHref: '/more',
  },
  {
    imageHref: '/public/images/banners/banner-1.webp',
    title: 'Играй без ограничений',
    description:
      'Забудьте о лагах и компромиссах — RTX 5080 создана для ультра-настроек и максимальной скорости.',
    buttonLabel: 'Заказать',
    buttonHref: '/order',
  },
];
