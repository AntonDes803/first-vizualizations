// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import CustomLink from "../CustomLink/CustomLink";
// import { i18n } from "@/dictionaries/i18n.config";
// import { projectCategories } from "@/data/projectCategories";
// import { arrOfProjects } from "@/data/projects/arrOfProjects";
// import { portfolioHref } from "@/data/navLinksData";
// import styles from "./FilterPortfolio.module.scss";

// const FilterPortfolio = ({ lang, dictionary }) => {
//   const [activeProjectCategoryId, setActiveProjectCategoryId] = useState(
//     projectCategories[0].id
//   );
//   console.log("activeProjectCategoryId", activeProjectCategoryId);
//   // Мапимо категорії для кнопок фільтра (не розумію навіщо)
//   const filterCategories = projectCategories.map((project) => ({
//     id: project.id,
//     label:
//       lang === i18n.locales[0]
//         ? project.categoryUk.toUpperCase()
//         : project.categoryEn.toUpperCase(),
//   }));
//   // console.log("filterCategories", filterCategories);

//   // Отримуємо текст категорії для порівняння з полем у проєктах
//   const activeCategoryText =
//     activeProjectCategoryId === projectCategories[0].id
//       ? null
//       : lang === i18n.locales[0]
//       ? projectCategories.find((proj) => proj.id === activeProjectCategoryId)
//           ?.categoryUk
//       : projectCategories.find((proj) => proj.id === activeProjectCategoryId)
//           ?.categoryEn;

//   // Фільтруємо проєкти
//   const filteredProjects = activeCategoryText
//     ? arrOfProjects.filter((proj) =>
//         lang === i18n.locales[0]
//           ? proj.categoryUk === activeCategoryText
//           : proj.categoryEn === activeCategoryText
//       )
//     : arrOfProjects;

//   return (
//     <>
//       <ul className={styles.filterBlock}>
//         {filterCategories.map((item) => (
//           <li
//             key={item.id}
//             className={`${styles.filterItem} ${
//               activeProjectCategoryId === item.id ? styles.filterItemActive : ""
//             }`}
//             onClick={() => setActiveProjectCategoryId(item.id)}
//           >
//             {item.label}
//           </li>
//         ))}
//       </ul>

//       <ul className={styles.projectList}>
//         {filteredProjects.map((item) => (
//           <li key={item.slug} className={styles.projectItem}>
//             <div className={styles.imgWrapper}>
//               <Image
//                 className={styles.img}
//                 src={item.mainImage}
//                 alt={lang === i18n.locales[0] ? item.altUk : item.altEn}
//                 // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px"
//                 sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
//                 fill={true}
//               />
//             </div>

//             <div className={styles.contentWrapper}>
//               <p className={styles.type}>
//                 {(lang === i18n.locales[0]
//                   ? item.typeUk
//                   : item.typeEn
//                 ).toUpperCase()}
//               </p>
//               <p className={styles.location}>
//                 {lang === i18n.locales[0] ? item.locationUk : item.locationEn}
//               </p>
//               {item.area && (
//                 <p className={styles.area}>
//                   <span>{dictionary.area}</span>
//                   {item.area} {dictionary.measure}
//                   <sup>2</sup>
//                 </p>
//               )}
//               {item.styleUk && (
//                 <p className={styles.style}>
//                   <span>{dictionary.style}</span>
//                   {lang === i18n.locales[0] ? item.styleUk : item.styleEn}
//                 </p>
//               )}
//               {item.year && (
//                 <p className={styles.year}>
//                   {item.year}
//                   <span>{dictionary.year}</span>
//                 </p>
//               )}
//               <CustomLink
//                 linkCustomClass=""
//                 iconCustomClass=""
//                 href={`${portfolioHref}/${item.slug}`}
//                 lang={lang}
//                 text={dictionary.cardLinkText}
//               />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default FilterPortfolio;

"use client";
import { useState } from "react";
import Image from "next/image";
import CustomLink from "../CustomLink/CustomLink";
import { i18n } from "@/dictionaries/i18n.config";
import { projectCategories } from "@/data/projectCategories";
import { arrOfProjects } from "@/data/projects/arrOfProjects";
import { portfolioHref } from "@/data/navLinksData";
import styles from "./FilterPortfolio.module.scss";

const FilterPortfolio = ({ lang, dictionary }) => {
  // const [activeProjectCategoryId, setActiveProjectCategoryId] = useState(
  //   projectCategories[0].id
  // );
  // категория, по которой фильтруем
  const [filteredCategoryEn, setFilteredCategoryEn] = useState(
    projectCategories[0].categoryEn
  );

  // Мапимо категорії для кнопок фільтра
  // const filterCategories = projectCategories.map((project) => ({
  //   id: project.id,
  //   categoryUk: project.categoryUk.toUpperCase(),
  //   categoryEn: project.categoryEn.toUpperCase(),
  // }));

  // будем использовать для кнопок фильтра
  const filterCategories = [...projectCategories];

  // Отримуємо текст категорії для порівняння з полем у проєктах (исключается записіваем категории сразу в state)
  // const activeCategoryText =
  //   activeProjectCategoryId === projectCategories[0].id
  //     ? null
  //     : lang === i18n.locales[0]
  //     ? projectCategories.find((proj) => proj.id === activeProjectCategoryId)
  //         ?.categoryUk
  //     : projectCategories.find((proj) => proj.id === activeProjectCategoryId)
  //         ?.categoryEn;
  // console.log("activeCategoryText", activeCategoryText);

  // Фільтруємо проєкти
  // const filteredProjects = activeCategoryText
  //   ? arrOfProjects.filter((proj) =>
  //       lang === i18n.locales[0]
  //         ? proj.categoryUk === activeCategoryText
  //         : proj.categoryEn === activeCategoryText
  //     )
  //   : arrOfProjects;

  const filteredProjects =
    filteredCategoryEn === projectCategories[0].categoryEn
      ? arrOfProjects
      : arrOfProjects.filter((item) => item.categoryEn === filteredCategoryEn);

  console.log("filteredProjects", filteredProjects);

  return (
    <>
      <ul className={styles.filterBlock}>
        {filterCategories.map((item) => (
          <li
            key={item.id}
            className={`${styles.filterItem} ${
              filteredCategoryEn === item.categoryEn
                ? styles.filterItemActive
                : ""
            }`}
            onClick={() => setFilteredCategoryEn(item.categoryEn)}
          >
            {lang === i18n.locales[0]
              ? item.categoryUk.toUpperCase()
              : item.categoryEn.toUpperCase()}
          </li>
        ))}
      </ul>

      <ul className={styles.projectList}>
        {filteredProjects.map((item) => (
          <li key={item.slug} className={styles.projectItem}>
            <div className={styles.imgWrapper}>
              <Image
                className={styles.img}
                src={item.mainImage}
                alt={lang === i18n.locales[0] ? item.altUk : item.altEn}
                // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px"
                sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
                fill={true}
              />
            </div>

            <div className={styles.contentWrapper}>
              <p className={styles.type}>
                {(lang === i18n.locales[0]
                  ? item.typeUk
                  : item.typeEn
                ).toUpperCase()}
              </p>
              <p className={styles.location}>
                {lang === i18n.locales[0] ? item.locationUk : item.locationEn}
              </p>
              {item.area && (
                <p className={styles.area}>
                  <span>{dictionary.area}</span>
                  {item.area} {dictionary.measure}
                  <sup>2</sup>
                </p>
              )}
              {item.styleUk && (
                <p className={styles.style}>
                  <span>{dictionary.style}</span>
                  {lang === i18n.locales[0] ? item.styleUk : item.styleEn}
                </p>
              )}
              {item.year && (
                <p className={styles.year}>
                  {item.year}
                  <span>{dictionary.year}</span>
                </p>
              )}
              <CustomLink
                linkCustomClass=""
                iconCustomClass=""
                href={`${portfolioHref}/${item.slug}`}
                lang={lang}
                text={dictionary.cardLinkText}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterPortfolio;
