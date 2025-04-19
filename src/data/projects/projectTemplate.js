// посилання буде утворюватися при map - `/portfolio${slug}`

export const projectTemplate = {
  slug: "",
  categoryUk: "", // apartmentsCategoryData.categoryUk housesCategoryData.categoryUk businessCategoryData.categoryUk architectureCategoryData.categoryUk
  categoryEn: "", // apartmentsCategoryData.categoryEn housesCategoryData.categoryEn businessCategoryData.categoryEn architectureCategoryData.categoryEn
  mainImage: "", // она же идет на портфолиоАйдиХеро
  altUk: "",
  altEn: "",
  typeUk: "", // Квартира Будинок Комерція Архітектура
  typeEn: "",
  locationUk: "", // Центральний ЖК “Premium”
  locationEn: "",
  area: "", // 49
  styleUk: "", // сучасний мінімалізм
  styleEn: "",
  year: "", // 2024

  // all arguments before this are for portfolioPage, and all after - will be for idPage
  videoLink: "",
  solutions: [
    {
      type: "floorPlan",
      titleUk: "",
      titleEn: "",
      textsUk: ["", ""],
      textsEn: ["", ""],
      images: [
        { src: "", altUk: "", altEn: "" },
        { src: "", altUk: "", altEn: "" },
      ],
    },
    {
      type: "design",
      titleUk: "",
      titleEn: "",
      textsUk: ["", ""],
      textsEn: ["", ""],
      images: [{ src: "", altUk: "", altEn: "" }],
    },
    {
      type: "visualization",
      titleUk: "",
      titleEn: "",
      textsUk: ["", ""],
      textsEn: ["", ""],
      images: [
        { src: "", altUk: "", altEn: "" },
        { src: "", altUk: "", altEn: "" },
        { src: "", altUk: "", altEn: "" },
      ],
    },
  ],
};

// // посилання буде утворюватися при map - `/portfolio${slug}`

// export const projectTemplate = {
//   slug: "",
//   categoryUk: "", // Квартири Будинки Комерція Архітектура
//   categoryEn: "",
//   mainImage: "", // она же идет на портфолиоАйдиХеро
//   typeUk: "", // Квартира Будинок Комерція Архітектура
//   typeEn: "",
//   locationUk: "", // Центральний ЖК “Premium”
//   locationEn: "",
//   area: "", // 49
//   styleUk: "", // сучасний мінімалізм
//   styleEn: "",
//   year: "", // 2024

//   // all arguments before this are for portfolioPage, and all after - will be for idPage
//   videoLink: "",
//   solutions: [
//     {
//       type: "floorPlan",
//       titleUk: "",
//       titleEn: "",
//       textsUk: ["", ""],
//       textsEn: ["", ""],
//       images: [
//         { src: "", alt: "" },
//         { src: "", alt: "" },
//       ],
//     },
//     {
//       type: "design",
//       titleUk: "",
//       titleEn: "",
//       textsUk: ["", ""],
//       textsEn: ["", ""],
//       images: [{ src: "", alt: "" }],
//     },
//     {
//       type: "visualization",
//       titleUk: "",
//       titleEn: "",
//       textsUk: ["", ""],
//       textsEn: ["", ""],
//       images: [
//         { src: "", alt: "" },
//         { src: "", alt: "" },
//         { src: "", alt: "" },
//       ],
//     },
//   ],
// };
