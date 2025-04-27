import Image from "next/image";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./PortfolioIdSolutionsOnePhotoBlock.module.scss";

const PortfolioIdSolutionsOnePhotoBlock = ({ lang, customClass, data }) => {
  return (
    <div className={customClass}>
      <h2 className={styles.title}>
        {lang === i18n.locales[0]
          ? data.titleUk.toUpperCase()
          : data.titleEn.toUpperCase()}
      </h2>
      <ul className={styles.textList}>
        {lang === i18n.locales[0]
          ? data.textsUk.map((item, index) => (
              <li key={index} className={styles.textItem}>
                {item}
              </li>
            ))
          : data.textsEn.map((item, index) => (
              <li key={index} className={styles.textItem}>
                {item}
              </li>
            ))}
      </ul>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={data.images[0].src}
          alt={
            lang === i18n.locales[0]
              ? data.images[0].altUk
              : data.images[0].altEn
          }
          // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px"
          sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
          fill={true}
        />
      </div>
    </div>
  );
};

export default PortfolioIdSolutionsOnePhotoBlock;
