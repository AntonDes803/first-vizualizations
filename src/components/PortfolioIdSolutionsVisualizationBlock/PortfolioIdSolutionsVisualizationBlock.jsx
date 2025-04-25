import ItemSlider from "../ItemSlider/ItemSlider";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./PortfolioIdSolutionsVisualizationBlock.module.scss";

const PortfolioIdSolutionsVisualizationBlock = ({
  lang,
  customClass,
  data,
}) => {
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

      <ItemSlider lang={lang} customClass={styles.sliderWrapper} data={data} />
    </div>
  );
};

export default PortfolioIdSolutionsVisualizationBlock;
