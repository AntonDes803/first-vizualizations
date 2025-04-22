import Image from "next/image";
import OrderButton from "@/components/buttons/OrderButton/OrderButton";
import { contacts, faceInsta } from "@/data/contactsData";
import styles from "./ContactsSection.module.scss";

const ContactsSection = ({ lang, dictionary }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>{dictionary.title}</h1>

          <ul className={styles.contactsList}>
            {contacts.map((item) => {
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={styles.socLinkItem}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className={`${styles.iconClass} ${styles[item.name]}`}>
                      <use href={item.icon} />
                    </svg>
                    {item.contact}
                  </a>
                </li>
              );
            })}
          </ul>

          <h2 className={styles.subTitle}>{dictionary.subTitle}</h2>

          <ul className={styles.faceInstaWrapper}>
            {faceInsta.map((item) => {
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={styles.faceInstaItem}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className={`${styles.iconClass} ${styles[item.name]}`}>
                      <use href={item.icon} />
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>

          <OrderButton
            customClass={styles.customOrderBtn}
            text={dictionary.orderBtnText}
          />
        </div>

        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src="/images/dev/contactsPage/contacts-page-img.webp"
            alt={dictionary.imgAlt}
            sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px"
            fill={true}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
