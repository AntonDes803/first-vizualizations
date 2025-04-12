import React from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = () => {
  return (
    <button className={styles.burgerBtn}>
      <svg>
        <use href="/sprite.svg#icon-menu"></use>
      </svg>
    </button>
  );
};

export default BurgerBtn;
