import { i18n } from "@/dictionaries/i18n.config";
import styles from "./WhyUsValuesAfterWorkCard.module.scss";

const WhyUsValuesAfterWorkCard = ({
  lang,
  data,
  customCardClass,
  customIconClass,
}) => {
  return (
    <li className={`${styles.card} ${customCardClass}`}>
      <svg className={`${styles.icon} ${customIconClass}`}>
        <use href={data.iconHref} />
      </svg>
      <h3 className={styles.title}>
        {(lang === i18n.locales[0] ? data.titleUk : data.titleEn).toUpperCase()}
      </h3>
      <p className={styles.text}>
        {lang === i18n.locales[0] ? data.textUk : data.textEn}
      </p>
    </li>
  );
};

export default WhyUsValuesAfterWorkCard;
