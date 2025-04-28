'use client';

import { useEffect, useRef, useState } from 'react';
import { statisticsData } from '@/data/statisticsData';
import { i18n } from '@/dictionaries/i18n.config';
import { AnimatedNumber } from '@/helpers/animatedNumber';
import styles from './HomeStatisticsSection.module.scss';

const HomeStatisticsSection = ({ lang, dictionary }) => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Можеш підлаштувати поріг видимості
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="section" ref={sectionRef}>
      <ul className={`container ${styles.statisticsList}`}>
        {statisticsData.map((data, index) => (
          <li className={styles.statisticsItem} key={index}>
            <h3 className={`${styles.statisticsNumber} ampersandColor`}>
              <AnimatedNumber
                targetNumber={parseInt(data.number)}
                start={startCount}
              />
            </h3>
            <p className={styles.statisticsDesk}>
              {lang === i18n.locales[0] ? data.textUk : data.textEn}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeStatisticsSection;

// import { statisticsData } from '@/data/statisticsData';

// import styles from './HomeStatisticsSection.module.scss';
// import { i18n } from '@/dictionaries/i18n.config';

// const HomeStatisticsSection = ({ lang, dictionary }) => {
//   return (
//     <section className="section">
//       <ul className={`container ${styles.statisticsList}`}>
//         {statisticsData.map((data, index) => (
//           <li className={styles.statisticsItem} key={index}>
//             <h3 className={`${styles.statisticsNumber} ampersandColor`}>
//               {data.number}
//             </h3>
//             <p className={styles.statisticsDesk}>{lang === i18n.locales[0] ? data.textUk : data.textEn}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default HomeStatisticsSection;
