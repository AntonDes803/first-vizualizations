export const navLinksData = [
  {
    titleUk: "Головна",
    titleEn: "Main",
    href: "/",
  },
  {
    titleUk: "Послуги",
    titleEn: "Services",

    serviceId: [
      {
        titleUk: "Усі сервіси",
        titleEn: "All services",
        href: "/services",
      },
      {
        titleUk: "Комерційний дизайн",
        titleEn: "Commercial design",
        href: "/services/commercial-design",
      },
      {
        titleUk: "Дизайн будинків",
        titleEn: "House design",
        href: "/services/house-design",
      },
      {
        titleUk: "Дизайн квартир",
        titleEn: "Apartment design",
        href: "/services/apartment-design",
      },
      {
        titleUk: "Архітектурне проєктування",
        titleEn: "Architectural design",
        href: "/services/architectural-design",
      },
    ],
  },
  {
    titleUk: "Про нас",
    titleEn: "About us",
    href: "/about-us",
  },
  {
    titleUk: "Портфоліо",
    titleEn: "Portfolio",
    href: "/portfolio",
  },
  {
    titleUk: "Контакти",
    titleEn: "Contacts",
    href: "/contacts",
  },
  {
    titleUk: "Блог",
    titleEn: "Blog",
    href: "/blog",
  },
];

export const headerNavigation = navLinksData.filter((el) => {
  return el.href !== "/services";
});

export const headerServices = navLinksData.find(
  (el) => el.href === "/services"
);

export const servicesHref = navLinksData.find(
  (el) => el.titleEn === "Services"
).href;

export const aboutUsHref = navLinksData.find(
  (el) => el.titleEn === "About us"
).href;

export const portfolioHref = navLinksData.find(
  (el) => el.titleEn === "Portfolio"
).href;

export const commercialDesignHref = navLinksData
  .find((el) => el.titleEn === "Services")
  .serviceId.find((item) => item.titleEn === "Commercial design")
  .href.slice(9);

export const houseDesignHref = navLinksData
  .find((el) => el.titleEn === "Services")
  .serviceId.find((item) => item.titleEn === "House design")
  .href.slice(9);

export const apartmentDesignHref = navLinksData
  .find((el) => el.titleEn === "Services")
  .serviceId.find((item) => item.titleEn === "Apartment design")
  .href.slice(9);

export const architecturalDesignHref = navLinksData
  .find((el) => el.titleEn === "Services")
  .serviceId.find((item) => item.titleEn === "Architectural design")
  .href.slice(9);
