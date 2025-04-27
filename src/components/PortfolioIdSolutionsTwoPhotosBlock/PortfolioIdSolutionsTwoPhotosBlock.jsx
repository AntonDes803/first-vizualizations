import Image from "next/image";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./PortfolioIdSolutionsTwoPhotosBlock.module.scss";

const PortfolioIdSolutionsTwoPhotosBlock = ({ lang, customClass, data }) => {
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
      <ul className={styles.imageList}>
        {data.images.map((item, index) => (
          <li key={index} className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src={item.src}
              alt={lang === i18n.locales[0] ? item.altUk : item.altEn}
              // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px"
              sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
              fill={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioIdSolutionsTwoPhotosBlock;
