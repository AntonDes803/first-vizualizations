import styles from "./HomePortfolioSection.module.scss";

const HomePortfolioSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <div className="container">
        HomePortfolioSection
        {/* <div className={styles.iconWrapper}>
          <svg className={styles.icon}>
            <use href={`/sprite.svg#icon-logo`} />
          </svg>
        </div> */}
        {/* <div className={styles.iconWrapper}>
          <img src={`/svg/logo.svg`} alt="logo" />
        </div> */}
      </div>
    </section>
  );
};

export default HomePortfolioSection;
