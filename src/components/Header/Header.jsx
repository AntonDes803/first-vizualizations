// import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
// import Logo from "../Logo/Logo";
// import BurgerMenu from "./BurgerMenu/BurgerMenu";
// import styles from "./Header.module.scss";
// import PhoneLink from "./PhoneLink/PhoneLink";

// const Header = ({ lang, dictionary }) => {
//   return (
//     <header className={styles.header}>
//       <div className={`container ${styles.container}`}>
//         <Logo />

//         <div className={styles.rightSide}>
//           <PhoneLink className={styles.phone} />

//           <BurgerBtn />
//         </div>
//       </div>

//       <BurgerMenu lang={lang} />
//     </header>
//   );
// };

// export default Header;

// --------------------------------------------------------
"use client";
import { usePathname } from "next/navigation";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import PhoneLink from "./PhoneLink/PhoneLink";
import styles from "./Header.module.scss";

const Header = ({ lang, dictionary }) => {
  const pathname = usePathname();
  const isOnBlogPages = pathname.includes("/blog");

  return (
    <header
      className={
        isOnBlogPages ? `${styles.header} ${styles.darkBg}` : styles.header
      }
    >
      <div className={`container ${styles.container}`}>
        <Logo lang={lang} customClass="" />

        <div className={styles.rightSide}>
          <PhoneLink className={styles.phone} />

          <BurgerBtn />
        </div>
      </div>

      <BurgerMenu lang={lang} />
    </header>
  );
};

export default Header;
