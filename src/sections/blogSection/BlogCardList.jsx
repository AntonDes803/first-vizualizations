// components/BlogCardList/BlogCardList.tsx
import React from "react";
import styles from "./BlogSection.module.scss";
import BlogCard from "./BlogCard";

const BlogCardList = ({ cards, lang, cardLinkText }) => {
  return (
    <ul className={styles.cardList}>
      {cards.map((item, index) => (
        <li key={index}>
          <BlogCard item={item} lang={lang} cardLinkText={cardLinkText} />
        </li>
      ))}
    </ul>
  );
};

export default BlogCardList;
