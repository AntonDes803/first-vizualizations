'use client';

import { useEffect, useState } from 'react';
import { homeHeroSliderData } from '@/data/homeHeroSliderData';
import styles from './HomeHeroSection.module.scss';
import SocialLinks from '@/components/SocialLinks/SocialLinks';

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
      {homeHeroSliderData.map((data, index) => (
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
            <h1 className={styles.title}>{data.titleUk}</h1>
            <SocialLinks id={styles.socLinks} light />
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeHeroSection;
