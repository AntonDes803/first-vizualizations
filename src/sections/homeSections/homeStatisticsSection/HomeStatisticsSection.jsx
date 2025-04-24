import { statisticsData } from '@/data/statisticsData';

import styles from './HomeStatisticsSection.module.scss';
import { i18n } from '@/dictionaries/i18n.config';

const HomeStatisticsSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <ul className={`container ${styles.statisticsList}`}>
        {statisticsData.map((data, index) => (
          <li className={styles.statisticsItem} key={index}>
            <h3 className={`${styles.statisticsNumber} ampersandColor`}>
              {data.number}
            </h3>
            <p className={styles.statisticsDesk}>{lang === i18n.locales[0] ? data.textUk : data.textEn}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeStatisticsSection;
