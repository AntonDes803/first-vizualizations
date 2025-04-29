"use client";
import { useWindowResize } from "@/hooks/windowResize";
import { phone } from "@/data/contactsData";

const PhoneLink = ({ className }) => {
  const { isMobile } = useWindowResize();

  return (
    <a href={phone.href} className={`${className}`}>
      <svg>
        <use href={phone.icon}></use>
      </svg>

      {!isMobile && <span>{phone.contact}</span>}
    </a>
  );
};

export default PhoneLink;
