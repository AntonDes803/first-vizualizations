"use client";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./BackBtn.module.scss";

const BackBtn = ({ linkCustomClass = "", iconCustomClass = "", white = false, href = "/blog", lang, text }) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  const buttonClassName = white ? styles.buttonWhite : styles.button;
  const arrowIconClassName = white ? styles.arrowIconWhite : styles.arrowIcon;

  return (
    <Link href={path} className={`${buttonClassName} ${linkCustomClass}`}>
      <svg className={`${arrowIconClassName} ${iconCustomClass}`}>
        <use href="/sprite.svg#icon-arrow_right" />
      </svg>
      {text}
    </Link>
  );
};

export default BackBtn;
