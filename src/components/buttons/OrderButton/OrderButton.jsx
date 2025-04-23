"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";

import styles from "./OrderButton.module.scss";

const OrderButton = ({ customClass, text }) => {
  const { openModal } = useContext(SiteContext);
  return (
    <button onClick={openModal} className={`${styles.button} ${customClass}`}>
      {text}
    </button>
  );
};

export default OrderButton;

// customClass="" text={dictionary.orderBtnText}
