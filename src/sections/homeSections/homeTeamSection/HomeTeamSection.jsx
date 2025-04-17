import Image from "next/image";
import CustomLink from "@/components/CustomLink/CustomLink";
import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import { aboutUsHref } from "@/data/navLinksData";
import styles from "./HomeTeamSection.module.scss";

const HomeTeamSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, "&");

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={styles.title}>
          {titleArray[0]}
          <span className="ampersandColor">{titleArray[1]}</span>
          {titleArray[2]}
        </h2>
        <h3 className={styles.subTitle}>{dictionary.subTitle}</h3>
        <div className={styles.contentWrapper}>
          <div className={styles.textAndLinkWrapper}>
            <p className={styles.text}>{dictionary.text}</p>
            <CustomLink
              linkCustomClass=""
              iconCustomClass=""
              white
              href={aboutUsHref}
              lang={lang}
              text={dictionary.linkText}
            />
          </div>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src="/images/dev/homePage/home-page-team.webp"
              alt={dictionary.imgAlt}
              sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px"
              fill={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTeamSection;
