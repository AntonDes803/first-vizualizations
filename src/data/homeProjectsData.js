// path в будущем возможно изменится и по каждому направлению будет свой href

import { navLinksData } from "./navLinksData";

const portfolioHref = navLinksData.find(
  (el) => el.titleEn === "Portfolio"
).href;

export const homeProjectsData = [
  {
    path: portfolioHref,
    titleUk: "Дизайн інтер’єру квартир",
    titleEn: "Apartment interior design",
    image:
      "/images/dev/homePage/home-page-ready-project-design-apartsment.webp",
    imgAltUk: "Квартири",
    imgAltEn: "Apartsments",
  },
  {
    path: portfolioHref,
    titleUk: "Дизайн інтер’єру будинків",
    titleEn: "House interior design",
    image: "/images/dev/homePage/home-page-ready-project-design-house.webp",
    imgAltUk: "Будинки",
    imgAltEn: "Houses",
  },
  {
    path: portfolioHref,
    titleUk: "Дизайн інтер’єру комерційних приміщень",
    titleEn: "Commercial interior design",
    image:
      "/images/dev/homePage/home-page-ready-project-design-commercial-premises.webp",
    imgAltUk: "Комерційні приміщення",
    imgAltEn: "Commercial premises",
  },
];
