export const projectCategories = [
  {
    id: "all",
    // categoryUk: "Усі",
    // categoryEn: "All",
    categoryUk: "усі",
    categoryEn: "all",
  },
  {
    id: "apartment-design",
    // categoryUk: "Квартири",
    // categoryEn: "Apartments",
    categoryUk: "квартири",
    categoryEn: "apartments",
  },
  {
    id: "house-design",
    // categoryUk: "Будинки",
    // categoryEn: "Houses",
    categoryUk: "будинки",
    categoryEn: "houses",
  },
  {
    id: "commercial-design",
    // categoryUk: "Комерція",
    // categoryEn: "Business",
    categoryUk: "комерція",
    categoryEn: "business",
  },
  {
    id: "architectural-design",
    // categoryUk: "Архітектура",
    // categoryEn: "Architecture",
    categoryUk: "архітектура",
    categoryEn: "architecture",
  },
];

export const apartmentsCategoryData = projectCategories.find(
  (item) => item.id === "apartment-design"
);

export const housesCategoryData = projectCategories.find(
  (item) => item.id === "house-design"
);

export const businessCategoryData = projectCategories.find(
  (item) => item.id === "commercial-design"
);

export const architectureCategoryData = projectCategories.find(
  (item) => item.id === "architectural-design"
);
