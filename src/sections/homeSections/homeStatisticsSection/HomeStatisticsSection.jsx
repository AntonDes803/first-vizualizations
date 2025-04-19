import { statisticsData } from '@/data/statisticsData';

import styles from './HomeStatisticsSection.module.scss';

const HomeStatisticsSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <ul className={`container ${styles.statisticsList}`}>
        {statisticsData.map((data, index) => (
          <li className={styles.statisticsItem} key={index}>
            <h3 className={`${styles.statisticsNumber} ampersandColor`}>
              {data.number}
            </h3>
            <p className={styles.statisticsDesk}>{data.textUk}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeStatisticsSection;
