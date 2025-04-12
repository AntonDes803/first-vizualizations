"use client";

import React from "react";
import { useWindowResize } from "@/hooks/windowResize";

const PhoneLink = ({ className }) => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  return (
    <a href="tel:+380981085033" className={`${className}`}>
      <svg>
        <use href="/sprite.svg#icon-phone"></use>
      </svg>

      {!isMobile && <span>+38 (098) 108-50-33</span>}
    </a>
  );
};

export default PhoneLink;
