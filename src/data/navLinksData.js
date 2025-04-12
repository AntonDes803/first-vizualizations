export const navLinksData = [
  {
    titleUk: "Головна",
    titleEn: "Main",
    href: "/",
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
        titleEn: "Apartments design",
        href: "/apartments-design",
      },
      {
        titleUk: "Архітектурне проектування",
        titleEn: "Architectural design",
        href: "/architectural-design",
      },
    ],
  },
];

export const headerNavigation = navLinksData.filter((el) => {
  return el.href !== "/services";
});

export const headerServices = navLinksData.find(
  (el) => el.href === "/services"
);
