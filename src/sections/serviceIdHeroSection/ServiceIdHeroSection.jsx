import HeroBtnArrow from '@/components/HeroBtnArrow/HeroBtnArrow';
import { stringSplittingByDelimiter } from '@/helpers/stringSplittingByDelimiter';
import styles from './ServiceIdHeroSection.module.scss';
import { i18n } from '@/dictionaries/i18n.config';

const ServiceIdHeroSection = ({ lang, dictionary, data }) => {
  const sectionTitle = lang === i18n ? data.categoryUk.toUpperCase() : data.categoryEn.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, '’');

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `linear-gradient(rgba(45, 48, 55, 0.45), rgba(45, 48, 55, 0.45)), url(${data.images[0]})`,
      }}
    >
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
        <HeroBtnArrow href="serviceIdSection" />
      </div>
    </section>
  );
};

export default ServiceIdHeroSection;
