import Image from "next/image";
import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import { arrOfBlogs } from "@/data/blog/arrOfBlogs";
import { i18n } from "@/dictionaries/i18n.config";
import CustomLink from "@/components/CustomLink/CustomLink";
import styles from "./BlogSection.module.scss";

const BlogSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, "&");

  const cardsToRender = Array(3).fill(arrOfBlogs).flat();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={styles.title}>
          {titleArray[0]}
          <span className="ampersandColor">{titleArray[1]}</span>
          {titleArray[2]}
        </h2>
        <p className={styles.textBlog}>{dictionary.description}</p>

        <ul className={styles.cardList}>
          {cardsToRender.map((item, index) => (
            <li key={index} className={styles.card}>
              <div className={styles.wrapperItem}>
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.img}
                    src={item.mainImage}
                    alt={lang === i18n.locales[0] ? item.altUk : item.altEn}
                    sizes="(max-width: 767px) 80vw, (max-width: 1439px) 45vw, 344px"
                    fill={true}
                  />
                </div>
                <h3 className={styles.titleCard}>
                  {lang === i18n.locales[0] ? item.titleUk : item.titleEn}
                </h3>
                <p className={styles.textCard}>
                  {lang === i18n.locales[0] ? item.cardTextUk : item.cardTextEn}
                </p>
              </div>
              <div className={styles.wrappercustomLink}>
                <span className={styles.chipCard}>{item.creatingData}</span>
                {/* functional-interior-design-COPY -> Id */}

                <CustomLink
                  linkCustomClass={styles.customLink}
                  iconCustomClass=""
                  href={"/blog/functional-interior-design-COPY"}
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

export default BlogSection;
