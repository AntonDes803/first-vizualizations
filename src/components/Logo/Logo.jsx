import Image from "next/image";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = (className) => {
  return (
    <figure className={`${className} ${styles.logo}`}>
      <Image
        src="/svg/logo.svg"
        alt="MALOV&PARTNERS"
        fill
        sizes="33vw"
        priority={true}
      />
    </figure>
  );
};

export default Logo;
