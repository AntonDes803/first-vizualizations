import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import styles from "./HomeTeamSection.module.scss";

const HomeTeamSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, "&");

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

export default HomeTeamSection;
