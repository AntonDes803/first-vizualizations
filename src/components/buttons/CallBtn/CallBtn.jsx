import { phone } from "@/data/contactsData";
import styles from "./CallBtn.module.scss";

const CallBtn = ({ customClass, text }) => {
  return (
    <a href={phone.href} className={`${styles.button} ${customClass}`}>
      {text}
    </a>
  );
};

export default CallBtn;
