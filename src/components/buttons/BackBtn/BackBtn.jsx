"use client";
import { useRouter } from "next/navigation";
import styles from "./BackBtn.module.scss";

const BackBtn = ({ customClass, text }) => {
  const router = useRouter();

  return (
    <button
      className={`${styles.button} ${customClass}`}
      onClick={() => router.back()}
    >
      <svg className={styles.arrowIcon}>
        <use href="/sprite.svg#icon-arrow_right" />
      </svg>
      {text}
    </button>
  );
};

export default BackBtn;
