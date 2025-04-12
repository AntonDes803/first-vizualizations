import Image from "next/image";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = (className) => {
  return (
    <figure className={`${className} ${styles.logo}`}>
      <Image
        src="/images/svgs/Logo.svg"
        alt="MALOV&PARTNERS"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </figure>
  );
};

export default Logo;
