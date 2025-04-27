import Image from "next/image";
import { i18n } from "@/dictionaries/i18n.config";
import CustomLink from "../CustomLink/CustomLink";
import { portfolioHref } from "@/data/navLinksData";
import styles from "./HomePortfolioCard.module.scss";

const HomePortfolioCard = ({ lang, dictionary, data }) => {
  return (
    <li className={styles.card}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={data.image}
          alt={lang === i18n.locales[0] ? data.imgAltUk : data.imgAltEn}
          // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 30vw, 384px"
          sizes="(max-width: 767px) 95vw, (max-width: 1439px) 30vw, 1200px"
          fill={true}
        />
      </div>

      <div className={styles.cardTitleAndLinkWrapper}>
        <p className={styles.cardTitle}>
          {lang === i18n.locales[0] ? data.titleUk : data.titleEn}
        </p>
        <CustomLink
          linkCustomClass={styles.customLink}
          iconCustomClass=""
          href={portfolioHref}
          lang={lang}
          text={dictionary.cardLinkText}
        />
      </div>
    </li>
  );
};

export default HomePortfolioCard;
