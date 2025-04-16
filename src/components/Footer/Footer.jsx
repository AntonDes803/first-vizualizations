import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.scss";

const Footer = ({ lang, dictionary }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <SocialLinks />
        <h2>{dictionary.policy}</h2>
      </div>
    </footer>
  );
};

export default Footer;
