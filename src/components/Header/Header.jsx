import styles from "./Header.module.scss";

const Header = ({ lang, dictionary }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1>{dictionary.header.topTitle}</h1>
      </div>
    </header>
  );
};

export default Header;
