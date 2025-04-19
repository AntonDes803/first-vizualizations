import Image from 'next/image';
import { portfolioHref } from '@/data/navLinksData';
import CallBtn from '@/components/buttons/CallBtn/CallBtn';
import CustomLink from '@/components/CustomLink/CustomLink';

import styles from './ServiceIdSection.module.scss';

const ServiceIdSection = ({ lang, dictionary, data }) => {
  return (
    <section className="section" id="serviceIdSection">
      <ul className={`container ${styles.servisesIdList}`}>
        <li className={styles.servicesIdItem}>
          <div className={styles.content}>
            <h3 className={styles.title}>{data.titleUk}</h3>
            <p className={styles.desc}>{data.text1Uk}</p>
            <CustomLink
              href={portfolioHref}
              lang={lang}
              text={dictionary.linkText}
            />
          </div>
          <figure className={styles.imgContainer}>
            <Image
              src={data.images[1]}
              alt={data.titleUk}
              fill={true}
              sizes="(max-width: 767px) 320px, (max-width: 1439px) 343px, 512px"
            />
          </figure>
        </li>
        <li className={styles.servicesIdItem}>
          <p className={styles.desc}>{data.text2Uk}</p>
          <figure className={styles.imgContainer}>
            <Image
              src={data.images[2]}
              alt={data.titleUk}
              fill={true}
              sizes="(max-width: 767px) 320px, (max-width: 1439px) 343px, 512px"
            />
          </figure>
        </li>
      </ul>
      <CallBtn text={dictionary.callBtnText} />
    </section>
  );
};

export default ServiceIdSection;
