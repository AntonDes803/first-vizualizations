'use client';

import styles from './HeroBtnArrow.module.scss';

const HeroBtnArrow = ({ href }) => {
  const handleScroll = () => {
    const section = document.getElementById(href);
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };
  return (
    <button
      onClick={handleScroll}
      className={styles.btnSchevron}
      type="button"
      aria-label="arrow-btn"
    >
      <svg className={styles.svg}>
        <use href="/sprite.svg#icon-schevron_bottom" />
      </svg>
    </button>
  );
};

export default HeroBtnArrow;
