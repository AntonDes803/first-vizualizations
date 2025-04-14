"use client";

import React from "react";
import { useWindowResize } from "@/hooks/windowResize";
import { phone } from "@/data/contactsData";

const PhoneLink = ({ className }) => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  return (
    // <a href="tel:+380981085033" className={`${className}`}>
    <a href={phone.href} className={`${className}`}>
      <svg>
        {/* <use href="/sprite.svg#icon-phone"></use> */}
        <use href={phone.icon}></use>
      </svg>

      {/* {!isMobile && <span>+38 (098) 108-50-33</span>} */}
      {!isMobile && <span>{phone.contact}</span>}
    </a>
  );
};

export default PhoneLink;
