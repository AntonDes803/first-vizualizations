import styles from "./OrderBtn.module.scss";

const OrderBtn = ({ customClass, text }) => {
  return <button className={`${styles.button} ${customClass}`}>{text}</button>;
};

export default OrderBtn;

// customClass="" text={dictionary.orderBtnText}
