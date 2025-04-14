import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import styles from "./ServicesHeroSection.module.scss";

const ServicesHeroSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, "&");

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>
          {titleArray[0]}
          <span className="ampersandColor">{titleArray[1]}</span>
          {titleArray[2]}
        </h1>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
