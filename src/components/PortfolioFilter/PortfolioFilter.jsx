// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import CustomLink from "../CustomLink/CustomLink";
// import { i18n } from "@/dictionaries/i18n.config";
// import { projectCategories } from "@/data/projectCategories";
// import { arrOfProjects } from "@/data/projects/arrOfProjects";
// import { portfolioHref } from "@/data/navLinksData";
// import styles from "./PortfolioFilter.module.scss";

// const PortfolioFilter = ({ lang, dictionary }) => {
//   // категория, по которой фильтруем
//   const [filteredCategoryEn, setFilteredCategoryEn] = useState(
//     projectCategories[0].categoryEn
//   );

//   // будем использовать для кнопок фильтра
//   const filterCategories = [...projectCategories];

//   const filteredProjects =
//     filteredCategoryEn === projectCategories[0].categoryEn
//       ? arrOfProjects
//       : arrOfProjects.filter((item) => item.categoryEn === filteredCategoryEn);

//   return (
//     <>
//       <ul className={styles.filterBlock}>
//         {filterCategories.map((item) => (
//           <li
//             key={item.id}
//             className={`${styles.filterItem} ${
//               filteredCategoryEn === item.categoryEn
//                 ? styles.filterItemActive
//                 : ""
//             }`}
//             onClick={() => setFilteredCategoryEn(item.categoryEn)}
//           >
//             {lang === i18n.locales[0]
//               ? item.categoryUk.toUpperCase()
//               : item.categoryEn.toUpperCase()}
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

// export default PortfolioFilter;

"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import CustomLink from "../CustomLink/CustomLink";
import { i18n } from "@/dictionaries/i18n.config";
import { projectCategories } from "@/data/projectCategories";
import { arrOfProjects } from "@/data/projects/arrOfProjects";
import { portfolioHref } from "@/data/navLinksData";
import styles from "./PortfolioFilter.module.scss";

const PortfolioFilter = ({ lang, dictionary }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "all";

  const arrOfProjectCategoriesEn = projectCategories.map(
    (item) => item.categoryEn
  );
  const defaultCategory = arrOfProjectCategoriesEn[0];

  // категория, по которой фильтруем
  // const [filteredCategoryEn, setFilteredCategoryEn] = useState(
  //   categoryFromUrl || defaultCategory
  // );
  const [filteredCategoryEn, setFilteredCategoryEn] = useState(categoryFromUrl);

  // console.log("filteredCategoryEn", filteredCategoryEn);

  // ⏱ Синхронизация стейта с URL (например, при "назад")
  useEffect(() => {
    // console.log("useEffect worked");
    const isCategoryInArr = arrOfProjectCategoriesEn.includes(categoryFromUrl);
    isCategoryInArr
      ? setFilteredCategoryEn(categoryFromUrl)
      // : router.replace("/portfolio?category=all");
      : router.replace("/portfolio");
    // setFilteredCategoryEn(categoryFromUrl || defaultCategory);
  }, [categoryFromUrl]);

  // будем использовать для кнопок фильтра
  const filterCategories = [...projectCategories];

  const filteredProjects =
    filteredCategoryEn === defaultCategory
      ? arrOfProjects
      : arrOfProjects.filter((item) => item.categoryEn === filteredCategoryEn);

  const handleCategoryChange = (newCategory) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", newCategory);
    router.push(`?${params.toString()}`, { scroll: false }); // исключает перерендеринг
  };

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
            // onClick={() => setFilteredCategoryEn(item.categoryEn)}
            onClick={() => handleCategoryChange(item.categoryEn)}
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

export default PortfolioFilter;
