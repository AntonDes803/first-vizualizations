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

  // если язык по умолчанию, то убираем его из url (в нашем случае uk))
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;
  // console.log("path", path);

  return (
    <nav className={`${styles.navBlock} ${customClass}`}>
      {/* а чого тут ul ? не повинен бути nav ? */}
      {isMobile && (
        <ul className={styles.navLinks}>
          {navLinksData.map((el, i) => {
            //  начинается проверка для отображения активной страниці (from eye-detect)
            let checkedPath = `${path}${el.href}`;
            // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
            const resultPath =
              checkedPath === `/${i18n.locales[1]}/`
                ? checkedPath.slice(0, -1)
                : checkedPath;
            // console.log("resultPath", resultPath);

            // const isInHeader = true; // в eye-detect приходило как props с родительского компонента;  здесь просто задал, чтоб не біло ошибок

            const pageLinkClassName = (linkStyles = null) => {
              // if (pathname === el.href && isInHeader) {
              // if (pathname === `${path}${el.href}` && isInHeader) {
              // if (pathname.endsWith(`${path}${el.href}`) && isInHeader) {
              if (pathname.endsWith(resultPath)) {
                return `${linkStyles} ${styles.activeLink}`; // нужно добавить и скорректировать
              } else {
                return linkStyles; // нужно добавить и скорректировать
              }
            };
            // console.log("pageLinkClassName", pageLinkClassName());

            // заканчивается проверка

            const isServiceItem = el.titleEn === "Services";

            return (
              <li key={i}>
                <div
                  // className={styles.titleWrapp}
                  className={pageLinkClassName(styles.titleWrapp)}

                  // onMouseOver={(e) => {
                  //   e.target.classList.add(`${styles.hoverLink}`);
                  // }}
                  // onMouseOut={(e) => {
                  //   e.target.classList.remove(`${styles.hoverLink}`);
                  // }}
                >
                  {/* if item services - open or close subMenu. if another - close whole BurgerMenu */}
                  {isServiceItem ? (
                    <span
                      // className={pageLinkClassName()} // from eye-detect
                      onClick={() => {
                        setSubMenu(!subMenu);
                      }}
                    >
                      {lang === i18n.locales[0] ? el.titleUk : el.titleEn}
                    </span>
                  ) : (
                    <Link
                      href={`${path}${el.href}`}
                      // className={pageLinkClassName()} // from eye-detect
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
                      //  начинается проверка для отображения активной страниці (from eye-detect)
                      let resultPath = item.href;
                      // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
                      // const resultPath =
                      //   checkedPath === `/${i18n.locales[1]}/`
                      //     ? checkedPath.slice(0, -1)
                      //     : checkedPath;
                      // console.log("resultPath", resultPath);

                      // const isInHeader = true; // в eye-detect приходило как props с родительского компонента;  здесь просто задал, чтоб не біло ошибок

                      const pageLinkClassName = (linkStyles = null) => {
                        // if (pathname === el.href && isInHeader) {
                        // if (pathname === `${path}${el.href}` && isInHeader) {
                        // if (pathname.endsWith(`${path}${el.href}`) && isInHeader) {
                        if (pathname.endsWith(resultPath)) {
                          return `${linkStyles} ${styles.activeLink}`; // нужно добавить и скорректировать
                        } else {
                          return linkStyles; // нужно добавить и скорректировать
                        }
                      };
                      // console.log("pageLinkClassName", pageLinkClassName());

                      // заканчивается проверка
                      return (
                        <li
                          key={i}
                          className={pageLinkClassName(styles.subMenuItem)}
                          // onMouseOver={(e) => {
                          //   e.target.classList.add(`${styles.hoverLink}`);
                          // }}
                          // onMouseOut={(e) => {
                          //   e.target.classList.remove(`${styles.hoverLink}`);
                          // }}
                        >
                          <svg>
                            {/* так було */}
                            {/* <use href="sprite.svg#icon-dot"></use> */}
                            {/* а так має бути */}
                            <use href="/sprite.svg#icon-dot"></use>
                            {/* ось іпричина помилки */}
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
              //  начинается проверка для отображения активной страниці (from eye-detect)
              let checkedPath = `${path}${el.href}`;
              // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
              const resultPath =
                checkedPath === `/${i18n.locales[1]}/`
                  ? checkedPath.slice(0, -1)
                  : checkedPath;
              // console.log("resultPath", resultPath);

              // const isInHeader = true; // в eye-detect приходило как props с родительского компонента;  здесь просто задал, чтоб не біло ошибок

              const pageLinkClassName = (linkStyles = null) => {
                // if (pathname === el.href && isInHeader) {
                // if (pathname === `${path}${el.href}` && isInHeader) {
                // if (pathname.endsWith(`${path}${el.href}`) && isInHeader) {
                if (pathname.endsWith(resultPath)) {
                  return `${linkStyles} ${styles.activeLink}`; // нужно добавить и скорректировать
                } else {
                  return linkStyles; // нужно добавить и скорректировать
                }
              };
              // console.log("pageLinkClassName", pageLinkClassName());

              // заканчивается проверка
              return (
                <li key={i}>
                  <div
                    // className={styles.titleWrapp}
                    className={pageLinkClassName(styles.titleWrapp)}
                    // onMouseOver={(e) => {
                    //   e.target.classList.add(`${styles.hoverLink}`);
                    // }}
                    // onMouseOut={(e) => {
                    //   e.target.classList.remove(`${styles.hoverLink}`);
                    // }}
                  >
                    <Link
                      href={`${path}${el.href}`}
                      // className={pageLinkClassName()} // from eye-detect
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
            <ul
              // className={
              //   subMenu
              //     ? `${styles.subMenu} ${styles.subMenuVisible}`
              //     : `${styles.subMenu} ${styles.subMenuHidden}`
              // }
              className={`${styles.subMenu} ${styles.subMenuVisible}`}
            >
              {servicesNavLinks.serviceId.map((item, i) => {
                //  начинается проверка для отображения активной страниці (from eye-detect)
                let resultPath = item.href;
                // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
                // const resultPath =
                //   checkedPath === `/${i18n.locales[1]}/`
                //     ? checkedPath.slice(0, -1)
                //     : checkedPath;
                // console.log("resultPath", resultPath);

                // const isInHeader = true; // в eye-detect приходило как props с родительского компонента;  здесь просто задал, чтоб не біло ошибок

                const pageLinkClassName = (linkStyles = null) => {
                  // if (pathname === el.href && isInHeader) {
                  // if (pathname === `${path}${el.href}` && isInHeader) {
                  // if (pathname.endsWith(`${path}${el.href}`) && isInHeader) {
                  if (pathname.endsWith(resultPath)) {
                    return `${linkStyles} ${styles.activeLink}`; // нужно добавить и скорректировать
                  } else {
                    return linkStyles; // нужно добавить и скорректировать
                  }
                };
                // console.log("pageLinkClassName", pageLinkClassName());

                // заканчивается проверка
                return (
                  <li
                    key={i}
                    // className={styles.subMenuItem}
                    className={pageLinkClassName(styles.subMenuItem)}

                    // onMouseOver={(e) => {
                    //   e.target.classList.add(`${styles.hoverLink}`);
                    // }}
                    // onMouseOut={(e) => {
                    //   e.target.classList.remove(`${styles.hoverLink}`);
                    // }}
                  >
                    <svg>
                      {/* так було */}
                      {/* <use href="sprite.svg#icon-dot"></use> */}
                      {/* а так має бути */}
                      <use href="/sprite.svg#icon-dot"></use>
                      {/* ось іпричина помилки */}
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
