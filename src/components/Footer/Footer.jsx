import { socLinks } from "@/data/contactsData";
import styles from "./Footer.module.scss";

const Footer = ({ lang, dictionary }) => {
  // console.log("soclLinks", socLinks);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2>{dictionary.policy}</h2>
      </div>
    </footer>
  );
};

export default Footer;
