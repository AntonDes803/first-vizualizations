"use client";
import React, { useContext, useEffect } from "react";
import { SiteContext } from "@/context/SiteContext";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import HeaderNav from "../HeaderNav/HeaderNav";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ lang }) => {
  const { mobileMenu, mobileMenuContent } = useContext(SiteContext);

  useEffect(() => {
    if (window !== undefined && mobileMenu) {
      document.body.classList.add("stopBodyScroll");
    }

    return () => {
      document.body.classList.remove("stopBodyScroll");
    };
  }, [mobileMenu]);

  if (!mobileMenu) {
    return;
  }

  return (
    <div className={styles.burgerMenuFrame}>
      <div
        className={
          mobileMenuContent
            ? `${styles.burgerMenuSection} ${styles.burgerMenuSectionVisible}`
            : `${styles.burgerMenuSection} ${styles.burgerMenuSectionHidden}`
        }
      >
        <div className={`container ${styles.container}`}>
          <HeaderNav lang={lang} customClass={styles.customHeaderNav} />

          <div className={styles.langSwitcherAndSocLinksWrapper}>
            <LangSwitcher lang={lang} />
            <SocialLinks customClass="" dark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
