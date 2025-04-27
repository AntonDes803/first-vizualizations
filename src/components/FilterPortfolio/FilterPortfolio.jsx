'use client'
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./FilterPortfolio.module.scss";
import { projectCategories } from "@/data/projectCategories";
import { useState } from "react";
import { arrOfProjects } from "@/data/projects/arrOfProjects";
import CustomLink from "../CustomLink/CustomLink";
import { portfolioHref } from "@/data/navLinksData";
import Image from "next/image";

const FilterPortfolio = ({ lang, dictionary }) => {

    const [activeProjectCategoryId, setActiveProjectCategoryId] = useState(projectCategories[0].id);

  // Мапимо категорії для кнопок фільтра
  const filterCategories = projectCategories.map((project) => ({
    id: project.id,
    label: lang === i18n.locales[0] ? project.categoryUk.toUpperCase() : project.categoryEn.toUpperCase(),
  }));

  // Отримуємо текст категорії для порівняння з полем у проєктах
  const activeCategoryText =
    activeProjectCategoryId === projectCategories[0].id
      ? null
      : lang === i18n.locales[0]
      ? projectCategories.find((proj) => proj.id === activeProjectCategoryId)?.categoryUk
      : projectCategories.find((proj) => proj.id === activeProjectCategoryId)?.categoryEn;

  // Фільтруємо проєкти
  const filteredProjects = activeCategoryText
    ? arrOfProjects.filter(
        (proj) =>
          (lang === i18n.locales[0]
            ? proj.categoryUk === activeCategoryText
            : proj.categoryEn === activeCategoryText)
      )
    : arrOfProjects;

  return (
<>
    <ul className={styles.filterBlock}>
          {filterCategories.map((item) => (
            <li
              key={item.id}
              className={`${styles.filterItem} ${
                activeProjectCategoryId === item.id ? styles.filterItemActive : ""
              }`}
              onClick={() => setActiveProjectCategoryId(item.id)}
            >
              {item.label}
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
                  {(lang === i18n.locales[0] ? item.typeUk : item.typeEn).toUpperCase()}
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
