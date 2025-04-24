import { stringSplittingByDelimiter } from '@/helpers/stringSplittingByDelimiter';
import { servicesData } from '@/data/servicesData';
import styles from './ServicesSection.module.scss';
import CustomLink from '@/components/CustomLink/CustomLink';
import { servicesHref } from '@/data/navLinksData';
import Image from 'next/image';
import CallBtn from '@/components/buttons/CallBtn/CallBtn';
import { i18n } from '@/dictionaries/i18n.config';

const ServicesSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, '3D');

  return (
    <section className="section" id="servicesSection">
      <div className="container">
        <h2 className={styles.title}>
          {titleArray[0]}
          <span className="ampersandColor">{titleArray[1]}</span>
          {titleArray[2]}
        </h2>
        <ul className={styles.servicesContent}>
          <li>{dictionary.description1}</li>
          <li>{dictionary.description2}</li>
        </ul>
        <ul className={styles.servicesList}>
          {servicesData.map((data) => (
            <li key={data.slug}>
              <figure className={styles.imgContainer}>
                <Image
                  src={data.imageMain}
                  alt={data.categoryUk}
                  fill={true}
                  sizes="(max-width: 767px) 320px, (max-width: 1439px) 344px, 588px"
                />
              </figure>
              <div className={styles.servicesItem}>
                <h3 className={styles.servicesTitle}>{lang === i18n ? data.categoryUk : data.categoryEn}</h3>
                <p className={styles.servicesDesc}>{lang === i18n ? data.cardTextUk : data.cardTextEn}</p>
                <div className={styles.content}>
                  <p className={`${styles.servicesProjectsCount}`}>
                    {data.projectsCount}{' '}
                    <span className={styles.mobile}>
                      {dictionary.projectsCountTextMobile}
                    </span>
                    <span className={styles.desktop}>
                      {dictionary.projectsCountText}
                    </span>
                  </p>
                  <CustomLink
                    href={`${servicesHref}/${data.slug}`}
                    text={dictionary.cardLinkText}
                    lang={lang}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <CallBtn text={dictionary.orderBtnText} />
      </div>
    </section>
  );
};

export default ServicesSection;
