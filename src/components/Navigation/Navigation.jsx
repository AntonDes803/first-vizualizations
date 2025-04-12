"use client";

import { SiteContext } from "@/context/SiteContext";
import Link from "next/link";
import React, { useContext } from "react";

const Navigation = ({ className, data }) => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);

  //   console.log("navLinksData", navLinksData);

  return (
    <nav className={className}>
      {data.map((el, i) => (
        <Link key={i} href={el.href}>
          {el.titleUk}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
