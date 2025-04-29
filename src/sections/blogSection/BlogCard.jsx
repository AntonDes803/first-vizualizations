import React from "react";
import Image from "next/image";
import CustomLink from "@/components/CustomLink/CustomLink";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./BlogSection.module.scss";

const BlogCard = ({ item, lang, cardLinkText }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapperItem}>
        <div>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src={item.mainImage}
              alt={lang === i18n.locales[0] ? item.altUk : item.altEn}
              sizes="(max-width: 767px) 80vw, (max-width: 1439px) 45vw, 344px"
              fill
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
          <CustomLink
            linkCustomClass={styles.customLink}
            iconCustomClass=""
            href={`/blog/${item.slug ?? ""}`}
            lang={lang}
            text={cardLinkText}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
