'use client';

import { useEffect, useState } from 'react';
import { homeHeroSliderData } from '@/data/homeHeroSliderData';
import styles from './HomeHeroSection.module.scss';

const HomeHeroSection = ({ lang, dictionary }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homeHeroSliderData.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = homeHeroSliderData[currentIndex];

  return (
    <section
      key={currentIndex}
      className={`${styles.section} ${styles.slide} ${
        currentSlide.index === currentIndex ? styles.active : ''
      }`}
    >
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>{currentSlide.titleUk}</h1>
      </div>
    </section>
  );
};

export default HomeHeroSection;
