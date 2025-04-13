import { navLinksData } from "./navLinksData";

const portfolioHref = navLinksData.find(
  (el) => el.titleEn === "Portfolio"
).href;

export const projectsData = [
  {
    path: portfolioHref,
    categoryUk: "Дизайн інтер’єру квартир",
    categoryEn: "",
    image: "",
  },
  {
    path: portfolioHref,
    categoryUk: "Дизайн інтер’єру будинків",
    categoryEn: "",
    image: "",
  },
  {
    path: portfolioHref,
    categoryUk: "Дизайн інтер’єру комерційних приміщень",
    categoryEn: "",
    image: "",
  },
];
