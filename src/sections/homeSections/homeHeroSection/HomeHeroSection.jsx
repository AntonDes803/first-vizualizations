'use client';

import { useEffect, useState } from 'react';
import { homeHeroSliderData } from '@/data/homeHeroSliderData';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import styles from './HomeHeroSection.module.scss';
import { stringSplittingByDelimiter } from '@/helpers/stringSplittingByDelimiter';

const HomeHeroSection = ({ lang, dictionary }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homeHeroSliderData.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${styles.section}
    `}
    >
      {homeHeroSliderData.map((data, index) => {
        const sectionTitle = data.titleUk.toUpperCase();
        const titleArray = stringSplittingByDelimiter(sectionTitle, '’');
        return (
          <div
            key={index}
            className={`${styles.background} ${
              index === currentIndex ? styles.active : ''
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(45, 48, 55, 0.45), rgba(45, 48, 55, 0.45)), url(${data.image})`,
            }}
          >
            <div className={`container ${styles.container}`}>
              <h1 className={styles.title}>
                {titleArray[0]}
                <span className="ampersandColor">{titleArray[1]}</span>
                {titleArray[2]}
              </h1>
              <ul className={styles.number}>
                <li>{String(index + 1).padStart(2, '0')}/</li>
                <li className="ampersandColor">
                  {String(homeHeroSliderData.length).padStart(2, '0')}
                </li>
              </ul>
              <SocialLinks id={styles.socLinks} light />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HomeHeroSection;
