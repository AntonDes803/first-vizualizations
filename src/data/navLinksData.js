export const navLinksData = [
  {
    titleUk: "Головна",
    titleEn: "Main",
    href: "/",
  },
  {
    titleUk: "Усі послуги",
    titleEn: "All services",
    href: "/services",
    serviceId: [
      {
        titleUk: "Комерційний дизайн",
        titleEn: "Commercial design",
        href: "/commercial-design",
      },
      {
        titleUk: "Дизайн будинків",
        titleEn: "House design",
        href: "/house-design",
      },
      {
        titleUk: "Дизайн квартир",
        titleEn: "Apartment design",
        href: "/apartment-design",
      },
      {
        titleUk: "Архітектурне проєктування",
        titleEn: "Architectural design",
        href: "/architectural-design",
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

export const aboutUsHref = navLinksData.find(
  (el) => el.titleEn === "About us"
).href;

export const portfolioHref = navLinksData.find(
  (el) => el.titleEn === "Portfolio"
).href;

export const commercialDesignHref = navLinksData
  .find((el) => el.titleEn === "All services")
  .serviceId.find((item) => item.titleEn === "Commercial design").href;

export const houseDesignHref = navLinksData
  .find((el) => el.titleEn === "All services")
  .serviceId.find((item) => item.titleEn === "House design").href;

export const apartmentDesignHref = navLinksData
  .find((el) => el.titleEn === "All services")
  .serviceId.find((item) => item.titleEn === "Apartment design").href;

export const architecturalDesignHref = navLinksData
  .find((el) => el.titleEn === "All services")
  .serviceId.find((item) => item.titleEn === "Architectural design").href;
