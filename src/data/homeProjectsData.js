import { navLinksData } from "./navLinksData";

const portfolioHref = navLinksData.find(
  (el) => el.titleEn === "Portfolio"
).href;

export const homeProjectsData = [
  {
    path: portfolioHref,
    titleUk: "Дизайн інтер’єру квартир",
    titleEn: "",
    image: "",
  },
  {
    path: portfolioHref,
    titleUk: "Дизайн інтер’єру будинків",
    titleEn: "",
    image: "",
  },
  {
    path: portfolioHref,
    titleUk: "Дизайн інтер’єру комерційних приміщень",
    titleEn: "",
    image: "",
  },
];
