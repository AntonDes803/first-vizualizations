'use client';

import { useParams } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import HeroBtnArrow from '@/components/HeroBtnArrow/HeroBtnArrow';
import styles from './ServiceIdHeroSection.module.scss';
import { stringSplittingByDelimiter } from '@/helpers/stringSplittingByDelimiter';

const ServiceIdHeroSection = ({ lang, dictionary }) => {
  const params = useParams();
  const slug = params.slug;
  const service = servicesData.find((item) => item.slug === `/${slug}`);

  // console.log(service);

  const sectionTitle = service.categoryUk.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, '’');

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `linear-gradient(rgba(45, 48, 55, 0.45), rgba(45, 48, 55, 0.45)), url(${service.images[0]})`,
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
