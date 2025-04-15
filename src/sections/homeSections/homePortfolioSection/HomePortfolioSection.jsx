import { homeProjectsData } from "@/data/homeProjectsData";
import styles from "./HomePortfolioSection.module.scss";

const HomePortfolioSection = ({ lang, dictionary }) => {
  // console.log("homeProjectsData", homeProjectsData);

  return (
    <section className="section">
      <div className="container">
        <h2>{dictionary.title}</h2>
      </div>
    </section>
  );
};

export default HomePortfolioSection;
