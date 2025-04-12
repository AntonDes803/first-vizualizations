import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import PhoneLink from "./PhoneLink/PhoneLink";

const Header = ({ lang, dictionary }) => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo />

        <div className={styles.rightSide}>
          <PhoneLink className={styles.phone} />

          <BurgerBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <h1>{dictionary.header.topTitle}</h1> */
}
