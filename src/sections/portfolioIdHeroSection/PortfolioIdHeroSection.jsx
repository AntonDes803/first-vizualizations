import { i18n } from '@/dictionaries/i18n.config';
import styles from './PortfolioIdHeroSection.module.scss';

const PortfolioIdHeroSection = ({ lang, dictionary, data }) => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `linear-gradient(rgba(45, 48, 55, 0.45), rgba(45, 48, 55, 0.45)), url(${data.mainImage})`,
      }}
    >
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>
          {lang === i18n.locales[0] ? data.titleUk : data.titleEn}
        </h1>
      </div>
    </section>
  );
};

export default PortfolioIdHeroSection;
