"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";

import styles from "./OrderForm.module.scss";

const SuccessContent = ({ dictionarySuccess }) => {
    const { closeModal } = useContext(SiteContext);

    return (
        <div className={styles.successBox}>
            <h3 className={styles.successTitle}>{dictionarySuccess.title}</h3>
            <button
                onClick={closeModal}
                className={`${styles.submitBtn} ${styles.btnOk}`}
            >
                {dictionarySuccess.btnText}
            </button>
        </div>
    );
};

export default SuccessContent;
