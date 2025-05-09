// path в будущем возможно изменится и по каждому направлению будет свой href

import { navLinksData } from "./navLinksData";
import {
  apartmentsCategoryData,
  businessCategoryData,
  housesCategoryData,
} from "./projectCategories";

const portfolioHref = navLinksData.find(
  (el) => el.titleEn === "Portfolio"
).href;

export const homeProjectsData = [
  {
    // path: portfolioHref,
    path: `${portfolioHref}?category=${apartmentsCategoryData.categoryEn}`,
    titleUk: "Дизайн інтер’єру квартир",
    titleEn: "Apartment interior design",
    image:
      "/images/dev/homePage/home-page-ready-project-design-apartsment.webp",
    imgAltUk: "Квартири",
    imgAltEn: "Apartsments",
  },
  {
    // path: portfolioHref,
    path: `${portfolioHref}?category=${housesCategoryData.categoryEn}`,
    titleUk: "Дизайн інтер’єру будинків",
    titleEn: "House interior design",
    image: "/images/dev/homePage/home-page-ready-project-design-house.webp",
    imgAltUk: "Будинки",
    imgAltEn: "Houses",
  },
  {
    // path: portfolioHref,
    path: `${portfolioHref}?category=${businessCategoryData.categoryEn}`,
    titleUk: "Дизайн інтер’єру комерційних приміщень",
    titleEn: "Commercial interior design",
    image:
      "/images/dev/homePage/home-page-ready-project-design-commercial-premises.webp",
    imgAltUk: "Комерційні приміщення",
    imgAltEn: "Commercial premises",
  },
];
