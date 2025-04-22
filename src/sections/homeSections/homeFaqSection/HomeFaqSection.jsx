"use client";
import { useState } from "react";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeFaqSection.module.scss";

const HomeFaqSection = ({ lang, dictionary, data }) => {
  const [openItems, setOpenItems] = useState([]);

  const handleOpen = (id) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((item) => item !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.title}>{dictionary.title}</h2>
        <ul>
          {data.map((el, i) => {
            const id = i + 1;
            const isActive = openItems.includes(id);

            return (
              <li key={id} className={styles.faqItem}>
                <h3
                  data-id={id}
                  className={styles.faqTitle}
                  onClick={() => handleOpen(id)}
                >
                  {lang === i18n.locales[0] ? el.questionUk : el.questionEn}
                  <svg
                    className={isActive ? styles.isOpenSvg : styles.isClosedSvg}
                  >
                    <use href="/sprite.svg#icon-plus"></use>
                  </svg>
                </h3>

                <div
                  className={
                    !isActive
                      ? styles.answerWrapp
                      : `${styles.answerWrapp} ${styles.openedAnswerWrapp}`
                  }
                >
                  <h4 className={styles.answer}>
                    {lang === i18n.locales[0] ? el.answerUk : el.answerEn}
                  </h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HomeFaqSection;
