"use client";
import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiteContext } from "@/context/SiteContext";
import { i18n } from "@/dictionaries/i18n.config";
import { useWindowResize } from "@/hooks/windowResize";
import { navLinksData } from "@/data/navLinksData";
import styles from "./HeaderNav.module.scss";

const HeaderNav = ({ lang, customClass }) => {
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
    <nav className={`${styles.navBlock} ${customClass}`}>
      {isMobile && (
        <ul className={styles.navLinks}>
          {navLinksData.map((el, i) => {
            //  начинается проверка для отображения стилей активной страницы
            let checkedPath = `${path}${el.href}`;
            // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
            const resultPath =
              checkedPath === `/${i18n.locales[1]}/`
                ? checkedPath.slice(0, -1)
                : checkedPath;
            // проверка активна ли страница для отображения соответствующих стилей на ссылке
            const isActivePage = pathname.endsWith(resultPath);
            // заканчивается проверка

            const isServiceItem = el.titleEn === "Services";

            return (
              <li key={i}>
                <div
                  className={styles.titleWrapp}
                  id={isActivePage ? "activePageLink" : null}
                >
                  {/* при клике на services - открывается или закрывается подменю. при клике на ссылки других страниц - закрытие БургерМеню и переход на другую страницу */}
                  {isServiceItem ? (
                    <span
                      onClick={() => {
                        setSubMenu(!subMenu);
                      }}
                    >
                      {lang === i18n.locales[0] ? el.titleUk : el.titleEn}
                    </span>
                  ) : (
                    <Link
                      href={`${path}${el.href}`}
                      onClick={() => {
                        setMobileMenu(false);
                        setSubMenu(!subMenu);
                      }}
                    >
                      {lang === i18n.locales[0] ? el.titleUk : el.titleEn}
                    </Link>
                  )}

                  {el.serviceId && (
                    <svg
                      className={
                        subMenu
                          ? `${styles.arrowStyles} ${styles.arrowStylesClicked}`
                          : `${styles.arrowStyles}`
                      }
                      onClick={() => {
                        setSubMenu(!subMenu);
                      }}
                    >
                      <use href="/sprite.svg#icon-schevron_bottom"></use>
                    </svg>
                  )}
                </div>

                {el.serviceId && (
                  <ul
                    className={
                      subMenu
                        ? `${styles.subMenu} ${styles.subMenuVisible}`
                        : `${styles.subMenu} ${styles.subMenuHidden}`
                    }
                  >
                    {el.serviceId.map((item, i) => {
                      // проверка активна ли страница для отображения соответствующих стилей на ссылке
                      const isActivePage = pathname.endsWith(item.href);

                      return (
                        <li
                          key={i}
                          className={styles.subMenuItem}
                          id={isActivePage ? "activePageLink" : null}
                        >
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
                            {lang === i18n.locales[0]
                              ? item.titleUk
                              : item.titleEn}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {!isMobile && (
        <>
          <ul className={styles.navLinks}>
            {navLinksWithoutServices.map((el, i) => {
              //  начинается проверка для отображения стилей активной страницы
              let checkedPath = `${path}${el.href}`;
              // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
              const resultPath =
                checkedPath === `/${i18n.locales[1]}/`
                  ? checkedPath.slice(0, -1)
                  : checkedPath;
              // проверка активна ли страница для отображения соответствующих стилей на ссылке
              const isActivePage = pathname.endsWith(resultPath);
              // заканчивается проверка

              return (
                <li key={i}>
                  <div
                    className={styles.titleWrapp}
                    id={isActivePage ? "activePageLink" : null}
                  >
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
                // проверка активна ли страница для отображения соответствующих стилей на ссылке
                const isActivePage = pathname.endsWith(item.href);

                return (
                  <li
                    key={i}
                    className={styles.subMenuItem}
                    id={isActivePage ? "activePageLink" : null}
                  >
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
        </>
      )}
    </nav>
  );
};

export default HeaderNav;
