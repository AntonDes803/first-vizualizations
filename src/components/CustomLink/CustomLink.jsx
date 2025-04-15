import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./CustomLink.module.scss";

export default function CustomLink({
  linkCustomClass,
  iconCustomClass,
  id,
  href,
  lang,
  text,
}) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  return (
    <Link className={styles.link + " " + linkCustomClass} id={id} href={path}>
      {text}
      <svg className={styles.arrowIcon + " " + iconCustomClass}>
        <use href="../sprite.svg#icon-arrow_right" />
      </svg>
    </Link>
  );
}
