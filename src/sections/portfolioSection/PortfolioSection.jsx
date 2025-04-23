import Image from "next/image";
import CustomLink from "@/components/CustomLink/CustomLink";
import { i18n } from "@/dictionaries/i18n.config";
import { projectCategories } from "@/data/projectCategories";
import { arrOfProjects } from "@/data/projects/arrOfProjects";
import { portfolioHref } from "@/data/navLinksData";
import styles from "./PortfolioSection.module.scss";

const PortfolioSection = ({ lang, dictionary }) => {
  const filterCategories =
    lang === i18n.locales[0]
      ? projectCategories.map((item) => item.categoryUk.toUpperCase())
      : projectCategories.map((item) => item.categoryEn.toUpperCase());

  return (
    <section className="section" id="portfolioSection">
      <div className="container">
        <ul className={styles.filterBlock}>
          {filterCategories.map((item, index) => (
            <li key={index} className={styles.filterItem}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={styles.projectList}>
          {arrOfProjects.map((item) => (
            <li key={item.slug} className={styles.projectItem}>
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.img}
                  src={item.mainImage}
                  alt={lang === i18n.locales[0] ? item.altUk : item.altEn}
                  sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px"
                  fill={true}
                />
              </div>

              <div className={styles.contentWrapper}>
                <p className={styles.type}>
                  {lang === i18n.locales[0]
                    ? item.typeUk.toUpperCase()
                    : item.typeEn.toUpperCase()}
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
      </div>
    </section>
  );
};

export default PortfolioSection;
