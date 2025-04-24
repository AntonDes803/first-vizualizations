import Image from "next/image";
import CallBtn from "@/components/buttons/CallBtn/CallBtn";
import styles from "./HomeExperienceSection.module.scss";
import OrderButton from "@/components/buttons/OrderButton/OrderButton";

const HomeExperienceSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <div className={`container  ${styles.container}`}>
        <div className={styles.boxTitle}>
          <h2 className={styles.title}>{dictionary.title}</h2>
          <p className={styles.text}>{dictionary.description}</p>

          <OrderButton customClass="" text={dictionary.orderBtnText} />
        </div>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.imgHomeExperience}
            src="/images/dev/homePage/home-page-work-experience-img.webp"
            alt={dictionary.imgAlt}
            sizes="(max-width: 767px ) 95vw, (max-width: 1439px ) 45vw, 588px"
            fill={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeExperienceSection;
