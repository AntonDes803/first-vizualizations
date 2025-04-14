// параметр number можна отримувати динамічно - (порядковий номер елементу+1)/array.length

import { navLinksData } from './navLinksData';

const portfolioHref = navLinksData.find(
  (el) => el.titleEn === 'Portfolio'
).href;

export const homeHeroSliderData = [
  {
    path: portfolioHref,
    titleUk: 'Дизайн інтер’єру квартир',
    titleEn: '',
    image: '/images/dev/homePage/home-slider-design-apartments.webp',
  },
  {
    path: portfolioHref,
    titleUk: 'Дизайн інтер’єру будинків',
    titleEn: '',
    image: '/images/dev/homePage/home-slider-design-houses.webp',
  },
  {
    path: portfolioHref,
    titleUk: 'Дизайн інтер’єру комерційних приміщень',
    titleEn: '',
    image: '/images/dev/homePage/home-slider-design-commercial-premises.webp',
  },
];
