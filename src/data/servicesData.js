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
    text1Uk: "Дизайн будинку — це більше, ніж просто інтер’єр. Це створення простору, де кожна кімната підтримує ваш ритм життя і підкреслює індивідуальність власників.",
    text1En: "House design is more than just interior decoration. It is about creating a space where every room supports your lifestyle and highlights the owners' individuality.",
    text2Uk: "Ми ретельно продумуємо планування, враховуємо взаємозв’язок зон, природнє освітлення та особливості архітектури. Ваш будинок буде затишним, функціональним і гармонійним.",
    text2En: "We carefully plan layouts, consider the connection between zones, natural lighting, and architectural features. Your home will be cozy, functional, and harmonious.",
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
    text1Uk: "Комерційний інтер’єр має працювати на ваш бізнес. Ми створюємо простори, що привертають увагу клієнтів, сприяють комфорту й підтримують імідж бренду.",
    text1En: "Commercial interior must work for your business. We create spaces that attract customers, provide comfort, and enhance brand image.",
    text2Uk: "У наших рішеннях ми поєднуємо функціональність, естетику та маркетингові завдання. Ваш простір стане ефективним інструментом для зростання бізнесу.",
    text2En: "In our solutions, we combine functionality, aesthetics, and marketing goals. Your space will become an effective tool for business growth.",
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
    titleUk: "Особливості архітектурного проєктування",
    titleEn: "Features of architectural design",
    text1Uk: "Архітектурний проєкт — це основа для створення будинку вашої мрії. Ми розробляємо концепції, які поєднують естетику, функціональність та гармонійне розміщення на ділянці.",
    text1En: "Architectural design is the foundation for creating the home of your dreams. We develop concepts that combine aesthetics, functionality, and harmonious site placement.",
    text2Uk: "Наш підхід враховує особливості ділянки, ландшафт, інсоляцію та ваші побажання. Результат — продуманий проєкт, готовий для реалізації і узгодження.",
    text2En: "Our approach considers site specifics, landscape, sunlight, and your wishes. The result is a well-thought-out project ready for implementation and approval.",
    images: [
      "/images/dev/servicesPage/servicesArchitecturalDesign/service-architectural-design-hero.webp",
      "/images/dev/servicesPage/servicesArchitecturalDesign/service-architectural-design-second-img.webp",
      "/images/dev/servicesPage/servicesArchitecturalDesign/service-architectural-design-third-img.webp",
    ],
    imageMain:
      "/images/dev/servicesPage/all-services-architectural-design.webp",
  },
];
