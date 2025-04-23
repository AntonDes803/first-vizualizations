import Image from "next/image";
import CustomLink from "@/components/CustomLink/CustomLink";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./BlogIdSection.module.scss";

const BlogIdSection = ({ lang, dictionary, data }) => {
  const {
    mainImage,

    altUk,
    altEn,
    titleUk,
    titleEn,
    // cardTextUk,
    // cardTextEn,
    creatingData,
    mainTextUk,
    mainTextEn,
    blocks,
  } = data;

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* замінити CustomLink  назад */}
        <CustomLink
          linkCustomClass=""
          iconCustomClass=""
          href={"/blog"}
          lang={lang}
          text={dictionary.linkText}
        />
        <div className={styles.containerBlogId}>
          <h2 className={styles.title}>
            {lang === i18n.locales[0]
              ? titleUk.toUpperCase()
              : titleEn.toUpperCase()}
          </h2>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src={mainImage}
              alt={lang === i18n.locales[0] ? altUk : altEn}
              sizes="(max-width: 767px) 90vw, (max-width: 1439px) 80vw, 792px"
              fill={true}
            />
          </div>
          <p className={styles.text}>
            {lang === i18n.locales[0] ? mainTextUk : mainTextEn}
          </p>
          <ul className={styles.list}>
            {blocks.map((block, index) => (
              <li key={index}>
                <h3>
                  {lang === i18n.locales[0]
                    ? block.subTitleUk
                    : block.subTitleEn}
                </h3>
                <p>
                  {lang === i18n.locales[0]
                    ? block.descriptionUk
                    : block.descriptionEn}
                </p>
                {block.img && (
                  <div className={`${styles.imgWrapper} ${styles.blockImg}`}>
                    <Image
                      className={styles.img}
                      src={block.img}
                      alt={lang === i18n.locales[0] ? block.altUk : block.altEn}
                      sizes="(max-width: 767px) 90vw, (max-width: 1439px) 80vw, 792px"
                      fill={true}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>

          <span>{creatingData}</span>
        </div>
      </div>
    </section>
  );
};

export default BlogIdSection;
