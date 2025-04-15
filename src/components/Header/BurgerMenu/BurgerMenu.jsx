"use client";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { SiteContext } from "@/context/SiteContext";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import Navigation from "@/components/Navigation/Navigation";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { headerNavigation, headerServices } from "@/data/navLinksData";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
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
          <LangSwitcher />
          <Navigation
            className={styles.headerNavigation}
            data={headerNavigation}
          />
          <Link href={headerServices.href}>{headerServices.titleUk}</Link>
          <ul>
            {headerServices.serviceId.map((el, i) => (
              <Link key={i} href={`${headerServices.href}${el.href}`}>
                {el.titleUk}
              </Link>
            ))}
          </ul>
          <SocialLinks dark />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
