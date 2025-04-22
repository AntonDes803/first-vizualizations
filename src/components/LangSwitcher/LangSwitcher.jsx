"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ lang }) => {
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  return (
    <ul className={styles.langSwitch}>
      <li>
        <Link
          className={lang === i18n.locales[0] ? styles.active : styles.langBtn}
          href={redirectedPathName(i18n.locales[0])}
        >
          UKR
        </Link>
      </li>
      <li>
        <Link
          className={lang === i18n.locales[1] ? styles.active : styles.langBtn}
          href={redirectedPathName(i18n.locales[1])}
        >
          ENG
        </Link>
      </li>
    </ul>
  );
};

export default LangSwitcher;
