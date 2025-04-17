import WhyUsValuesAfterWorkCard from "@/components/WhyUsValuesAfterWorkCard/WhyUsValuesAfterWorkCard";
import CallBtn from "@/components/buttons/CallBtn/CallBtn";
import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import { afterWorkData } from "@/data/afterWorkData";
import styles from "./HomeAfterWorkSection.module.scss";

const HomeAfterWorkSection = ({ lang, dictionary }) => {
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

        <ul className={styles.cardList}>
          {afterWorkData.map((item, index) => (
            <WhyUsValuesAfterWorkCard
              key={index}
              lang={lang}
              data={item}
              customCardClass={styles.customCard}
              customIconClass={styles.customIcon}
            />
          ))}
        </ul>

        <CallBtn customClass={styles.customBtn} text={dictionary.callBtnText} />
      </div>
    </section>
  );
};

export default HomeAfterWorkSection;
