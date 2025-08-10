import Image from "next/image";
import { i18n } from "@/dictionaries/i18n.config";
import CustomLink from "../CustomLink/CustomLink";
import { portfolioHref } from "@/data/navLinksData";
import styles from "./HomePortfolioCard.module.scss";
import Link from "next/link";

const HomePortfolioCard = ({ lang, dictionary, data }) => {
  
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? data.path : `/${lang}${data.path}`;
  
  return (
    <li className={styles.card}>
      <Link className={styles.imgWrapper} href={path}>
        <Image
          className={styles.img}
          src={data.image}
          alt={lang === i18n.locales[0] ? data.imgAltUk : data.imgAltEn}
          // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 30vw, 384px"
          sizes="(max-width: 767px) 95vw, (max-width: 1439px) 30vw, 1200px"
          fill={true}
        />
      </Link>

      <div className={styles.cardTitleAndLinkWrapper}>
        <p className={styles.cardTitle}>
          {lang === i18n.locales[0] ? data.titleUk : data.titleEn}
        </p>
        <CustomLink
          linkCustomClass={styles.customLink}
          iconCustomClass=""
          // href={portfolioHref}
          href={data.path}
          lang={lang}
          text={dictionary.cardLinkText}
        />
      </div>
    </li>
  );
};

export default HomePortfolioCard;
