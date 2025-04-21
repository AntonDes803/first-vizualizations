"use client";
import React, { useState } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import { navLinksData as data } from "@/data/navLinksData";
import styles from "./HeaderNav.module.scss";

const HeaderNav = ({ lang }) => {
  const [subMenu, setSubMenu] = useState(false);

  // const pathname = usePathname();

  // если язык по умолчанию, то убираем его из url (в нашем случае uk))
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;
  // console.log("path", path);

  return (
    // а чого тут ul ? не повинен бути nav ?
    <ul className={styles.headerNavigation}>
      {data.map((el, i) => {
        // //  начинается проверка для отображения активной страниці (from eye-detect)
        // let checkedPath = `${path}${el.href}`;
        // // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
        // const resultPath =
        //   checkedPath === `/${i18n.locales[1]}/`
        //     ? checkedPath.slice(0, -1)
        //     : checkedPath;
        // // console.log("resultPath", resultPath);

        // const isInHeader = true; // в eye-detect приходило как props с родительского компонента;  здесь просто задал, чтоб не біло ошибок

        // const pageLinkClassName = () => {
        //   // if (pathname === el.href && isInHeader) {
        //   // if (pathname === `${path}${el.href}` && isInHeader) {
        //   // if (pathname.endsWith(`${path}${el.href}`) && isInHeader) {
        //   if (pathname.endsWith(resultPath) && isInHeader) {
        //     return `${styles.activeLink}`; // нужно доваить и скорректировать
        //   } else {
        //     return `${linkStyles}`; // нужно добавить и скорректировать
        //   }
        // };
        // console.log("pageLinkClassName", pageLinkClassName());

        // // заканчивается проверка

        return (
          <li key={i}>
            <div
              className={styles.titleWrapp}
              onMouseOver={(e) => {
                e.target.classList.add(`${styles.hoverLink}`);
              }}
              onMouseOut={(e) => {
                e.target.classList.remove(`${styles.hoverLink}`);
              }}
            >
              <Link
                href={`${path}${el.href}`}
                // className={pageLinkClassName()} // from eye-detect
              >
                {lang === i18n.locales[0] ? el.titleUk : el.titleEn}
              </Link>

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
                  <use href="/sprite.svg#icon-arrow_right"></use>
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
                {el.serviceId.map((item, i) => (
                  <li
                    key={i}
                    onMouseOver={(e) => {
                      e.target.classList.add(`${styles.hoverLink}`);
                    }}
                    onMouseOut={(e) => {
                      e.target.classList.remove(`${styles.hoverLink}`);
                    }}
                  >
                    <svg>
                      {/* так було */}
                      {/* <use href="sprite.svg#icon-dot"></use> */}
                      {/* а так має бути */}
                      <use href="/sprite.svg#icon-dot"></use>
                      {/* ось іпричина помилки */}
                    </svg>

                    <Link href={`${path}${el.href}${item.href}`}>
                      {lang === i18n.locales[0] ? item.titleUk : item.titleEn}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderNav;
