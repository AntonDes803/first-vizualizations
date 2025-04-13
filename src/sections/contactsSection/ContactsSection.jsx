import { contacts, faceInsta } from "@/data/contactsData";
import styles from "./ContactsSection.module.scss";

const ContactsSection = ({ lang, dictionary }) => {
  // console.log("contacts", contacts);

  // console.log("faceInsta", faceInsta);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">ContactsSection</div>
    </section>
  );
};

export default ContactsSection;
