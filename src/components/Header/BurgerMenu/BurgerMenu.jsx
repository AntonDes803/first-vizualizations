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
          <HeaderNav lang={lang} />

          {/* <Navigation
            className={styles.headerNavigation}
            data={navLinksData}
            arrowStyles={{
              usual: styles.arrowStyles,
              isClicked: styles.arrowStylesClicked,
            }}
            titleWrapp={styles.titleWrapp}
            scvHref="/sprite.svg#icon-arrow_right"
            subMenuStyles={{
              usual: styles.subMenu,
              visible: styles.subMenuVisible,
              hidden: styles.subMenuHidden,
            }}
            onMouseOver={(e) => {
              e.target.classList.add(`${styles.hoverLink}`);
            }}
            onMouseOut={(e) => {
              e.target.classList.remove(`${styles.hoverLink}`);
            }}
          /> */}

          <div>
            <LangSwitcher lang={lang} />

            <SocialLinks dark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
