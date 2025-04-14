import WhyUsValuesAfterWorkCard from "@/components/WhyUsValuesAfterWorkCard/WhyUsValuesAfterWorkCard";
import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import { whyMeData } from "@/data/whyMeData";
import styles from "./HomeWhyMeSection.module.scss";

const HomeWhyMeSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, "&");

  return (
    <section className="section">
      <div className="container">
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>
            {titleArray[0]}
            <span className="ampersandColor">{titleArray[1]}</span>
            {titleArray[2]}
          </h2>
          <p className={styles.description}>{dictionary.description}</p>
        </div>
        <ul className={styles.cardList}>
          {whyMeData.map((item, index) => (
            <WhyUsValuesAfterWorkCard key={index} lang={lang} data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeWhyMeSection;
