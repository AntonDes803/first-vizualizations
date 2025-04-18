import {
  apartmentDesignHref,
  architecturalDesignHref,
  commercialDesignHref,
  houseDesignHref,
} from "./navLinksData";

const apartmentDesignSlug = apartmentDesignHref.slice(1);
const architecturalDesignSlug = architecturalDesignHref.slice(1);
const commercialDesignSlug = commercialDesignHref.slice(1);
const houseDesignSlug = houseDesignHref.slice(1);

export const servicesData = [
  {
    slug: apartmentDesignSlug,
    categoryUk: "Дизайн інтер’єру квартир",
    categoryEn: "",
    cardTextUk:
      "Створюємо комфортні, стильні та функціональні інтер’єри для квартир будь-якої площі.",
    cardTextEn: "",
    projectsCount: "45",
    titleUk: "Особливості розробки дизайну квартири",
    titleEn: "",
    text1Uk:
      "Продуманий дизайн інтер’єру створює гармонійний простір, який відображає ваш стиль життя. Ми враховуємо кожну деталь, поєднуючи естетику, комфорт та функціональність.",
    text1En: "",
    text2Uk:
      "Наш підхід передбачає ретельне планування, зонування та використання якісних матеріалів. Завдяки цьому ви отримуєте не просто красивий інтер’єр, а продумане рішення для комфортного життя.",
    text2En: "",
    images: [
      "/images/dev/homePage/all-services-design-apartments.webp",
      "",
      "",
    ],
    imageMain: "/images/dev/servicesPage/all-services-design-apartments.webp",
  },
  {
    slug: houseDesignSlug,
    categoryUk: "Дизайн інтер’єру будинків",
    categoryEn: "",
    cardTextUk:
      "Розробляємо концепції, що враховують архітектуру, ландшафт і особливості вашого будинку.",
    cardTextEn: "",
    projectsCount: "45",
    titleUk: "",
    titleEn: "",
    text1Uk: "",
    text1En: "",
    text2Uk: "",
    text2En: "",
    images: ["/images/dev/homePage/all-services-design-houses.webp", "", ""],
    imageMain: "/images/dev/servicesPage/all-services-design-houses.webp",
  },
  {
    slug: commercialDesignSlug,
    categoryUk: "Дизайн інтер’єру комерційних приміщень",
    categoryEn: "",
    cardTextUk:
      "Розробка унікальних рішень для бізнесу: магазини, офіси, ресторани, готелі.",
    cardTextEn: "",
    projectsCount: "45",
    titleUk: "",
    titleEn: "",
    text1Uk: "",
    text1En: "",
    text2Uk: "",
    text2En: "",
    images: [
      "/images/dev/homePage/all-services-design-commercial-premises.webp",
      "",
      "",
    ],
    imageMain: "/images/dev/servicesPage/all-services-design-commercial.webp",
  },
  {
    slug: architecturalDesignSlug,
    categoryUk: "Архітектурне проєктування",
    categoryEn: "",
    cardTextUk:
      "Комплексне створення будівель: від ескізу до робочої документації.",
    cardTextEn: "",
    projectsCount: "45",
    titleUk: "",
    titleEn: "",
    text1Uk: "",
    text1En: "",
    text2Uk: "",
    text2En: "",
    images: [
      "/images/dev/homePage/all-services-architectural-design.webp",
      "",
      "",
    ],
    imageMain:
      "/images/dev/servicesPage/all-services-architectural-design.webp",
  },
];
