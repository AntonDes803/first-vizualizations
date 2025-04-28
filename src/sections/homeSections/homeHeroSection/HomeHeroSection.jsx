'use client';

import { useEffect, useState } from 'react';
import { stringSplittingByDelimiter } from '@/helpers/stringSplittingByDelimiter';
import { portfolioHref } from '@/data/navLinksData';
import { homeHeroSliderData } from '@/data/homeHeroSliderData';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import CustomLink from '@/components/CustomLink/CustomLink';

import styles from './HomeHeroSection.module.scss';
import { i18n } from '@/dictionaries/i18n.config';

const HomeHeroSection = ({ lang, dictionary }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homeHeroSliderData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${styles.section}
    `}
    >
      {homeHeroSliderData.map((data, index) => {
        const sectionTitle =
          lang === i18n.locales[0]
            ? data.titleUk.toUpperCase()
            : data.titleEn.toUpperCase();
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
              <CustomLink
                linkCustomClass={styles.customLink}
                iconCustomClass=""
                white
                href={portfolioHref}
                lang={lang}
                text={dictionary.linkText}
              />
              <ul className={styles.number}>
                <li>{String(index + 1).padStart(2, '0')}/</li>
                <li className="ampersandColor">
                  {String(homeHeroSliderData.length).padStart(2, '0')}
                </li>
              </ul>
              <div className={styles.pagination}>
                {homeHeroSliderData.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${
                      index === currentIndex ? styles.activeDot : ''
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
              <SocialLinks />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HomeHeroSection;
