import WhyUsValuesAfterWorkCard from "@/components/WhyUsValuesAfterWorkCard/WhyUsValuesAfterWorkCard";
import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import { aboutValuesData } from "@/data/aboutValuesData";
import styles from "./AboutUsValuesSection.module.scss";
import CallBtn from "@/components/buttons/CallBtn/CallBtn";

const AboutUsValuesSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, "&");

  return (
    <section className="section">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {titleArray[0]}
          <span className="ampersandColor">{titleArray[1]}</span>
          {titleArray[2]}
        </h2>

        <ul className={styles.cardList}>
          {aboutValuesData.map((item, index) => (
            <WhyUsValuesAfterWorkCard
              key={index}
              lang={lang}
              data={item}
              customCardClass={styles.customCard}
              customIconClass={styles.customIcon}
            />
          ))}
        </ul>
        <CallBtn text={dictionary.btnText} />
      </div>
    </section>
  );
};

export default AboutUsValuesSection;
