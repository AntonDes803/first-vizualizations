import CallBtn from "@/components/buttons/CallBtn/CallBtn";
import { i18n } from "@/dictionaries/i18n.config";
import { workProcessData } from "@/data/workProcessData";
import styles from "./HomeWorkProcessSection.module.scss";

const HomeWorkProcessSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dictionary.title.toUpperCase()}</h2>

        <ul className={styles.list}>
          {workProcessData.map((item, index) => (
            <li key={index} className={styles.item}>
              <svg className={styles.icon}>
                <use href={item.iconHref} />
              </svg>
              <p className={styles.text}>
                {lang === i18n.locales[0] ? item.textUk : item.textEn}
              </p>
            </li>
          ))}
        </ul>

        <CallBtn customClass="" text={dictionary.callBtnText} />
      </div>
    </section>
  );
};

export default HomeWorkProcessSection;
