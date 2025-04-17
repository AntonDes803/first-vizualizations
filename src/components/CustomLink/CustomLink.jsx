import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./CustomLink.module.scss";

export default function CustomLink({
  linkCustomClass,
  iconCustomClass,
  white,
  href,
  lang,
  text,
}) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  const linkClassname = white ? "linkWhite" : "link";
  const arrowIconClassname = white ? "arrowIconWhite" : "arrowIcon";

  return (
    <Link className={styles[linkClassname] + " " + linkCustomClass} href={path}>
      {text}
      <svg className={styles[arrowIconClassname] + " " + iconCustomClass}>
        <use href="../sprite.svg#icon-arrow_right" />
      </svg>
    </Link>
  );
}
