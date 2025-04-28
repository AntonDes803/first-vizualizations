"use client";
import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiteContext } from "@/context/SiteContext";
import { i18n } from "@/dictionaries/i18n.config";
import { useWindowResize } from "@/hooks/windowResize";
import { navLinksData } from "@/data/navLinksData";
import styles from "./FooterNav.module.scss";

const FooterNav = ({ lang, customClass }) => {
  const { setMobileMenu } = useContext(SiteContext);

  const [subMenu, setSubMenu] = useState(false);

  const pathname = usePathname();

  const { isMobile } = useWindowResize();

  const navLinksWithoutServices = navLinksData.filter(
    (item) => item.titleEn !== "Services"
  );

  const servicesNavLinks = navLinksData.find(
    (item) => item.titleEn === "Services"
  );

  // если язык по умолчанию, то убираем его из url (в нашем случае uk)). Сделано для корректных адресов для ссылок в зависимости от текущего языка
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;

  return (
    <>
      {!isMobile && (
        <nav className={`${styles.navBlock} ${customClass}`}>
          <ul className={styles.navLinks}>
            {navLinksWithoutServices.map((el, i) => {
              //  начинается проверка для отображения стилей активной страницы
              let checkedPath = `${path}${el.href}`;
              // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
              const resultPath =
                checkedPath === `/${i18n.locales[1]}/`
                  ? checkedPath.slice(0, -1)
                  : checkedPath;

              // функция создания стилей для елемента (linkStyles - базовые стили)
              const pageLinkClassName = (linkStyles = null) => {
                if (pathname.endsWith(resultPath)) {
                  return `${linkStyles} ${styles.activeLink}`;
                } else {
                  return linkStyles;
                }
              };
              // заканчивается проверка

              return (
                <li key={i}>
                  <div className={pageLinkClassName(styles.titleWrapp)}>
                    <Link
                      href={`${path}${el.href}`}
                      onClick={() => {
                        setMobileMenu(false);
                        setSubMenu(!subMenu);
                      }}
                    >
                      {lang === i18n.locales[0] ? el.titleUk : el.titleEn}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="">
            <span className={styles.serviceTitle}>
              {lang === i18n.locales[0]
                ? servicesNavLinks.titleUk
                : servicesNavLinks.titleEn}
            </span>
            <ul className={`${styles.subMenu} ${styles.subMenuVisible}`}>
              {servicesNavLinks.serviceId.map((item, i) => {
                //  начинается проверка для отображения активной страницы
                let resultPath = item.href;

                // функция создания стилей для елемента (linkStyles - базовые стили)
                const pageLinkClassName = (linkStyles = null) => {
                  if (pathname.endsWith(resultPath)) {
                    return `${linkStyles} ${styles.activeLink}`;
                  } else {
                    return linkStyles;
                  }
                };
                // заканчивается проверка

                return (
                  <li key={i} className={pageLinkClassName(styles.subMenuItem)}>
                    <svg>
                      <use href="/sprite.svg#icon-dot"></use>
                    </svg>

                    <Link
                      href={`${path}${item.href}`}
                      onClick={() => {
                        setMobileMenu(false);
                        setSubMenu(!subMenu);
                      }}
                    >
                      {lang === i18n.locales[0] ? item.titleUk : item.titleEn}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default FooterNav;
