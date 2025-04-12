import styles from "./Footer.module.scss";

const Footer = ({ lang, dictionary }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2>{dictionary.footer.policy}</h2>
      </div>
    </footer>
  );
};

export default Footer;
