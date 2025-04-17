import HeroBtnArrow from '@/components/HeroBtnArrow/HeroBtnArrow';
import { stringSplittingByDelimiter } from '@/helpers/stringSplittingByDelimiter';
import styles from './AboutUsHeroSection.module.scss';

const AboutUsHeroSection = ({ lang, dictionary }) => {
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
          <p className={styles.desc}>{dictionary.description}</p>
        </div>
        <HeroBtnArrow />
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
