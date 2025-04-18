"use client";

import React, { useState } from "react";
import styles from "./HeaderNav.module.scss";

import { navLinksData as data } from "@/data/navLinksData";
import Link from "next/link";

const HeaderNav = () => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <ul className={styles.headerNavigation}>
      {data.map((el, i) => (
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
            <Link href={el.href}>{el.titleUk}</Link>

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
                    <use href="sprite.svg#icon-dot"></use>
                  </svg>

                  <Link href={`${el.href}${item.href}`}>{item.titleUk}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HeaderNav;
