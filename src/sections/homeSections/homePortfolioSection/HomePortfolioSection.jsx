import CustomLink from "@/components/CustomLink/CustomLink";
import HomePortfolioCard from "@/components/HomePortfolioCard/HomePortfolioCard";
import { homeProjectsData } from "@/data/homeProjectsData";
import { portfolioHref } from "@/data/navLinksData";
import styles from "./HomePortfolioSection.module.scss";

const HomePortfolioSection = ({ lang, dictionary }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.titleAndLinkWrapper}>
          <h2 className={styles.title}>{dictionary.title.toUpperCase()}</h2>
          <CustomLink
            linkCustomClass={styles.customLink}
            iconCustomClass=""
            white
            href={portfolioHref}
            lang={lang}
            text={dictionary.linkText}
          />
        </div>

        <ul className={styles.cardList}>
          {homeProjectsData.map((item, index) => (
            <HomePortfolioCard
              key={index}
              lang={lang}
              dictionary={dictionary}
              data={item}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomePortfolioSection;
