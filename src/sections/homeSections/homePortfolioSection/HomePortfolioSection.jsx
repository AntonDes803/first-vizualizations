import { projectsData } from "@/data/projectsData";
import styles from "./HomePortfolioSection.module.scss";

const HomePortfolioSection = ({ lang, dictionary }) => {
  // console.log("projectsData", projectsData);
  return (
    <section className="section">
      <div className="container">
        {/* HomePortfolioSection */}
        {/* <div className={styles.iconWrapper}>
          <svg className={styles.icon}>
            <use href={`/sprite.svg#icon-logo`} />
          </svg>
        </div> */}
        {/* <div className={styles.iconWrapper}>
          <img src={`/svg/logo.svg`} alt="logo" />
        </div> */}
        <h2>{dictionary.title}</h2>
      </div>
    </section>
  );
};

export default HomePortfolioSection;
