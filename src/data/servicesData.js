import { arrOfProjects } from "./projects/arrOfProjects";
import {
  apartmentsCategoryData,
  housesCategoryData,
  businessCategoryData,
  architectureCategoryData,
} from "./projectCategories";

const apartmentProjectsCount = arrOfProjects.filter(
  (item) => item.categoryEn === apartmentsCategoryData.categoryEn
).length;

const houseProjectsCount = arrOfProjects.filter(
  (item) => item.categoryEn === housesCategoryData.categoryEn
).length;

const businessProjectsCount = arrOfProjects.filter(
  (item) => item.categoryEn === businessCategoryData.categoryEn
).length;

const architectureProjectsCount = arrOfProjects.filter(
  (item) => item.categoryEn === architectureCategoryData.categoryEn
).length;

export const servicesData = [
  {
    slug: apartmentsCategoryData.id,
    categoryUk: "Дизайн інтер’єру квартир",
    categoryEn: "Apartment interior design",
    cardTextUk:
      "Створюємо комфортні, стильні та функціональні інтер’єри для квартир будь-якої площі.",
    cardTextEn:
      "We create comfortable, stylish and functional interiors for apartments of any size.",
    projectsCount: apartmentProjectsCount,
    titleUk: "Особливості розробки дизайну квартири",
    titleEn: "Features of apartment design",
    text1Uk:
      "Продуманий дизайн інтер’єру створює гармонійний простір, який відображає ваш стиль життя. Ми враховуємо кожну деталь, поєднуючи естетику, комфорт та функціональність.",
    text1En:
      "Thoughtful interior design creates a harmonious space that reflects your lifestyle. We take into account every detail, combining aesthetics, comfort and functionality.",
    text2Uk:
      "Наш підхід передбачає ретельне планування, зонування та використання якісних матеріалів. Завдяки цьому ви отримуєте не просто красивий інтер’єр, а продумане рішення для комфортного життя.",
    text2En:
      "Our approach involves careful planning, zoning, and the use of high-quality materials. Thanks to this, you get not just a beautiful interior, but a thoughtful solution for a comfortable life.",
    images: [
      "/images/dev/servicesPage/servicesInteriorDesignApartments/service-interior-design-apartments-hero.webp",
      "/images/dev/servicesPage/servicesInteriorDesignApartments/service-interior-design-apartments-second-img.webp",
      "/images/dev/servicesPage/servicesInteriorDesignApartments/service-interior-design-apartments-third-img.webp",
    ],
    imageMain: "/images/dev/servicesPage/all-services-design-apartments.webp",
  },
  {
    slug: housesCategoryData.id,
    categoryUk: "Дизайн інтер’єру будинків",
    categoryEn: "House interior design",
    cardTextUk:
      "Розробляємо концепції, що враховують архітектуру, ландшафт і особливості вашого будинку.",
    cardTextEn:
      "We develop concepts that take into account the architecture, landscape and features of your home.",
    projectsCount: houseProjectsCount,
    titleUk: "ОСОБЛИВОСТІ РОЗРОБКИ ДИЗАЙНУ БУДИНКУ",
    titleEn: "FEATURES OF HOUSE DESIGN DEVELOPMENT",
    text1Uk: "",
    text1En: "",
    text2Uk: "",
    text2En: "",
    images: [
      "/images/dev/servicesPage/servicesInteriorDesignHouses/service-interior-design-houses-hero.webp",
      "/images/dev/servicesPage/servicesInteriorDesignHouses/service-interior-design-houses-second-img.webp",
      "/images/dev/servicesPage/servicesInteriorDesignHouses/service-interior-design-houses-third-img.webp",
    ],
    imageMain: "/images/dev/servicesPage/all-services-design-houses.webp",
  },
  {
    slug: businessCategoryData.id,
    categoryUk: "Дизайн інтер’єру комерційних приміщень",
    categoryEn: "Commercial interior design",
    cardTextUk:
      "Розробка унікальних рішень для бізнесу: магазини, офіси, ресторани, готелі.",
    cardTextEn:
      "Development of unique solutions for business: shops, offices, restaurants, hotels.",
    projectsCount: businessProjectsCount,
    titleUk: "ОСОБЛИВОСТІ РОЗРОБКИ ДИЗАЙНУ КОМЕРЦІЙНИХ ПРИМІЩЕНЬ",
    titleEn: "PECULIARITIES OF COMMERCIAL PREMISES DESIGN",
    text1Uk: "",
    text1En: "",
    text2Uk: "",
    text2En: "",
    images: [
      "/images/dev/servicesPage/servicesInteriorDesignCommercialPremises/service-interior-design-commercial-hero.webp",
      "/images/dev/servicesPage/servicesInteriorDesignCommercialPremises/service-interior-design-commercial-second-img.webp",
      "/images/dev/servicesPage/servicesInteriorDesignCommercialPremises/service-interior-design-commercial-third-img.webp",
    ],
    imageMain: "/images/dev/servicesPage/all-services-design-commercial.webp",
  },
  {
    slug: architectureCategoryData.id,
    categoryUk: "Архітектурне проєктування",
    categoryEn: "Architectural design",
    cardTextUk:
      "Комплексне створення будівель: від ескізу до робочої документації.",
    cardTextEn:
      "Complex building design: from sketch to working documentation.",
    projectsCount: architectureProjectsCount,
    titleUk: "ВІД ІДЕЇ — ДО ФУНДАМЕНТУ",
    titleEn: "FROM IDEA TO FOUNDATION",
    text1Uk: "",
    text1En: "",
    text2Uk: "",
    text2En: "",
    images: [
      "/images/dev/servicesPage/servicesArchitecturalDesign/service-architectural-design-hero.webp",
      "/images/dev/servicesPage/servicesArchitecturalDesign/service-architectural-design-second-img.webp",
      "/images/dev/servicesPage/servicesArchitecturalDesign/service-architectural-design-third-img.webp",
    ],
    imageMain:
      "/images/dev/servicesPage/all-services-architectural-design.webp",
  },
];
