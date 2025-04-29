import FooterNav from "./FooterNav/FooterNav";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.scss";

const Footer = ({ lang, dictionary }) => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <FooterNav lang={lang} customClass={styles.customFooterNav} />

        <div className={styles.socLinksAndPrivacyPolicyWrapper}>
          <SocialLinks customClass={styles.customSocLinks} />
          <a
            className={styles.privacyPolicyLink}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary.policy}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
