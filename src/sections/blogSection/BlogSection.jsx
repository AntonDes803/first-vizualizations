"use client";

import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import Pagination from "@/components/Pagination/Pagination";
import BlogCardList from "./BlogCardList";
import { useBlogCards } from "./useBlogCards";
import styles from "./BlogSection.module.scss";

const BlogSection = ({ lang, dictionary }) => {
  const sectionTitle = dictionary.title.toUpperCase();
  const titleArray = stringSplittingByDelimiter(sectionTitle, "&");

  const {
    currentCards,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalItems,
  } = useBlogCards();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={styles.title}>
          {titleArray[0]}
          <span className="ampersandColor">{titleArray[1]}</span>
          {titleArray[2]}
        </h2>
        <p className={styles.textBlog}>{dictionary.description}</p>

        <BlogCardList
          cards={currentCards}
          lang={lang}
          cardLinkText={dictionary.cardLinkText}
        />
        {totalItems > itemsPerPage && (
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};

export default BlogSection;
