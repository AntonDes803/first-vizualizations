import WhyUsValuesAfterWorkCard from "@/components/WhyUsValuesAfterWorkCard/WhyUsValuesAfterWorkCard";
import { whyMeData } from "@/data/whyMeData";
import styles from "./HomeWhyMeSection.module.scss";

const HomeWhyMeSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{dictionary.title.toUpperCase()}</h2>
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
