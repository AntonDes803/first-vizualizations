"use client";

import React, { useContext } from "react";
import styles from "./BurgerBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

const BurgerBtn = () => {
  const { mobileMenu, setMobileMenu, setMobileMenuContent } =
    useContext(SiteContext);

  const toggleMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenuContent(false);

      setTimeout(() => {
        setMobileMenu(false);
      }, 200);
    } else {
      setMobileMenu(true);

      setTimeout(() => {
        setMobileMenuContent(true);
      }, 200);
    }
  };

  return (
    <button className={styles.burgerBtn} onClick={toggleMobileMenu}>
      <svg>
        <use href="/sprite.svg#icon-menu"></use>
      </svg>
    </button>
  );
};

export default BurgerBtn;
