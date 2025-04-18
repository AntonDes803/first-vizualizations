import HeroBtnArrow from '@/components/HeroBtnArrow/HeroBtnArrow';
import { stringSplittingByDelimiter } from '@/helpers/stringSplittingByDelimiter';
import styles from './PortfolioHeroSection.module.scss';

const PortfolioHeroSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, '&');

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div>
          <h1 className={styles.title}>
            {titleArray[0]}
            <span className="ampersandColor">{titleArray[1]}</span>
            {titleArray[2]}
          </h1>
          <div className={styles.descContainer}>
            <p className={styles.desc}>{dictionary.quote}</p>
            <p className={`${styles.desc} ${styles.author} `}>
              {dictionary.quoteAuthor}
            </p>
          </div>
        </div>
        <HeroBtnArrow href="portfolioSection" />
      </div>
    </section>
  );
};

export default PortfolioHeroSection;
