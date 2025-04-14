import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import { servicesData } from "@/data/servicesData";
import styles from "./ServicesSection.module.scss";

const ServicesSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, "3D");

  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.title}>
          {titleArray[0]}
          <span className="ampersandColor">{titleArray[1]}</span>
          {titleArray[2]}
        </h2>
      </div>
    </section>
  );
};

export default ServicesSection;
