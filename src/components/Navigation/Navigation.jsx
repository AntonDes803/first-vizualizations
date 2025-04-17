"use client";

import { SiteContext } from "@/context/SiteContext";
import Link from "next/link";
import React, { useContext, useState } from "react";

const Navigation = ({
  className,
  data,
  arrowStyles,
  titleWrapp,
  scvHref,
  subMenuStyles,
  onMouseOver,
  onMouseOut,
}) => {
  // const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  // console.log(subMenuStyles.visible);

  const [subMenu, setSubMenu] = useState(true);

  return (
    <ul className={className}>
      {data.map((el, i) => (
        <li key={i}>
          <div className={titleWrapp}>
            <Link
              href={el.href}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              {el.titleUk}
            </Link>
            {el.serviceId && scvHref ? (
              <svg
                className={
                  subMenu
                    ? `${arrowStyles.usual} ${arrowStyles.isClicked}`
                    : `${arrowStyles.usual}`
                }
                onClick={() => {
                  setSubMenu(!subMenu);
                  // console.log(subMenu);
                }}
              >
                <use href={scvHref}></use>
              </svg>
            ) : null}
          </div>

          {el.serviceId && (
            <ul
              className={
                subMenu
                  ? `${subMenuStyles.usual} ${subMenuStyles.visible}`
                  : `${subMenuStyles.usual} ${subMenuStyles.hidden}`
              }
            >
              {el.serviceId.map((el, i) => (
                <li key={i}>
                  <svg>
                    <use href="sprite.svg#icon-dot"></use>
                  </svg>
                  <Link href={`${el.href}${el.href}`}>{el.titleUk}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
