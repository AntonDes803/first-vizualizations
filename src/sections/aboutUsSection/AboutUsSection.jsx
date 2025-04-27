import Image from "next/image";
import CustomLink from "@/components/CustomLink/CustomLink";
import { servicesHref } from "@/data/navLinksData";
import styles from "./AboutUsSection.module.scss";

const AboutUsSection = ({ lang, dictionary }) => {
  return (
    <section className="section" id="aboutUsSection">
      <div className={`container ${styles.container}`}>
        <div className={styles.textContentWrapper}>
          <h2 className={styles.title}>{dictionary.title}</h2>
          <p className={styles.description}>{dictionary.description}</p>
          <CustomLink
            linkCustomClass=""
            iconCustomClass=""
            href={servicesHref}
            lang={lang}
            text={dictionary.linkText}
          />
        </div>

        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src="/images/dev/aboutUsPage/about-us-page-second-img.webp"
            alt={dictionary.imgAlt}
            // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px"
            sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
            fill={true}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
