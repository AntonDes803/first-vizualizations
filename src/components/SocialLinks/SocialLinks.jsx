import { socLinks } from "@/data/contactsData";
import styles from "./SocialLinks.module.scss";

const SocialLinks = ({ customClass, dark }) => {
  return (
    <ul className={`${styles.socialList} ${customClass}`}>
      {socLinks.map((item) => {
        const darkSvgClassname = `${item.name}Dark`;

        return (
          <li key={item.name}>
            <a
              href={item.href}
              className={styles.socLinkItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={
                  dark
                    ? `${styles.iconClass} ${styles[darkSvgClassname]}`
                    : `${styles.iconClass} ${styles[item.name]}`
                }
              >
                <use href={item.icon} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
