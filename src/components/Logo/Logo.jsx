import Image from "next/image";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./Logo.module.scss";

const Logo = ({ lang, customClass }) => {
  // если язык по умолчанию (т.е. i18n.defaultLocale), то убираем его из url (в нашем случае uk))
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;

  return (
    // <figure className={`${styles.logo} ${customClass}`}>
    <Link className={`${styles.logo} ${customClass}`} href={`${path}/`}>
      <Image
        src="/svg/logo.svg"
        alt="MALOV&PARTNERS"
        fill
        sizes="33vw"
        priority={true}
      />
    </Link>
    // {/* </figure> */}
  );
};

export default Logo;
