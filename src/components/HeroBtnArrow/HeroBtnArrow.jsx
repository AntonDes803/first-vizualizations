import styles from './HeroBtnArrow.module.scss';

const HeroBtnArrow = () => {
  return (
    <button className={styles.btnSchevron} type="button" aria-label="arrow-btn">
      <svg className={styles.svg}>
        <use href="/sprite.svg#icon-schevron_bottom" />
      </svg>
    </button>
  );
};

export default HeroBtnArrow;
